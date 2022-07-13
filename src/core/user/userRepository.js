const { User } = require('../../database/models/user_model');
const { hashString, compare } = require('../../utils/hashString');
const { sendEmail } = require('../../utils/send_email');

async function login(bodyEmail) {
	const { email } = bodyEmail;
	try {
		const findByEmail = await User.findOne({ where: { email } });
		if (findByEmail) {
			const comparePassword = await compare(findByEmail.password);
			if (comparePassword) {
				return true;
			}
			return 'Password incorrect';
		}
		return 'User not founded';
	} catch (error) {
		// console.log(`Erro select User ${error}`);
		return error;
	}
}

async function select(body) {
	const { email } = body;
	// console.log(email);
	// const { searchBy, item } = body;
	// try {
	const project = await User.findOne({ where: { email } });
	if (project) {
		// console.log(project);
	} else {
		console.log('not works');
	}
	// 	// console.log(project instanceof User); // true
	// 	// console.log(project.title); // 'My Title'
	// 	return 'User does not exist';
	// } catch (error) {
	// 	console.log(`Erro select User ${error}`);
	// 	return error;
	// }
}

async function create(body) {
	const { password } = body;
	try {
		const hashPasswordValid = await hashString(password);
		const user = {
			...body,
			password: hashPasswordValid,
		};
		// console.log(user);
		const [data, created] = await User.findOrCreate({
			where: { email: body.email },
			defaults: {
				...user,
			},
		});

		if (created) return { data, created };

		return false;
	} catch (error) {
		// eslint-disable-next-line no-console
		console.log(`Erro create User ${error}`);
		return error;
	}
}

async function update(param, body) {
	const { password } = body;
	let hashPasswordValid = body.password;
	const { id } = param;
	try {
		const findById = await User.findOne({ where: { id } });
		if (findById) {
			hashPasswordValid = await hashString(password);
		}

		console.log('como esta password', hashPasswordValid);

		const user = {
			...body,
			password: hashPasswordValid,
		};

		console.log(user);
		console.log('esse e : ', id);

		const result = await User.update(
			user,
			{ where: { id } },
		);
		return result;
		// const handleResult(result);
	} catch (error) {
		// eslint-disable-next-line no-console
		console.log(`Erro create User ${error}`);
		return error;
	}
}

async function reset(parmEmail) {
	const { email } = parmEmail;
	try {
		await sendEmail(email);
		return true;
	} catch (error) {
		console.log(`Erro select User ${error}`);
		return error;
	}
}

async function destroyUser(parmId) {
	try {
		await User.destroy({ where: { id: parmId } });
		return true;
	} catch (error) {
		console.log(`Erro select User ${error}`);
		return error;
	}
}

module.exports = {
	login,
	select,
	create,
	reset,
	update,
	destroyUser,
};
