const Expense = require("../models/Expense");

const getExpenses = async () => {
  return await Expense.find()
}

const createNewExpense = async (place, cost, date) => {
  const arg = {place: place, cost: cost, date: date};
  const newExpense = new Expense(arg);
  const savedExpense = await newExpense.save();
  return savedExpense;
}

const removeOneExpense = async (id) => {
  return await Expense.deleteOne({_id: id});
}

const pathExpense = async (id, cost, date, place) => {
  let args = {place: place, date: date, cost: cost};
  return await Expense.findByIdAndUpdate(id, args);
}

module.exports = {
  getExpenses,
  createNewExpense,
  removeOneExpense,
  pathExpense
}
  