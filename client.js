const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

function employeeBonuses (array) {
  for (item of array) {
    console.log(item);
  }
}
employeeBonuses(employees);
// console.table( employees );

function addBonusPercentage (array) {
  for (let index = 0; index < array.length; index++) {
    if (employees[index].reviewRating <= 2) {
      employees[index].bonusPercentage = 0;
      //console.log(employees[index]);
    } else if (employees[index].reviewRating === 3) {
      employees[index].bonusPercentage = 4;
      //console.log(employees[index]);
    } else if (employees[index].reviewRating === 4) {
      employees[index].bonusPercentage = 6;
      //console.log(employees[index]);
    } else if (employees[index].reviewRating === 5) {
      employees[index].bonusPercentage = 10;
      // console.log(employees[index]);
    } 
  }
  for (let index = 0; index < array.length; index++) {
    if (employees[index].employeeNumber.length === 4) {
      employees[index].bonusPercentage += 5; 
      console.log(employees[index]);
    }
  }
  for (let index = 0; index < array.length; index++) {
    if (parseInt(employees[index].annualSalary) > 65000) {
      employees[index].bonusPercentage -= 1;
      console.log(employees[index]);
    }
  }
  for (let index = 0; index < array.length; index++) {
    if (employees[index].bonusPercentage < 0) {
      employees[index].bonusPercentage = 0;
      // console.log(employees[index]);
    } else if (employees[index].bonusPercentage > 13) {
      employees[index].bonusPercentage = 13;
    }
  }
}

function totalBonus (array) {
  for (let index = 0; index < array.length; index++) {
    totalBonusCalc = parseInt(employees[index].annualSalary) *;
  } 
  return totalBonusCalc;
}

console.log(totalBonus(employees));
console.table(employees);


addBonusPercentage(employees);
console.table( employees );
