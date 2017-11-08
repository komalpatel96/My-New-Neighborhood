const User = require('../db/models/user')
const LocalStrategy = require('passport-local').Strategy

const strategy = new LocalStrategy(
	{
		emailField: 'email' // not necessary, DEFAULT
	},
	function(email, password, done) {
		User.findOne({ 'local.email': email }, (err, emailMatch) => {
			if (err) {
				return done(err)
			}
			if (!emailMatch) {
				return done(null, false, { message: 'Incorrect email' })
			}
			if (!emailMatch.checkPassword(password)) {
				return done(null, false, { message: 'Incorrect password' })
			}
			return done(null, emailMatch)
		})
	}
)

module.exports = strategy