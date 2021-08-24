import { Contract } from "ethers";
import fs from "fs";
import { config, ethers } from "hardhat";

const CONTRACT_ADDRESSES = `${config.paths.artifacts}/contracts/index.ts`;

async function main() {
  if (fs.existsSync(CONTRACT_ADDRESSES)) {
    fs.unlinkSync(CONTRACT_ADDRESSES);
  }

  const YourContract = await ethers.getContractFactory("YourContract");
  const contract = await YourContract.deploy("Hello, Hardhat!");
  await contract.deployed();
  saveFrontendFiles(contract, "YourContract");
  console.log("YourContract deployed to:", contract.address);

  const MulticallContract = await ethers.getContractFactory("Multicall");
  const multicallContract = await MulticallContract.deploy();
  await multicallContract.deployed();
  saveFrontendFiles(multicallContract, "MulticallContract");
  console.log("Multicall deployed to:", multicallContract.address);
}

function saveFrontendFiles(contract: Contract, contractName: string) {
  fs.appendFileSync(
    CONTRACT_ADDRESSES,
    `export const ${contractName} = '${contract.address}'\n`
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
