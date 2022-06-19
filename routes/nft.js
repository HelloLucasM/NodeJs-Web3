const express = require("express");
const _db = require('../config/db');  

let router = express.Router(); 

router
  .route("/allNfts")
  .get((req, res) =>{
    res.send("Hi, loading all nft available to buy");   
  });  

router
  .route("/mint/:nftModel")
  .post((req, res) =>{
    res.send("Hi, are you sure to mint this nft?"); 
  }); 

module.exports = router;