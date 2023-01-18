const { getExpenses, createNewExpense, removeOneExpense, pathExpense } = require("../services/expense-services");

const allExpenses = async (req, res) => {
  try {
    const expenses = await getExpenses();
    res.status(200).send(expenses);
  } catch (error) {
    res.status(404).send('Error while get expenses');
  }
}

const createExpense = async (req, res) => {
  try {
    if (!req.body.place || !req.body.cost || !req.body.date) throw new Error('Lost parametr!');
    const args = [req.body.place, req.body.cost, req.body.date];
    const expense = await createNewExpense(...args);
    res.status(201).send(expense);
  } catch (error) {
    res.status(500).send('Error while creating expense');
  }
};

const removeExpense = async (req, res) => {
  try {
    await removeOneExpense(req.params['id']).then(result => {
      res.status(202).send(result);
    });
  } catch (error) {
    res.status(500).send('Error while removing expense');
  }
}

const editExpense = async (req, res) => {
  try {
    let args = [req.body.id, req.body.cost, req.body.date, req.body.place];
    await pathExpense(...args).then(result => {
      res.status(202).send(result);
    })
  } catch (error) {
    res.status(500).send('Error while editing expense');
  }
}

module.exports = {
  allExpenses,
  createExpense,
  removeExpense,
  editExpense
}