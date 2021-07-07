const express = require('express');
const app = express();

const config = require('./config/default.json');


app.listen(() => {
    console.log(`server work on ${config.PORT}`)
})