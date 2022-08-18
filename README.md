# PlatziPunks

This project is a smarts contract groups to create a Not Fungible Tokens (NFT) collection. Using the [Avataars.io](https://avataars.io) API.

## Table of contents
  - [Demo](#demo)
  - [Features](#features)
  - [Deployment](#deployment)
    - [Run in local](#run-in-local)
  - [Test](#test)
  - [Built with](#built-with)
  - [Useful resource](#useful-resource)
  - [License](#license)
  - [Author](#author)

## Demo

You can check this contract deployment in the [Ropsten testnet](https://ropsten.etherscan.io/address/0x6b4fe01BB3bd3974dc0133053601065c97df1B92), or use [this interface](https://blue-rain-4468.on.fleek.co/) to interact with the contract on Rinkeby testnet.
## Features

- This collection store the NFT metadata in th blockchain to get a high level of decentralization
- Tokens limit: 1000
## Deployment
To run your own contract version: 
1. Copy and rename `.env.example` to .env
2. Put your private key and the infura API address
    ```.env
    DEPLOY_SIGNER_PRIVATE_KEY=
    INFURA_PROJECT_ID=
    ```
3. Run 
    ```sh
    $ npm hardhat scripts/deploy.js --network <network>
    ```
### Run in local
1. Clone this repo and install node modules
   ```sh
   $ git clone https://github.com/bjvalmaseda92/platzi-punks.git
   $ cd platzi-punks
   $ npm install
   ```
2. Run your node and use the `scripts/deploy.js` to deploy in your local node
    ```sh
    $ npm hardhat node
    $ npm hardhat run scripts/deploy.js
    ```
## Test
To execute test jus run:
```sh
$ npm hardhat test
```
## Built with
- [Hardhat](https://hardhat.org/)
- [Open Zeppelin Contracts](https://github.com/OpenZeppelin/openzeppelin-contracts)

## Useful resource
- [Hardhat Documentations](https://hardhat.org/hardhat-runner/plugins/nomiclabs-hardhat-web3)
- [Open Zeppelin](https://docs.openzeppelin.com/contracts/4.x/)
- [EIP-721](https://eips.ethereum.org/EIPS/eip-721)
- [Platzi Punks Interface](https://github.com/bjvalmaseda92/platzi-punks-interface)

## License
>All contracts is under MIT license.

## Author

Made with 💙 by [@bjvalmaseda](https://twitter.com/bjvalmaseda)