const hre = require("hardhat");

async function main() {
  const NFT = await hre.ethers.getContractFactory("PixelBattle_ERC1155");
  const CONTRACT_ADDRESS = "0x2d52639F577F148A4cEBcccDD0A9833D0BfFf35b"
  const contract = NFT.attach(CONTRACT_ADDRESS);
  const uri = await contract.uri(1);
  console.log("uri:", uri);
}
main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});