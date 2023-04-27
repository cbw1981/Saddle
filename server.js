const express = require('express');
const app = express();

const db =require('./config/connection');
const userRoute = require('./routes/userRoutes');


app.use(express.json());
app.use('/api/users', userRoute);

const PORT = process.env.PORT || 3001;
require('dotenv').config();




app.listen(PORT, () => console.log(`example app listening on port ${PORT}!`));

