const express = require('express');
const app = express();

app.get("/", function (req, res) {
    res.send("It's Working!!!");
});

app.listen(process.env.PORT || 5000);