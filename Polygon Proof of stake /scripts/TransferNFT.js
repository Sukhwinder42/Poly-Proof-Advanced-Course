const hre = require("hardhat");
const fxRootContractABI = require("../fxRootContractABI.json");
const tokenContractJSON = require("../artifacts/contracts/Smart.sol/Smart.json");

const tokenAddress = "0x65b922Eeb62b1A8Fb89C072e4c859E3FE28f06E4";
const tokenABI = tokenContractJSON.abi;
const FxERC721RootTunnel = "0x9E688939Cb5d484e401933D850207D6750852053";
const walletAddress = "0x83449CDCEAF704691993a3E3A33fd9aeEFc11AA7";

async function main() {

  const tokenContract = await hre.ethers.getContractAt(tokenABI, tokenAddress);
  const fxContract = await hre.ethers.getContractAt(fxRootContractABI, FxERC721RootTunnel);

  const tokenIds = [0,1,2,3,4];

  const approveTx = await tokenContract.setApprovalForAll(FxERC721RootTunnel, true);
  await approveTx.wait();
  console.log('Approval confirmed');

  for (let i = 0; i < tokenIds.length; i++) {
    const depositTx = await fxContract.deposit(tokenAddress, walletAddress, tokenIds[i], "0x6556");
    await depositTx.wait();
    console.log(`Token with ID ${tokenIds[i]} deposited`);
}

// Test balanceOf
const balance = await tokenContract.balanceOf(walletAddress);
console.log(`You now have: ${balance} NFTs in your wallet`);

}

  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
