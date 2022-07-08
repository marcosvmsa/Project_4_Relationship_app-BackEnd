const bcrypt = require('bcrypt');

const PRIVATE_KEY = 'some-radom-key';
async function hashString(password) {
	try {
		return await bcrypt.hash(password, PRIVATE_KEY);
	} catch (error) {
		return error;
	}
}

module.exports = {
	hashString,
};
