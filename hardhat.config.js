require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to


// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 * 
 * This is now my wave portal address 0xC90ed9315985327234AD3d7f18728d31C1ca086B
 */

 module.exports = {
  solidity: '0.8.4',
  networks: {
    rinkeby: {
      url: process.env.STAGING_ALCHEMY_KEY,
      accounts: [process.env.PRIVATE_KEY],
    },
    mainnet: {
      chainId: 1,
      url: process.env.PROD_ALCHEMY_KEY,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
