console.log("basic express server!!!");

const express = require('express');

const app = express();

app.use(express.static('./basicServerExpress/publicServe'));

const server = app.listen(5000, ()=>console.log("express server live at PORT 5000"));

