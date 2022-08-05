require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()

const {DEPLOY_SIGNER_PRIVATE_KEY, INFURA_PROJECT_ID}= process.env

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks:{   
    ropsten:{
      url: `https://ropsten.infura.io/v3/${INFURA_PROJECT_ID}`,
      accounts: [
        DEPLOY_SIGNER_PRIVATE_KEY
      ]
    }
  }
};
