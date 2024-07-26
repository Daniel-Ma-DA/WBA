const express = require('express');
const app = express();
const path = require('path');

const port = 300;

app.use(express.static(path.join(__dirname,)))

app.get('/', (req, res)=>{
    res.sendFile(__dirname,'A9.2index')
});
