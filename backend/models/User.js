const mongoose = require('mongoose');
const { Schema } = mongoose;
const PLM = mongoose;

const userSchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	}
});

userSchema.plugin(PLM, { usernameField: 'email' });

module.exports = mongoose.model('User', userSchema);
