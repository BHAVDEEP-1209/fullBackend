require("dotenv").config();
const express = require('express')
const connectDb = require('./config')
const cors = require("cors");

// middlewares
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended : true}))
app.use(cors());


// routes
app.use(require("./routes"))

const PORT = process.env.PORT ||  5500;

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))