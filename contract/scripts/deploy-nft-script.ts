import { ethers } from "hardhat";
import {AntiPhishingSwf2023} from "../typechain-types";
import * as Contracts from "../typechain-types";

async function main(): Promise<void> {

    const contract = await ethers.getContractFactory("AntiPhishingSwf2023") as Contracts.AntiPhishingSwf2023__factory;
    const deployedContract = (await contract.deploy()) as AntiPhishingSwf2023;

    console.log(deployedContract, 'deployedContract');

    // Wait for contract to be mined
    // await deployedContract.deployTransaction.wait();
    // await deployedContract.interface.

    await deployedContract.waitForDeployment();


    console.log("deployedContract.target:", deployedContract.target);
    console.log("NFT deployed to:", await deployedContract.getAddress());
}

main()
    .then(() => process.exit(0))
    .catch((error: any) => {
        console.error(error);
        process.exit(1);
    });
