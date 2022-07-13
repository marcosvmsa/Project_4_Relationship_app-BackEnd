const express = require('express');
const cors = require('cors');

const userController = require('./core/user');

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/user', userController);

function appServing() {
	// eslint-disable-next-line no-console
	console.log('Server running on port: ', PORT);
}

app.listen(PORT, appServing);
