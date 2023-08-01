import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import {AuthResultBody, BlacklistResultBody, Count, PostBlackListBody} from "../../model/smart-contract.dto";
import * as process from 'process';
// import Web3, {ContractExecutionError} from "web3";
// import {Web3Account} from "web3-eth-accounts/lib/types";
import {ethers} from 'ethers';
import {ContractExecutionError, Web3} from "web3";
import {Web3Account} from "web3-eth-accounts/lib/types";
import {TxHashService} from "../tx-hash/tx-hash.service";
import {Mode, TxHashEntity, Type} from "../../domain/txhash/txhash.entity";

const dataFilePath = path.resolve(__dirname, '../../../AntiPhishingSwf2023.json');
const data = JSON.parse(fs.readFileSync(dataFilePath, 'utf8')) as any;

@Injectable()
export class SmartContractService {
    private privateKey = `0x${process.env.OWNER_PRIVATE_KEY}`;
    private contract;
    private ownerAddress: Web3Account;
    private web3: Web3;

    constructor(private readonly txHashService: TxHashService) {
        this.web3 = new Web3(process.env.JSON_RPC_URL);
        this.contract = new this.web3.eth.Contract(data.abi, process.env.CONTRACT_ADDRESS);
        this.ownerAddress = this.web3.eth.accounts.privateKeyToAccount(this.privateKey);
    }

    async abi(): Promise<any> {
        return data.abi;
    }

    async contractAddress(): Promise<string> {
        return process.env.CONTRACT_ADDRESS;
    }

    async event(): Promise<void> {
        const provider: ethers.providers.JsonRpcProvider = new ethers.providers.JsonRpcProvider(process.env.JSON_RPC_URL);
        const wallet: ethers.Wallet = new ethers.Wallet(this.privateKey as string, provider);
        const contract: ethers.Contract = new ethers.Contract(process.env.CONTRACT_ADDRESS as string, data.abi, wallet);
        if (contract) {

            try {
                contract.on("WhitelistIdentityAdded", (hash: string, did: string) => {
                    console.log(`WhitelistIdentityAdded event: Hash - ${hash}, DID - ${did}`);
                    const txHash = new TxHashEntity();
                    txHash.type = Type.WHITELIST;
                    txHash.mode = Mode.CREATE;
                    txHash.hash = hash;
                    this.txHashService.create(txHash, 0);
                });
                contract.on("BlacklistIdentityAdded", (hash: string, reason: number, identityType: number) => {
                    console.log(`BlacklistIdentityAdded event: Hash - ${hash}, DID - ${reason} - ${identityType}`);
                    const txHash = new TxHashEntity();
                    txHash.type = Type.BLACKLIST;
                    txHash.mode = Mode.CREATE;
                    txHash.hash = hash;
                    txHash.reason = reason;
                    txHash.identityType = Number(identityType);
                    this.txHashService.create(txHash, 0);
                });
                contract.on("WhitelistIdentityDeleted", (hash: string) => {
                    console.log(`WhitelistIdentityDeleted event: Hash - ${hash}`);
                    const txHash = new TxHashEntity();
                    txHash.type = Type.WHITELIST;
                    txHash.mode = Mode.DELETE;
                    txHash.hash = hash;
                    this.txHashService.create(txHash, 0);

                });
                contract.on("BlacklistIdentityDeleted", (hash: string) => {
                    console.log(`BlacklistIdentityDeleted event: Hash - ${hash}`);
                    const txHash = new TxHashEntity();
                    txHash.type = Type.BLACKLIST;
                    txHash.mode = Mode.DELETE;
                    txHash.hash = hash;
                    this.txHashService.create(txHash, 0);
                });
            } catch (e) {
                console.log(e);
            }
        }
    }

    async count(): Promise<Count> {
        const whiteListBigInt = Number(await this.contract.methods.whiteListCount().call());
        const blackListBigInt = Number(await this.contract.methods.blackListCount().call());
        return {
            whiteList: whiteListBigInt,
            blackList: blackListBigInt,
        };
    }

    async postWhiteList(did: string): Promise<string> {
        try {
            const estimateGas = await this.web3.eth.estimateGas({
                from: this.ownerAddress.address,
                to: await this.contractAddress(),
                data: this.contract.methods.addToWhiteList(did).encodeABI()
            });
            const gasPrice = await this.web3.eth.getGasPrice();
            const tx = {
                from: this.ownerAddress.address,
                to: await this.contractAddress(),
                data: this.contract.methods.addToWhiteList(did).encodeABI(),
                gas: (Math.round(Number(estimateGas) * 1.5)), // 1.5배
                gasPrice: gasPrice
            };
            const signedTx = await this.web3.eth.accounts.signTransaction(tx, this.privateKey)
            const receipt = await this.web3.eth.sendSignedTransaction(signedTx.rawTransaction);

            return receipt.transactionHash.toString();
        } catch (e) {
            if (e instanceof ContractExecutionError) {
                throw new HttpException(
                    e.innerError.message,
                    HttpStatus.BAD_REQUEST,
                );
            }
            console.log(e);
        }
    }

