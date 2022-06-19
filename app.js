require('dotenv').config(); 
const express = require('express');
const app = express(); 
const nft = require("./routes/nft");

app.use("/nft", nft);

app.get("/", (req, res) =>{
console.log("My bored endpoint")
}); 

app.listen(process.env.PORT || 4000, (err) =>{
    if(!err){
        console.log(`Server is running ok`)
    }else{
        console.log(`Error ocurred, server can't start ${err}`)
    }
});

  