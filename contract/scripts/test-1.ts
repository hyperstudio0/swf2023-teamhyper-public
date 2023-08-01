import { ethers } from "hardhat";
import chai from "chai";
import { solidity } from "ethereum-waffle";
import {AntiPhishingSwf2023} from "../typechain-types";
import * as Contracts from "../typechain-types";

chai.use(solidity);
const { expect } = chai;

describe("AntiPhishingSwf2023", function() {
    let antiPhishing: AntiPhishingSwf2023;

    beforeEach(async function() {
        // Deploying the contract
        const contract = await ethers.getContractFactory("AntiPhishingSwf2023") as Contracts.AntiPhishingSwf2023__factory;
        // const deployedContract = (await contract.deploy()) as AntiPhishingSwf2023;
        // await deployedContract.waitForDeployment();
        const CONTRACT_ADDRESS = "0x4AE6AdF2c104a613Bba214f40517c11D8E66d794"
        antiPhishing = contract.attach(CONTRACT_ADDRESS) as AntiPhishingSwf2023;
        console.log(antiPhishing, 'antiPhishing');
    });

    it("Should add to white list and validate", async function() {
        const did = "unique-did";
        await antiPhishing.addToWhiteList(did);
        expect(await antiPhishing.isWhiteListed(did)).to.be.true;
    });

    it("Should add to black list and validate", async function() {
        const id = "unique-id";
        const reason = 0; // PhishingAttempt
        await antiPhishing.addToBlackList(id, reason);
        const [isBlackListed, blackListedReason] = await antiPhishing.isBlackListed(id);
        expect(isBlackListed).to.be.true;
        expect(blackListedReason).to.equal(reason);
    });

    it("Should update white list and validate", async function() {
        const oldDid = "old-did";
        const newDid = "new-did";
        await antiPhishing.addToWhiteList(oldDid);
        await antiPhishing.updateWhiteList(oldDid, newDid);
        expect(await antiPhishing.isWhiteListed(newDid)).to.be.true;
        expect(await antiPhishing.isWhiteListed(oldDid)).to.be.false;
    });

    it("Should update black list and validate", async function() {
        const oldId = "old-id";
        const newId = "new-id";
        const oldReason = 0; // PhishingAttempt
        const newReason = 1; // ScamReport
        await antiPhishing.addToBlackList(oldId, oldReason);
        await antiPhishing.updateBlackList(oldId, newId, newReason);
        const [isNewIdBlackListed, newReasonFromList] = await antiPhishing.isBlackListed(newId);
        const [isOldIdBlackListed] = await antiPhishing.isBlackListed(oldId);
        expect(isNewIdBlackListed).to.be.true;
        expect(newReasonFromList).to.equal(newReason);
        expect(isOldIdBlackListed).to.be.false;
    });
});
