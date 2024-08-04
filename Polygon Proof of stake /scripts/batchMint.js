// This script batch mints ERC721A tokens.
const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  // Get private key from environment variables
  const privateKey = "4f61b2f401414b7177d635aefb8797e08f0305477c5762b10e9941071b9bd5ea";

  // The URL of the Goerli test network 
  const networkAddress ="https://eth-sepolia.g.alchemy.com/v2/CWVzzYQKQb6nSdgnGFFPX0LOuMJyQUpe";

  // connect to the Ethereum network
  const provider = new ethers.providers.JsonRpcProvider(networkAddress);

  // Create a signer (account) 
  const signer = new ethers.Wallet(privateKey, provider);

  // The address of the deployed contract 
  const contractAddress = "0x9851e304EdC35Aeb8a2D5179B9D4522B879bFaF9";

  // Get the contract factory for the Ignis contract and attach it to the signer
  const OneNFT = await ethers.getContractFactory("Smart", signer);
  const contract = await OneNFT.attach(contractAddress);

  // Call the mint function to mint 5 tokens
  await contract.mint(5);

  console.log("Successfully minted '5' NFT.");
  
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  }); 
