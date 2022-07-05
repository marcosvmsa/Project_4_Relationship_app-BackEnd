const express = require('express');
const cors = require('cors');
require('dotenv').config()
require('./database/connection').initializeDatabase();

const PORT = process.env.PORT || 4000;
const app  = express();

app.use(express.json());
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended: true}));
app.use(cors())

app.get('/', (req,res)=>{
    res.send('<h1>marcos</h1>')
})

app.listen(PORT, ()=>{
    console.log(`Runing on Port :  ${PORT}`)
})

