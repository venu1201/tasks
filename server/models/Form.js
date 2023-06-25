const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
	firstname: {
		type: String,
		required: true
	},
	secondname: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	bestskill: {
		type: String,
		required: true
	},
	message: {
		type: String,
		required: true
	},
});

const Todo = mongoose.model("Form", TodoSchema);

module.exports = Todo;