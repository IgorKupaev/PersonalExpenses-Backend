const express = require("express")
const router = express.Router();
const { allExpenses, createExpense, removeExpense, editExpense } = require('../controllers/expense-controller');
const { validationExpenses } = require('../middlewares/expense-validation');

router.get('/allExpenses', allExpenses);
router.post('/expense', validationExpenses, createExpense);
router.delete('/removeExpense/:id', removeExpense);
router.put('/editExpense', validationExpenses, editExpense);

module.exports = router;