const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const { connectToDatabase } = require('./config/db');
const router = require('./routes/router');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", router);


app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running on port 3000');
    // connect to the database here
    connectToDatabase();
});