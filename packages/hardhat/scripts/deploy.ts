import hre, { ethers } from "hardhat";

const BASE_URI = "https://ironsoul0.github.io/brain/";

const rewardAccounts = [
  "0x1e2Ce012b27d0c0d3e717e943EF6e62717CEc4ea",
  "0x8593561a4742D799535390BC5C7B992867e50A09",
  "0x51551EBfE65CCcE40DC5C4664E4b2b475B018dBB",
  "0x0482Bb438b284a20E2384A07E3ccc83A968c4fC4",
  "0xF189Cc449626135aC793636D3bC39301a29607ec",
  "0xb5d85cbf7cb3ee0d56b3bb207d5fc4b82f43f511",
  "0xdac17f958d2ee523a2206206994597c13d831ec7",
  "0x57ab4ee8a6283b6e6ae8ce8fc1fa48df5051691c",
  "0xd945f759d422ae30a6166838317b937de08380e3",
  "0xa152f8bb749c55e9943a3a0a3111d18ee2b3f94e",
];

async function main() {
  const { network } = hre;

  if (network.name === "localhost") {
    const MulticallContract = await ethers.getContractFactory("Multicall");
    const multicallContract = await MulticallContract.deploy();
    await multicallContract.deployed();
    console.log("Multicall deployed to:", multicallContract.address);
  }

  const BITToken = await ethers.getContractFactory("BITToken");
  const tokenContract = await BITToken.deploy(ethers.utils.parseEther("1"));
  await tokenContract.deployed();
  console.log("BITToken contract deployed to:", tokenContract.address);

  const rewardTokens = rewardAccounts.map(() =>
    ethers.utils.parseEther(Math.floor(Math.random() * 30 + 1).toString())
  );
  for (let i = 0; i < rewardTokens.length; i++) {
    console.log(ethers.utils.formatEther(rewardTokens[i]));
  }
  console.log(rewardAccounts, rewardTokens);
  await tokenContract.rewardTokens(rewardAccounts, rewardTokens);

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
