// script.js

//This code should log these two values to the console: 48 & 12

//function that adds two numbers 
const add = (a, b) => { 
   return a + b;
 }

 //function that adds two numbers 
  let multiply = (a, b) => {
    return a * b;
 }

 function internal() {
 	const added = this.add(this.internal.a, this.internal.b);
    const mutiplication = this.multiply(added,  this.internal.c)
     console.log(mutiplication)
    //this refers to an object called.
	}

// Not allowed to change below this

const example1 = {
	internal: {//Object 
		a: 2, //a, b, c, = Properties.
		b: 4,
		c: 8,
	},
	add,
	multiply,
  calculate: internal
}

const example2 = {//Object
	internal: {
		a: 2,
		b: 2,
		c: 3,
	},
	add,
	multiply,
  calculate: internal
}

example1.calculate()
example2.calculate()

//calculate that calls an internal function internal to perform calculations.

// hen example1.calculate() is called, the internal function retrieves the values a=2, b=4, and c=8 from the internal object of example1 and performs the calculations (2 + 4) * 8, resulting in the value 48, which is logged to the console.

// Similarly, when example2.calculate() is called, the internal function retrieves the values a=2, b=2, and c=3 from the internal object of example2 and performs the calculations (2 + 2) * 3, resulting in the value 12, which is also logged to the console.