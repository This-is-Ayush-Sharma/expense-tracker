const router = require('express').Router();
const { addExpense, getAllExpense, editExpense, deleteExpense } = require('../controller/expense.controller');

router.get('/health', (req, res) => {
    res.status(200).json({ message: 'Server is healthy' });
});

router.post('/expense', addExpense);
router.get('/expenses', getAllExpense);
router.put('/expense/:id', editExpense);
router.delete('/expense/:id', deleteExpense);

module.exports = router;