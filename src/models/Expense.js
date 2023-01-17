const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  place: String,
  date: String,
  cost: Number
})

module.exports = Expense = mongoose.model("expenses", todoSchema);