const express = require('express');
const cors = require('cors');
const methodOverride = require('method-override')
const { Sequelize } = require('sequelize');
const PORT = process.env.PORT || 4000;
const dotenv = require('dotenv')
const path = require('path')
dotenv.config()

// const app  = express();

// app.use(express.json());
// app.use(methodOverride('_method'))
// app.use(express.urlencoded({extended: true}));
// app.use(cors())

// app.get('/', (req,res)=>{
//     res.send('<h1>marcos</h1>')
// })

// app.listen(PORT, ()=>{
//     console.log(`Runing on Port :  ${PORT}`)
// })


// Option 1: Passing a connection URI
console.log(process.env.DEV_DATABASE_URL)
console.log('AUI')
const sequelize = new Sequelize( 
  {
    dialect: 'postgres',
    username: 'marcos',
    password: 's3nh@',
    port: 5432,
    database: 'dev'
  })

async function connection(){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
    
}

connection()

