const hashString = require('../../utils/hashString');
const User = require('../../database/models/user_model');

async function create(body) {
	const { password } = body;

	try {
		const hashPasswordValid = await hashString(password);
		const user = {
			...body,
			password: hashPasswordValid,
		};

		const [data, created] = await User.findOrCreate({
			where: { email: body.email },
			defaults: {
				user,
			},
		});

		if (created) return { data, created };
		return false;
	} catch (error) {
		console.log(`Erro create User ${error}`);
		return false;
	}
}

module.exports = {
	create,
};
