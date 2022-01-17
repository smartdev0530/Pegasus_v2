// const PhotoNFT = artifacts.require("./PhotoNFT.sol");

// module.exports = async function(deployer, network, accounts) {
//     await deployer.deploy(PhotoNFT);
// };

const { deployProxy } = require('@openzeppelin/truffle-upgrades');
const truffleConfig = require('../truffle-config');

const Pegasus = artifacts.require('Pegasus');

module.exports = async function (deployer, network) {
  let instance;
  if (network == "testnet") {
    instance = await deployProxy(Pegasus, ["0xD99D1c33F9fC3444f8101754aBC46c52416550D1"], { deployer }); //router for testnet
  } else if (network == "bsc") {
    instance = await deployProxy(Pegasus, ["0x10ED43C718714eb63d5aA57B78B54704E256024E"], { deployer }); //router for mainnet
  }  
  else if (network == "ropsten") {
    instance = await deployProxy(Pegasus, ["0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"], { deployer }); //router for ropsten
  }
  else {
    console.log("network", network)
    instance = await deployProxy(Pegasus, ["0xD99D1c33F9fC3444f8101754aBC46c52416550D1"], { deployer }); //router for testnet
  }
  console.log('Deployed', instance.address);
};

