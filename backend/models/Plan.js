const mongoose = require('mongoose');
const { Schema } = mongoose;

const planSchema = new Schema({
	name: String,
	suscription: {
		type: String,
		enum: [ 'Monthly', 'Yearly' ]
	},
	duration: Number
});
