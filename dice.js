// Random Dice Generator using crypto module

const crypto = require("crypto");

const numberOfRolls = Number(process.argv[2]) || 1;

console.log(" Secure Dice Generator Started ");

console.log(`Number of rolls: ${numberOfRolls}`);

if (!Number.isInteger(numberOfRolls) || numberOfRolls < 1) {
  console.log("Error: Number of rolls must be a positive integer.");

  process.exit(1);
}

for (let i = 1; i <= numberOfRolls; i++) {
  const diceValue = crypto.randomInt(1, 7);

  console.log(`Roll ${i}: Dice Rolled: ${diceValue}`);
}

console.log(" Dice Generator Finished ");
