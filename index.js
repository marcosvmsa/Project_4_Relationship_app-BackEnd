require('dotenv').config()
require('./src/database/connection').initializeDatabase();
require('./src/app')