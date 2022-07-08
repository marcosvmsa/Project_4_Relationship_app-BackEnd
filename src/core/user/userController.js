const Repository = require('./userRepository');

async function createUser(req, res) {
	try {
		const result = await Repository.createdUser(req.body);
		return res.status(201).send(result);
	} catch (error) {
		return res.status(400).send(error);
	}
}

module.exports = {
	createUser,
};
