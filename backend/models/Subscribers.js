const mongoose = require('mongoose');
const { Schema } = mongoose;

const subscriberSchema = new Schema({
	suscriber: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	plan: {
		type: Schema.Types.ObjectId,
		ref: 'Plan'
	}
});

module.exports = mongoose.model('Subscribers', subscriberSchema);
