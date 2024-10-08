const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/Smart.sol/Smart.json");

const tokenAddress = "0x2a9bD091A3487B60ee8048D445e67e83069f4742"; // Ethereum address of the deployed ERC721A contract
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x83449CDCEAF704691993a3E3A33fd9aeEFc11AA7"; // Ethereum public address for the wallet

async function main() {
    if (!tokenAddress) {
        throw new Error("Token address not provided");
    }

    // Get the token contract instance
    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);

    // Test balanceOf function
    const balance = await token.balanceOf(walletAddress);
    console.log(`You now have a total number of: ${balance} NFT(s) in the wallet.`);
}

main().catch((error) => {
    console.error("Error in testing balanceOf function:", error);
    process.exitCode = 1;
});

