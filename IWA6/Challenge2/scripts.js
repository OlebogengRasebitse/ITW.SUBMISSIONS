const rent = 400;
const tax = '12%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change below this line
 
//convert the string '12%' into a number
const taxNumber = parseFloat(tax) / 100;
console.log(taxNumber)

//Salary after tax.
let salaryAfterTax = salary - (salary * taxNumber)
console.log(salaryAfterTax)


//Final balance.
const balance = salaryAfterTax - transport - food - rent;
console.log(balance);

// Using 'toFixed method' & concatenation 
const newAmount = 'R' + balance.toFixed(2);



 if (hourOfDay === 0 && minuteOfDay === 0) {
   console.log(newAmount);
}
else if (hourOfDay === undefined && minuteOfDay === undefined) 
{ console.log(undefined);}







