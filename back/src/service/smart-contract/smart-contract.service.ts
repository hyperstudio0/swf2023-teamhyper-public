import {Injectable} from '@nestjs/common';
import {ethers} from 'ethers';
import * as fs from 'fs';
import * as path from 'path';
import {Count} from "../../model/smart-contract.dto";
import * as process from 'process';
import Web3, {Web3Context} from "web3";
import {Web3Account} from "web3-eth-accounts/lib/types";
import {Contract} from "web3-eth-contract/src/contract";

const dataFilePath = path.resolve(__dirname, '../../../AntiPhishingSwf2023.json');
const data = JSON.parse(fs.readFileSync(dataFilePath, 'utf8')) as any;

@Injectable()
export class SmartContractService {
    private contract;
    private provider: ethers.JsonRpcProvider;
    private owner: ethers.Wallet;
    private web3: Web3;

    constructor() {
        this.web3 = new Web3(process.env.JSON_RPC_URL);
        console.log(this.web3, 'this.web3');
        console.log(process.env.OWNER_PRIVATE_KEY, 'process.env.OWNER_PRIVATE_KEY');
        this.contract = new this.web3.eth.Contract(data.abi, process.env.CONTRACT_ADDRESS);
        const ownerNFTAccount: Web3Account = this.web3.eth.accounts.privateKeyToAccount(`0x${process.env.OWNER_PRIVATE_KEY}`);
        console.log(ownerNFTAccount.address, 'address');
        console.log(data.abi, 'data.abi');
        // 컨트랙트 연결

        // this.contract = new this.web3.eth.Contract(PixelBattleContract.abi, PixelBattleContract.contractAddress);
        console.log(process.env.JSON_RPC_URL, 'process.env.JSON_RPC_URL');
        // this.provider = new ethers.JsonRpcProvider(process.env.JSON_RPC_URL, {
        //     name: 'cronosTestnet',
        //     chainId: 338,
        // }); // JSON_RPC_URL에는 Ethereum node의 URL을 설정해야 합니다.
        // this.owner = new ethers.Wallet(process.env.OWNER_PRIVATE_KEY, this.provider);
        // console.log(this.owner.address,'this.owner.address');
        // this.contract = new ethers.Contract(process.env.CONTRACT_ADDRESS, data.abi, this.owner); // CONTRACT_ADDRESS에는 스마트 컨트랙트의 주소를 설정해야 합니다.
    }

    async abi(): Promise<any> {
        return data.abi;
    }

    async contractAddress(): Promise<string> {
        return process.env.CONTRACT_ADDRESS;
    }


    async event(): Promise<void> {
        if (this.contract) {
            this.contract.once('WhitelistIdentityAdded', (error, event) => {
                console.log(error, 'error');
                console.log(event, 'event');
                // console.log(`WhitelistIdentityAdded event: Hash - ${hash}, DID - ${did}`);
            });

            // this.contract.on("BlacklistIdentityAdded", (hash: string, reason: number, identityType: number) => {
            //     console.log(`BlacklistIdentityAdded event: Hash - ${hash}, Reason - ${reason}, IdentityType - ${identityType}`);
            // });
            //
            // this.contract.on("WhitelistIdentityDeleted", (hash: string) => {
            //     console.log(`WhitelistIdentityDeleted event: Hash - ${hash}`);
            // });
            //
            // this.contract.on("BlacklistIdentityDeleted", (hash: string) => {
            //     console.log(`BlacklistIdentityDeleted event: Hash - ${hash}`);
            // });
        }
    }

    async count(): Promise<Count> {
        const whiteListBigInt = await this.contract.methods.whiteListCount().call();
        const whiteList = whiteListBigInt <= BigInt(Number.MAX_SAFE_INTEGER)  ? Number(whiteListBigInt) : 0;
        const blackListBigInt = await this.contract.methods.blackListCount().call();
        const blackList = blackListBigInt <= BigInt(Number.MAX_SAFE_INTEGER)  ? Number(blackListBigInt) : 0;
        return {
            whiteList,
            blackList,
        };
    }
}
