// Custom reusable module

function isEven(number) {
  return Number.isInteger(number) && number % 2 === 0;
}

module.exports = isEven;
