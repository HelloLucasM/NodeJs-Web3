const express = require('express');
const app = express(); 
require('dotenv').config(); 

const port = process.env.PORT;  
 
app.listen(port, (error) =>{
    if(!error){
        console.log(`Server is running ok, listening ${port} port`)
    }else{
        console.log(`Error ocurred, server can't start ${error}`)
    }
});

  