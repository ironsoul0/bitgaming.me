import hre, { ethers } from "hardhat";

const BASE_URI = "https://ironsoul0.github.io/brain/";

async function main() {
  const NFT_ADDRESS = "0xB94DDe6743f073de10943665302b3493e464aa02";
  const TOKEN_ADDRESS = "0x2C04c3Faf3040eA42A6887eC230Cf0a397eb28a2";

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
