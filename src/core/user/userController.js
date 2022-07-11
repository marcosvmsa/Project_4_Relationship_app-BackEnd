const Repository = require('./userRepository');

async function loginUser(req, res) {
	try {
		const result = await Repository.login(req.body);
		return res.status(201).send(result);
	} catch (error) {
		return res.status(400).send(error);
	}
}

async function selecUser(req, res) {
	try {
		const result = await Repository.select(req.body);
		return res.status(201).send(result);
	} catch (error) {
		return res.status(400).send(error);
	}
}

async function createUser(req, res) {
	try {
		const result = await Repository.create(req.body);
		return res.status(201).send(result);
	} catch (error) {
		return res.status(400).send(error);
	}
}
async function updateUser(req, res) {
	try {
		const result = await Repository.update(req.params, req.body);
		return res.status(201).send(result);
	} catch (error) {
		return res.status(400).send(error);
	}
}

async function deleteUser(req, res) {
	try {
		const result = await Repository.destroyUser(req.params);
		return res.status(201).send(result);
	} catch (error) {
		return res.status(400).send(error);
	}
}

module.exports = {
	loginUser,
	selecUser,
	createUser,
	updateUser,
	deleteUser,
};
