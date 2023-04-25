const express = require('express');
const app = express();
const db =require('./config/connection');
const userRoute = require('./routes/userRoutes');
app.use(express.json());
app.use('/api/users', userRoute);
const port = 3001;
require('dotenv').config();
app.listen(port, () => console.log(`example app listening on port ${port}!`));

