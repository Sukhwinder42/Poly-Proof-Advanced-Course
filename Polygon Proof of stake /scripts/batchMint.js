const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  // Get private key from environment variables
  const privateKey = "4f61b2f401414b7177d635aefb8797e08f0305477c5762b10e9941071b9bd5ea";

  // The URL of the Sepolia test network 
  const networkAddress = "https://sepolia.infura.io/v3/dc827978ead8420a91edda4943f30b25";

  // connect to the Ethereum network
  const provider = new ethers.providers.JsonRpcProvider(networkAddress);

  // Create a signer (account) 
  const signer = new ethers.Wallet(privateKey, provider);

  // The address of the deployed contract 
  const contractAddress = "0x65b922Eeb62b1A8Fb89C072e4c859E3FE28f06E4";

  const OneNFT = await ethers.getContractFactory("Smart", signer);
  const contract = await OneNFT.attach(contractAddress);

  await contract.mint(5);

  console.log("Successfully minted '5' NFT.");
  
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  }); 
