const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

//Remove negative amount. 
// const owed = (parseFloat(leoBalance) + parseFloat(sarahBalance))
// const absOwed = Math.abs(owed);
// const absStr = absOwed.toString();


const owed =  parseFloat(leoBalance) + parseFloat(sarahBalance);
const positiveOwed = (-1* owed);


const leo = `${leoName} ${leoSurname} (Owed:R ${(-1* leoBalance)})`
const sarah = `${sarahName.trim()} ${sarahSurname}   (Owed:R ${(-1* sarahBalance).toFixed(2)})`;
const total = `Total amount owed: R ${(positiveOwed).toFixed(2)}`
const result = `${leo}\n${sarah}\n${divider}\n${total}\n${divider}`;

console.log(result)

