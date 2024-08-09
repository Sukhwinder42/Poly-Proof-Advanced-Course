// Import required libraries
const { ethers } = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/Smart.sol/Smart.json");

async function main() {
  const contractAddress = "0x65b922Eeb62b1A8Fb89C072e4c859E3FE28f06E4";
  const networkName = "https://sepolia.infura.io/v3/dc827978ead8420a91edda4943f30b25";

  // Create a provider using the network name
  const provider = new ethers.providers.JsonRpcProvider(networkName);

  // Get an instance of the contract using the contract address and ABI
  const contractABI = tokenContractJSON.abi;
  const contract = new ethers.Contract(contractAddress, contractABI, provider);

  // Get the prompt description from the contract
  const promptDescription = await contract.promptDescription();

  // Log the prompt to the console
  console.log(`Prompt for generating Smart NFT images is:\n${promptDescription}`);
}

// Call the main function and handle errors
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});
