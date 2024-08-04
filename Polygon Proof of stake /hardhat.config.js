/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-ethers");
module.exports = {
  solidity: "0.8.18",
};
require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    amoy: {
      url: "https://rpc-amoy.polygon.technology",
      accounts: ["4f61b2f401414b7177d635aefb8797e08f0305477c5762b10e9941071b9bd5ea"],
    },
    fuji: {
      url: "https://api.avax-test.network/ext/bc/C/rpc",
      accounts: ["4f61b2f401414b7177d635aefb8797e08f0305477c5762b10e9941071b9bd5ea"], // we use a .env file to hide our wallets private key
    },
    Sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/CWVzzYQKQb6nSdgnGFFPX0LOuMJyQUpe",
      accounts: ["4f61b2f401414b7177d635aefb8797e08f0305477c5762b10e9941071b9bd5ea"], // we use a .env file to hide our wallets private key
    },
  },
  etherscan: {
    apiKey: "1VFEHCTRMN6QMXY8XDDZ8UW627SJ8HENPR" 
  },
};
