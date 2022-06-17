import { ethers } from "hardhat";

async function main() {
  const YourContract = await ethers.getContractFactory("YourContract");
  const contract = await YourContract.deploy("Hello, Hardhat!");
  await contract.deployed();
  console.log("YourContract deployed to:", contract.address);

  const MulticallContract = await ethers.getContractFactory("Multicall");
  const multicallContract = await MulticallContract.deploy();
  await multicallContract.deployed();
  console.log("Multicall deployed to:", multicallContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
