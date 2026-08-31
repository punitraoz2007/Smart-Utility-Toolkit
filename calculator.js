// CLI Calculator using process.argv

console.log(" CLI Calculator Started");

const [, , operation, firstInput, secondInput] = process.argv;

const a = Number(firstInput);
const b = Number(secondInput);

if (!operation || firstInput === undefined || secondInput === undefined) {
  console.log(
    "Usage: node calculator.js <add|subtract|multiply|divide> <number1> <number2>",
  );
  process.exit(1);
}

if (Number.isNaN(a) || Number.isNaN(b)) {
  console.log("Error: Please enter valid numbers.");
  process.exit(1);
}

let result;

switch (operation.toLowerCase()) {
  case "add":
    result = a + b;
    break;

  case "subtract":
    result = a - b;
    break;

  case "multiply":
    result = a * b;
    break;

  case "divide":
    if (b === 0) {
      console.log("Error: Division by zero is not allowed.");
      process.exit(1);
    }

    result = a / b;
    break;

  default:
    console.log(`Error: Invalid operation "${operation}".`);
    console.log("Allowed operations: add, subtract, multiply, divide");
    process.exit(1);
}

console.log(`Operation: ${operation}`);
console.log(`Numbers: ${a}, ${b}`);
console.log(`Result: ${result}`);

console.log("Calculator Finished ");
