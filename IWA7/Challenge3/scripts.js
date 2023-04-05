const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

//Remove negative amount. 
const owed = parseFloat(leoBalance + sarahBalance)
const absOwed = Math.abs(owed);
const absStr = absOwed.toString();

//Owed
const finalOwed = "R" + absStr;



// const leo = `${leoName} + {leoSurname} + \"Owed\" + \"R\" + {sarahBalance}"
// const sarah = "{leoName} + {surname} + \"Owed\" + \"R\" + {sarahBalance}"
// const total = "Total amount owed: "
// const result = leo + sarah + divider + divider + total + owed + divider

console.log(`${leoName} ${leoSurname}  (${finalOwed})`)