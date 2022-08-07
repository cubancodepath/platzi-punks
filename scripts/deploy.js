const { ethers } = require('hardhat')

const deploy=async ()=>{
    const [deployer] = await ethers.getSigners(); //get info about our private key
    console.log("Deploying contracts with the account:",deployer.address); //print info about deployer address
    console.log("Account balance:",(await deployer.getBalance()).toString()); //get account balance and print
   
    const Token=await ethers.getContractFactory("PlatziPunks"); // get the contract
    const token=await Token.deploy(1000, 'https//avatasars.io'); //deploy the contract
    
    console.log("Token address:",token.address); //print the contract address
}

deploy()
  .then(() => process.exit(0)) // show process success
  .catch((error) => { //if not show the error and launch error process
    console.log(error);
    process.exit(1);
  });