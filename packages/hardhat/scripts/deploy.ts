import { ethers } from "hardhat";

const BASE_URI = "https://ironsoul0.github.io/brain/";

async function main() {
  const YourContract = await ethers.getContractFactory("YourContract");
  const contract = await YourContract.deploy("Hello, Hardhat!");
  await contract.deployed();
  console.log("YourContract deployed to:", contract.address);

  const MulticallContract = await ethers.getContractFactory("Multicall");
  const multicallContract = await MulticallContract.deploy();
  await multicallContract.deployed();
  console.log("Multicall deployed to:", multicallContract.address);

  const BITToken = await ethers.getContractFactory("BITToken");
  const tokenContract = await BITToken.deploy(ethers.utils.parseEther("100"));
  await tokenContract.deployed();
  console.log("BITToken contract deployed to:", tokenContract.address);

  const BrainToken = await ethers.getContractFactory("BrainNFT");
  const brainContract = await BrainToken.deploy(
    tokenContract.address,
    BASE_URI
  );
  await brainContract.deployed();
  console.log("Brain NFT contract deployed to:", brainContract.address);

  await tokenContract.setBurner(brainContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
