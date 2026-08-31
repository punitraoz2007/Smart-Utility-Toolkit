// Demonstration of custom module

const isEven = require("./isEven");

console.log(" Custom Module Demo Started");

const numbers = [2, 5, 8, 11, 14];

numbers.forEach((number) => {
  if (isEven(number)) {
    console.log(`${number} is Even`);
  } else {
    console.log(`${number} is Odd`);
  }
});

console.log(" Custom Module Demo Finished");
