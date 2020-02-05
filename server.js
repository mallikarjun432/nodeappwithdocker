const express = require('express');
const app = express();

const PORT = 4000;

app.get('/', function(req, res) {
    res.send("hello world");
});

app.listen(PORT, function(){
    console.log('Your node js server is running on PORT:',PORT);
});