    async postBlackList(body: PostBlackListBody): Promise<string> {
        try {
            const estimateGas = await this.web3.eth.estimateGas({
                from: this.ownerAddress.address,
                to: await this.contractAddress(),
                data: this.contract.methods.addToBlackList(body.id, body.reason, body.identityType).encodeABI()
            });
            const gasPrice = await this.web3.eth.getGasPrice();
            const tx = {
                from: this.ownerAddress.address,
                to: await this.contractAddress(),
                data: this.contract.methods.addToBlackList(body.id, body.reason, body.identityType).encodeABI(),
                gas: (Math.round(Number(estimateGas) * 1.5)), // 1.5배
                gasPrice: gasPrice
            };
            const signedTx = await this.web3.eth.accounts.signTransaction(tx, this.privateKey)
            const receipt = await this.web3.eth.sendSignedTransaction(signedTx.rawTransaction);

            return receipt.transactionHash.toString();
        } catch (e) {
            if (e instanceof ContractExecutionError) {
                throw new HttpException(
                    e.innerError.message,
                    HttpStatus.BAD_REQUEST,
                );
            }
            console.log(e);
        }
    }

    async auth(value: string): Promise<AuthResultBody> {
        try {
            const isWhiteListed = await this.isWhiteListed(value);
            const blackListed = await this.isBlackListed(value);
            return {
                isWhiteListed,
                blackListed
            }
        } catch (e) {
            throw new HttpException(
                e.message,
                HttpStatus.BAD_REQUEST,
            );
        }
    }

    async isWhiteListed(value: string): Promise<boolean> {
        try {
            return await this.contract.methods.isWhiteListed(value).call()
        } catch (e) {
            if (e instanceof ContractExecutionError) {
                throw new HttpException(
                    e.innerError.message,
                    HttpStatus.BAD_REQUEST,
                );
            }
            console.log(e);
        }
    }

    async isBlackListed(value: string): Promise<BlacklistResultBody> {
        try {
            console.log(value, 'value');
            const results: any = await this.contract.methods.isBlackListed(value).call();
            console.log(results, 'results');
            return {
                isBlackListed: results['0'] as boolean,
                reason: Number(results['1']),
                identityType: Number(results['2']),
            }
        } catch (e) {
            if (e instanceof ContractExecutionError) {
                throw new HttpException(
                    e.innerError.message,
                    HttpStatus.BAD_REQUEST,
                );
            }
            throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
        }
    }

    async deleteWhiteList(did: string): Promise<string> {
        try {
            const estimateGas = await this.web3.eth.estimateGas({
                from: this.ownerAddress.address,
                to: await this.contractAddress(),
                data: this.contract.methods.removeFromWhiteList(did).encodeABI()
            });
            const gasPrice = await this.web3.eth.getGasPrice();
            const tx = {
                from: this.ownerAddress.address,
                to: await this.contractAddress(),
                data: this.contract.methods.removeFromWhiteList(did).encodeABI(),
                gas: (Math.round(Number(estimateGas) * 1.5)), // 1.5배
                gasPrice: gasPrice
            };
            const signedTx = await this.web3.eth.accounts.signTransaction(tx, this.privateKey)
            const receipt = await this.web3.eth.sendSignedTransaction(signedTx.rawTransaction);

            return receipt.transactionHash.toString();
        } catch (e) {
            if (e instanceof ContractExecutionError) {
                throw new HttpException(
                    e.innerError.message,
                    HttpStatus.BAD_REQUEST,
                );
            }
            console.log(e);
        }
    }

    async deleteBlackList(id: string): Promise<string> {
        try {
            const estimateGas = await this.web3.eth.estimateGas({
                from: this.ownerAddress.address,
                to: await this.contractAddress(),
                data: this.contract.methods.removeFromBlackList(id).encodeABI()
            });
            const gasPrice = await this.web3.eth.getGasPrice();
            const tx = {
                from: this.ownerAddress.address,
                to: await this.contractAddress(),
                data: this.contract.methods.removeFromBlackList(id).encodeABI(),
                gas: (Math.round(Number(estimateGas) * 1.5)), // 1.5배
                gasPrice: gasPrice
            };
            const signedTx = await this.web3.eth.accounts.signTransaction(tx, this.privateKey)
            const receipt = await this.web3.eth.sendSignedTransaction(signedTx.rawTransaction);

            return receipt.transactionHash.toString();
        } catch (e) {
            if (e instanceof ContractExecutionError) {
                throw new HttpException(
                    e.innerError.message,
                    HttpStatus.BAD_REQUEST,
                );
            }
            console.log(e);
        }
    }

}
