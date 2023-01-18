const express = require("express")
const router = express.Router();
const { allExpenses, createExpense, removeExpense, editExpense } = require('../controllers/expense-controller');
const { validationExpenses } = require('../middlewares/expense-validation');

router.get('/expenses', allExpenses);
router.post('/expense', validationExpenses, createExpense);
router.delete('/expense/:id', removeExpense);
router.put('/expense', validationExpenses, editExpense);

module.exports = router;