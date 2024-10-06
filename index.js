const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send("hello");
});

app.listen(3000 , '0.0.0.0' ,() => {
    console.log("Sever is running on port 3000");
});
