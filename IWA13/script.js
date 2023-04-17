let state = 'idle'
let user = null
let calculated = '1'

// Only allowed to change below

//Arrow Functions.
//When doing a single return, I can remove the curly brackets & "return" keyword.

const logCalc = () => {
    const isString = typeof calculated == Number
    const calculatedAsNumber = isString ? calculated : parseInt(calculated) //Using the Tenary method. Check if calculated is a string :if not use parseInt to convert the string into a number.
    calculated = calculatedAsNumber + 1 
}

//Call function
const calcUser = () => {
  logCalc(); //Use parenthesis to call the function 
  if (calculated > 2) user = 'John'
  if (calculated > 2) state = 'requesting'
  if (calculated > 3) state = 'idle'
}

const checkUser = () => {
	if (user && state === 'requesting') {
		console.log(`User: ${user} (${calculated})`)
    calculated = '4'
	}
}
 
 
// Only allowed to change code above
calcUser()
checkUser()


checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()





// function sum (x,y) {

//   return x + y
// }


// let b = 5+sum(1,5)
// console.log(b)