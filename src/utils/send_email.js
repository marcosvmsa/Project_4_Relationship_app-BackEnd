require('dotenv').config();

const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
async function sendEmail(email, code) {
	try {
		const msg = {
			to: email,
			from: process.env.SENDGRID_EMAIL,
			subject: 'Sending with SendGrid is Fun',
			text: 'and easy to do anywhere, even with Node.js',
			html: `This is you code ${code}`,
		};
		sgMail
			.send(msg);
	} catch (error) {
		console.log(error);
	}
}

module.exports = { sendEmail };
