import hre, { ethers } from "hardhat";

const BASE_URI = "https://ironsoul0.github.io/brain/";

async function main() {
  const NFT_ADDRESS = "0xf300cA633C836bB98d5efD063a5C34e13cDAc6Cc";
  const TOKEN_ADDRESS = "0x032b33471C9EF4E88844D846C22E9423fEB99155";

  await hre.run("verify:verify", {
    address: TOKEN_ADDRESS,
    constructorArguments: [ethers.utils.parseEther("1")],
  });

  await hre.run("verify:verify", {
    address: NFT_ADDRESS,
    constructorArguments: [TOKEN_ADDRESS, BASE_URI],
  });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
