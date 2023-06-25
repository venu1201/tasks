const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/mern_todo', {
	useNewUrlParser: true, 
	useUnifiedTopology: true 
}).then(() => console.log("Connected to MongoDB")).catch(console.error);
const Form = require('./models/Form');

app.get('/forms', async (req, res) => {
	const F = await Form.find();

	res.json(F);
});

app.post('/form/new', (req, res) => {
	// console.log(req.body)
	const d = new Form({
		firstname: req.body.firstname,
		secondname:req.body.secondname,
		email:req.body.email,
		bestskill:req.body.bestskill,
		message:req.body.message,
	})

	d.save();
	res.json(d);
});



app.listen(5000);