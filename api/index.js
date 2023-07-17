const express = require('express');
const app = express();
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const User = require('./models/user');

app.use(cors());
app.use(express.json());
mongoose.connect('mongodb+srv://mondalpramit76:fSRqd2gpy9XqiDH9@cluster0.ltdkfvr.mongodb.net/?retryWrites=true&w=majority')
app.post('/register', async (req, res) => {
	const { username, password } = req.body;
	try {
		const userDoc = await User.create({ username, password });
		res.json(userDoc);
	} catch (e) {
		console.log(e);
		res.status(400).json(e);
	}


});

app.listen(4000);


