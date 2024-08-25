function Multiply(a) {
  return function (b) {
    return a * b;
  };
}

let firstValue = parseInt(prompt("Enter a first numeric value to multiply:"));
let secondValue = parseInt(prompt("Enter a second numeric value to multiply:"));

while (isNaN(firstValue) || isNaN(secondValue)) {
  alert("Something go wrong. Please , try again and enter a numeric value.");
  firstValue = parseInt(prompt("Enter a first numeric value to multiply:"));
  secondValue = parseInt(prompt("Enter a second numeric value to multiply:"));
}

console.log(
  `The result of multiplying is: ${Multiply(firstValue)(secondValue)}`
);
