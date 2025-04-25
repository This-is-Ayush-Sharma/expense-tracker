const Expense = require('../model/expense');

exports.addExpense = async (req, res) => {
    try{
        const { amount, category, date, description } = req.body;
        if (!amount || !category || !description) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        const newExpense = new Expense({
            amount,
            category,
            date,
            description
        });
        await newExpense.save();
        res.status(201).json({ message: 'Expense added successfully', expense: newExpense });
    }
    catch(err){
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }   
}

exports.getAllExpense = async (req, res) => {
    try{
        const expenses = await Expense.find();
        if (!expenses) {
            return res.status(404).json({ message: 'No expenses found' });
        }
        res.status(200).json({ message: 'Expenses retrieved successfully', expenses });
    }
    catch(err){
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }   
}

exports.editExpense = async (req, res) => {
    try{
        const { id } = req.params;
        const { amount, category, date, description } = req.body;
        if (!amount || !category || !description) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        const updatedExpense = await Expense.findByIdAndUpdate(id, {
            amount,
            category,
            date,
            description
        }, { new: true });
        if (!updatedExpense) {
            return res.status(404).json({ message: 'Expense not found' });
        }
        res.status(200).json({ message: 'Expense updated successfully', expense: updatedExpense });
    }
    catch(err){
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }   
}

exports.deleteExpense = async (req, res) => {
    try{
        const { id } = req.params;
        const deletedExpense = await Expense.findByIdAndDelete(id);
        if (!deletedExpense) {
            return res.status(404).json({ message: 'Expense not found' });
        }
        res.status(200).json({ message: 'Expense deleted successfully' });
    }
    catch(err){
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }   
}