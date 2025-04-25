const router = require('express').Router();
const { addExpense, getAllExpense, editExpense, deleteExpense } = require('../controller/expense.controller');

router.get('/health', (req, res) => {
    res.status(200).json({ message: 'Server is healthy' });
});

router.post('/add-expense', addExpense);
router.get('/get-expenses', getAllExpense);
router.put('/edit-expense/:id', editExpense);
router.delete('/delete-expense/:id', deleteExpense);

module.exports = router;