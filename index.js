const express = require("express");
const app = express();
const zod = require('zod');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const cors = require('cors');
const { User } = require("./db");

const PORT = 3001;
const jwtSecret = 'ushhh';
// add cors 

app.use(express.json())

const UserSchema = zod.object({
	name: zod.string(),
	email: zod.string().email(),
	password: zod.string()
})

app.post('/signup', async (req, res) => {
	const userBody = req.body;
	const validateBody = UserSchema.safeParse(userBody);
	if (!validateBody.success) {
		return res.status(500).json({
			message: "Invalid Inputs"
		})
	}

	try {
		const userExists = await User.findOne({
			$or: [{ name: req.body.name }, { email: req.body.email }]
		})
		if (userExists) {
			return res.json({
				message: "User Exists"
			})
		}
		else {
			const hashedPassword = await bcrypt.hash(req.body.password, 10);

			await User.create({
				name: req.body.name,
				email: req.body.email,
				password: hashedPassword
			})

			const token = jwt.sign(req.body.email, jwtSecret);
			return res.status(201).json({
				message: "User created successfully",
				token
			})
		}
	}
	catch (err) {
		console.error(err)
		return res.json({ message: "error while signup" })
	}
})

const signinSchema = zod.object({
	email: zod.string().email(),
	password: zod.string()
})

app.post('/signin', async (req, res) => {
	const userBody = signinSchema.safeParse(req.body)
	if (!userBody.success) {
		return res.status(500).json({
			msg: "Invalid inputs"
		})
	}
	try {
		const response = await User.findOne({
			email: req.body.email
		})
		if (!response) {
			return res.status(404).json({
				msg: "User not found"
			})
		}
		const isMatch = await bcrypt.compare(req.body.password, response.password)
		if(!isMatch){
			return res.json({
				msg: "Invalid user"
			})
		}
		const token = jwt.sign(req.body.email, jwtSecret);
		return res.status(201).json({
			message: "User signed in",
			token
		})
	}
	catch (err) {
	console.error(err)
	return res.json({ message: "error while signup" })
}
})

app.get('/budget', (req, res) => {
	
})

app.post('/budget', (req, res) => {

})

app.get('/expenses', (req, res) => {

})

app.post('/expenses', (req, res) => {

})

app.delete('/expense/:id', (req, res) => {

})

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
})

