const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DATABASE_URL);

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
})

const BudgetSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true,
    },
    month: {
        type: String,
        required: true,
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

const ExpenseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        enum: ['Food', 'Transport', 'Bills', 'Entertainment', 'Others'],
        default: 'Other',
    },
    date: {
        type: Date,
        default: Date.now,
    },
    month: {
        type: String,
        required: true,
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
})

const User = mongoose.model('User', UserSchema)
const Budget = mongoose.model('Budget', BudgetSchema)
const Expense = mongoose.model('Expense', ExpenseSchema)

module.exports = {
    Budget,
    Expense,
    User
}
