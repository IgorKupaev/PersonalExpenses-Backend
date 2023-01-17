const { check } = require('express-validator');
const validationExpenses = [
  check('place')
    .isString()
    .trim()
    .notEmpty(),
  check('date')
    .isString()
    .trim()
    .notEmpty(),
  check('cost')
    .isNumeric()
    .notEmpty(),
];

module.exports = {
  validationExpenses
};
