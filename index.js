const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('hello from express');
});

const sequelize = require('./src/config/db');

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});