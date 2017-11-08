const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs')
mongoose.promise = Promise

// Define userSchema
const userSchema = new Schema({
	local: {
		username: { type: String, unique: true, required: true },
		password: { type: String, unique: false, required: true }
	},
	google: {
		googleId: { type: String, required: false }
	},
	email: { type: String, unique: false },
	name: { type: String, unique: false },
	age: { type: Number, unique: false },
	searches: []
})

// Define schema methods
userSchema.methods = {
	checkPassword: function(inputPassword) {
		return bcrypt.compareSync(inputPassword, this.local.password)
	},
	hashPassword: plainTextPassword => {
		return bcrypt.hashSync(plainTextPassword, 10)
	}
}

// Define hooks for pre-saving
userSchema.pre('save', function(next) {
	if (!this.local.password) {
		console.log('=======NO PASSWORD PROVIDED=======')
		next()
	} else {
		this.local.password = this.hashPassword(this.local.password)
		next()
	}
	// this.password = this.hashPassword(this.password)
	// next()
})

// Create reference to User & export
const User = mongoose.model('User', userSchema)
module.exports = User