require('dotenv').config(); 
const env = process.env;
const express = require("express");
const _db = require('../config/db.config');  
const {myProvider, wallet, ethers} = require('../config/ethers.config.js');
let router = express.Router(); 

router
  .route("/allNfts")
  .get(async (req, res) =>{
    res.send("Hi, doing some shit with eth network :)");
    
    const accountOneBefore = await myProvider.getBalance(env.ADR_LOCAL); 
    const accountTwoBefore = await myProvider.getBalance(env.ADR_KING);

    console.log(`Account 1 has a total of ${accountOneBefore}`);
    console.log(`Account 2 has a total of ${ethers.utils.formatEther(accountTwoBefore)}`);
    
    const tx = await wallet.sendTransaction({
        to:env.ADR_KING,
        value: ethers.utils.parseEther("0.025")
    })

    await tx.wait() 
    console.log(tx)

    const accountOneAfter = await myProvider.getBalance(env.ADR_LOCAL); 
    const accountTwoAfter = await myProvider.getBalance(env.ADR_KING);

    console.log(`Account 1 has a total of ${ethers.utils.formatEther(accountOneAfter)}`);
    console.log(`Account 2 has a total of ${ethers.utils.formatEther(accountTwoAfter)}`);

  });  

router
  .route("/mint/:nftModel")
  .post((req, res) =>{
    res.send("Hi, are you sure to mint this nft?"); 
  }); 

module.exports = router;