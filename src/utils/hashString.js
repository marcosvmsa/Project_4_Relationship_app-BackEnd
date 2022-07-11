const bcrypt = require('bcrypt');

const saltRounds = 10;

async function hashString(password) {
	try {
		return await bcrypt.hash(password, saltRounds);
	} catch (error) {
		return error;
	}
}
async function compare(props) {
	try {
		const isPasswordValid = await bcrypt.compare(password, props);
		if (isPasswordValid) {
			return true;
		}
		return false;
	} catch (error) {
		return error;
	}
}

module.exports = {
	hashString,
	compare,
};
