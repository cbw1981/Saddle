const express = require('express');
const app = express();
const dbconfig =require('./config/connection');
const port = 3001;
require('dotenv').config();

app.listen(port, () => console.log(`example app listening on port ${port}!`));

