/*13. Bill splitter
A restaurant wants to calculate the total bill for a table based on the cost of each dish and the number of
people sharing it. They require a function that takes in the cost of each dish and the number of people sharing
it and returns an object that contains the total bill and the bill to be paid by each person in the group.*/

function calculateBill(costPerDish, numberOfPeople) {
  "use strict";

  const totalBill = costPerDish * numberOfPeople;
  const billPerPerson = totalBill / numberOfPeople;

  const result = {
    totalBill: totalBill,
    billPerPerson: billPerPerson,
  };

  return result;
}

if (typeof window !== "undefined") {
  window.calculateBill = calculateBill;
}

const result = calculateBill(10, 4);

console.log("The total bill is: $" + result.totalBill);
console.log("The bill per person is: $" + result.billPerPerson);
