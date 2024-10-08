# NFT Collection Deployment and Management with Smart Contract and Polygon Bridge

This project showcases the deployment and management of an NFT collection using the Smart contract, along with the utilization of the Polygon Bridge for seamless transfer of NFTs between Ethereum and Polygon networks. The contract is implemented in Solidity and follows the ERC721A standard. It includes additional functionalities for batch minting and batch transferring of NFTs. The project aims to generate a collection of NFTs, store them on IPFS, deploy the NFT contract on the Ethereum network, map the collection using the Polygon network token mapper, and perform batch minting and batch transferring of NFTs.

# Getting Started

# Prerequisites

To set up and execute the project, ensure that you have the following:

DALLE 2 or Midjourney for image generation.
An IPFS account and access to pinata.cloud or a similar service for storing the NFT images.
Access to the Ethereum network for contract deployment.
Hardhat framework installed for scripting and testing.

# Steps for Bridging:

1. Run npm i to install dependencies.
2. Put my private key in the .env.examples file and rename to .env when finished.
3. Run  npx hardhat run scripts/DEPLOY.js --network Sepolia to deploy ERC721A contract.
4. Paste the newly deployed contract address in the tokenAddress variable for the other scripts.
5. Make sure to fill in your public key
6. Run npx hardhat run scripts/batchMint.js --network Sepolia to mint tokens to your wallet.
7. Run npx hardhat run scripts/TransferNFT.js --network Sepolia to approve and deposit your NFT to polygon.
8. Run npx hardhat run scripts/viewPrompt.js --network Sepolia to see the prompt that used to generate the NFT.
9. Wait 20-30ish minutes for NFT to show on polygon account.
10. Use polyscan.com to check your account for the NFT. Once they arrive, you can click on the transaction to get the contract address for polygon.
11.Use this polygon contract address for your getBalance script's tokenAddress.
12.Run npx hardhat run scripts/getBalance.js --network amoy to see the new polygon balance.

# Pinatacloud IPFS Link

# Metadata Link: 
https://gateway.pinata.cloud/ipfs/QmRcX1vaGK9mBE2smwn9Mva5T3fXQhz29PfhZhEiZny8gU/

# Authors
Sukhwinder Singh

# License
This project is licensed under the MIT License. See the LICENSE file for details.

