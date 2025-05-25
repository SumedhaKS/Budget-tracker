const express = require("express");
const app = express();
const bcrypt = require('bcrypt')
const cors = require('cors');
const { User, Budget, Expense } = require("./db");
const { zod } = require("./config")
const { jwt, jwtSecret } = require("./config")
const PORT = 3001;
const { userMiddleware } = require("./middleware/index")

// add cors 
app.use(cors())
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

app.get('/budget', userMiddleware , async (req, res) => {
	const { month } = req.query;

	try{
		const user = await User.findOne({email: req.userEmail});
		const budget = await Budget.findOne({userID: user._id, month})

		if(!budget){
			return res.status(404).json({
				msg: "No budget found"
			})
		}
		return res.json({budget});
	}
	catch(err){
		console.log(err)
		return res.status(500).json({msg: "Server error"})
	}

})

app.post('/budget', userMiddleware, async (req, res) => {
	const {amount, month} = req.body;
	if(!amount || !month){
		return res.status(400).json({
			msg: "Missing budget or amount"
		})
	}
	try{
		const user = await User.findOne({email: req.userEmail});
		const existing = await Budget.findOne({userID: user._id, month})
		if(existing){
			existing.amount = amount;
			await existing.save();
			return res.json({msg: "Budget updated"})
		}
		await Budget.create({
			amount, 
			month,
			userID: user._id
		})
		return res.status(201).json({
			msg: "Budget set"
		})
	}
	catch(err){
		console.log(err)
		return res.status(500).json({msg: "Server error"})
	}
})

app.get('/expenses', userMiddleware, async  (req, res) => {
	const { month } = req.query;
	try{
		const user = await User.findOne({email: req.userEmail}) 
		const filter = {userID: user._id};
		if(month){
			filter.month = month;
		}
		const expenses = await Expense.find(filter);
		return res.json(expenses)
	}
	catch(err){
		console.log(err);
		return res.status(500).json({msg : "Server error"})
	}

})

app.post('/expenses', userMiddleware, async (req, res) => {
	const {title, amount, category, date, month } = req.body;
	if(!title || !amount || !month){
		return res.status(400).json({
			msg: "Missing fields"
		})
	}
	try{
		const user = await User.findOne({email: req.userEmail})

		const expense = await Expense.create({
			title,
			amount,
			category,
			date: date? new Date(date) : new Date(),
			month,
			userID: user._id
		})

		return res.status(201).json({msg: "Expense added: "+ expense})
	}
	catch(err){
		console.log(err)
		return res.status(500).json({msg: "Server error"})
	}
})

app.delete('/expense/:id', async (req, res) => {
	const expenseID = req.params.id;

	try{
		const user = await User.findOne({email: req.userEmail});
		const expense = await Expense.findOne({_id: expenseID, userID: user._id})

		if(!expense){
			return res.status(404).json({msg: "Expense not found"})
		}
		await Expense.deleteOne({_id: expenseID});
		return res.json({msg: "Expense deleted"})
	}
	catch(err){
		console.log(err)
		return res.status(500).json({msg: "Server Error"})
	}
})

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
})
