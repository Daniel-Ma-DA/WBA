const express = require('express');
let app = express();
app.liste(3000,function (){
    console.log('Listening on port 3000');
})