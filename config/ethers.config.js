require('dotenv').config(); 
const env = process.env; 
const ethers = require('ethers'); 

const myProvider = new ethers.providers.JsonRpcProvider(`https://rinkeby.infura.io/v3/${env.INFURA_ID}`);
const wallet = new ethers.Wallet(env.PRV_KEY_LOCAL, myProvider);

module.exports = {
    myProvider,
    wallet,
    ethers
};

