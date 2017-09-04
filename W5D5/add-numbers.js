const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const addNumbers = function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {
    reader.question(`Sum is ${sum}.\nEnter next number (${numsLeft} numbers left): `, (number) => {
      const newSum = sum + parseInt(number, 10);
      addNumbers(newSum, numsLeft - 1, completionCallback);
    });
  } else {
    completionCallback(sum);
    reader.close();
  }
};

const printSum = function printSum(sum) {
  console.log(`Sum total is ${sum}.`);
};

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
