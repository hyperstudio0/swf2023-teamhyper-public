import {ethers} from 'hardhat';
import * as Contracts from "../typechain-types";
import {AntiPhishingSwf2023} from "../typechain-types";

async function event(antiPhishing: AntiPhishingSwf2023) {

    antiPhishing.on<"WhitelistIdentityAdded">("WhitelistIdentityAdded", (hash: string, did: string) => {
        console.log(`WhitelistIdentityAdded event: Hash - ${hash}, DID - ${did}`);
    });

    antiPhishing.on<"BlacklistIdentityAdded">("BlacklistIdentityAdded", (hash: string, reason: number, identityType: number) => {
        console.log(`BlacklistIdentityAdded event: Hash - ${hash}, Reason - ${reason}, IdentityType - ${identityType}`);
    });

    antiPhishing.on<"WhitelistIdentityDeleted">("WhitelistIdentityDeleted", (hash: string) => {
        console.log(`WhitelistIdentityDeleted event: Hash - ${hash}`);
    });

    antiPhishing.on<"BlacklistIdentityDeleted">("BlacklistIdentityDeleted", (hash: string) => {
        console.log(`BlacklistIdentityDeleted event: Hash - ${hash}`);
    });


}

async function main() {
    const contract = await ethers.getContractFactory("AntiPhishingSwf2023") as Contracts.AntiPhishingSwf2023__factory;
    // const deployedContract = (await contract.deploy()) as AntiPhishingSwf2023;
    // await deployedContract.waitForDeployment();
    const CONTRACT_ADDRESS = "0x10B31760ab24185B8D364Ea719FbbFE39BEBB2A3";
    const antiPhishing = contract.attach(CONTRACT_ADDRESS) as AntiPhishingSwf2023;
    await event(antiPhishing);

    // Count
    // whiteListCount와 blackListCount를 읽습니다.
    const whiteListCount = await antiPhishing.whiteListCount();
    const blackListCount = await antiPhishing.blackListCount();

    console.log("White List Count:", whiteListCount.toString());
    console.log("Black List Count:", blackListCount.toString());

    // ADD White List
    const did = "unique-did";
    // await antiPhishing.addToWhiteList(did);

    // Confirm White list
    // console.log(await antiPhishing.isWhiteListed(did), 'await antiPhishing.isWhiteListed(did)');

    // Delete White list
    // await antiPhishing.removeFromWhiteList(did);


    // ADD Black List
    const id = "01041533584";
    const reason = 2; // PhishingAttempt
    const type = 2; // PhishingAttempt
    // await antiPhishing.addToBlackList(id, reason, type);

    // Confirm Black list
    const [isBlackListed, blackListedReason, identityType] = await antiPhishing.isBlackListed(id);
    console.log(isBlackListed, 'isBlackListed');
    console.log(blackListedReason, 'blackListedReason');
    console.log(identityType, 'identityType');

    // Delete Black list
    await antiPhishing.removeFromBlackList(id);

}

async function grantRole() {
    // 컨트랙트 주소와 ABI를 설정합니다.
    // const contractAddress = "0xYourContractAddress";
    // const contractABI = [...];  // ABI를 여기에 입력하세요.
    //
    // // ethers를 사용하여 컨트랙트를 연결합니다.
    // const provider = new ethers.providers.Web3Provider(window.ethereum);
    // const signer = provider.getSigner();
    // const contract = new ethers.Contract(contractAddress, contractABI, signer);
    //
    // // WHITELIST_OPERATOR_ROLE의 해시값을 얻습니다.
    // const WHITELIST_OPERATOR_ROLE = await contract.WHITELIST_OPERATOR_ROLE();
    //
    // // 역할을 부여받을 주소를 설정합니다.
    // const recipientAddress = "0xRecipientAddress";
    //
    // // grantRole 함수를 호출합니다.
    // await contract.grantRole(WHITELIST_OPERATOR_ROLE, recipientAddress);
}

main()
    // .then(() => process.exit(0))
    .then(() => {
    })
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
