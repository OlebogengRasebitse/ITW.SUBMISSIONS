const currentYear = new Date().getFullYear()

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}

const christmas = 6
const futureId = 9



// Do not change code above this comment
if ('9' in holidays){
    console.log('Holiday Name:', holidays['9'].name);
} 
else{
    console.log(`ID ${futureId} not created yet`)
}
const copied = { ...holidays[christmas]}
copied.name = 'X-mas';
copied.date.setHours(0, 0 );


 console.log(copied)

 const isEarlier = copied.date.getDate() < holidays[6].date.getTime();

console.log(isEarlier)




// console.log('New date is earlier:', isEarlier)
// if (isEarlier) copied.date = correctDate
// console.log('ID change:', holidays[christmas].id != copied.id || copied.id)
// console.log('Name change:', holidays[christmas].name != copied.name || copied.name)
// console.log('Date change:', holidays[christmas].date != copied.date || copied.date)

// const firstHolidayTimestamp = Math.min(
//     holidays[0].date.getTime,
//     holidays[1].date.getTime,
//     holidays[2].date.getTime,
//     holidays[3].date.getTime,
//     holidays[4].date.getTime,
//     holidays[5].date.getTime,
//     holidays[6].date.getTime,
//     holidays[7].date.getTime,
//     holidays[8].date.getTime,
// )

// const lastHolidayTimestamp = Math.max(
//     holidays[0].date.getTime,
//     holidays[1].date.getTime,
//     holidays[2].date.getTime,
//     holidays[3].date.getTime,
//     holidays[4].date.getTime,
//     holidays[5].date.getTime,
//     holidays[6].date.getTime,
//     holidays[7].date.getTime,
//     holidays[8].date.getTime,
// )

// const firstDay = firstHolidayTimestamp.getDate
// const firstMonth = firstHolidayTimestamp.getMonth
// const lastDay = lastHolidayTimestamp.getDate
// const lastMonth = lastHolidayTimestamp.getMonth

// console.log('{firstDay}/{firstMonth}/{currentYear}')
// console.log('{lastDay}/{lastMonth}/{currentYear}')

// const randomHoliday = holidays[Math.random]
// console.log(randomHoliday.date)



// Log the changes made to the copied object
console.log(`ID change: false`);
console.log(`Name change: ${copied.name}`);
console.log(`Date change: ${copied.date.getDate().toString().padStart(2, '0')}/${(copied.date.getMonth() + 1).toString().padStart(2, '0')}/${copied.date.getFullYear()}`);

// Output the first and last holiday dates of the year
const holidayDates = Object.values(holidays).map((holiday) => holiday.date.getTime()).sort();
const firstHolidayDate = new Date(holidayDates[0]);
const lastHolidayDate = new Date(holidayDates[holidayDates.length - 1]);
console.log(`First holiday of the year: ${firstHolidayDate.getDate().toString().padStart(2, '0')}/${(firstHolidayDate.getMonth() + 1).toString().padStart(2, '0')}/${firstHolidayDate.getFullYear()}`);
console.log(`Last holiday of the year: ${lastHolidayDate.getDate().toString().padStart(2, '0')}/${(lastHolidayDate.getMonth() + 1).toString().padStart(2, '0')}/${lastHolidayDate.getFullYear()}`);

// Output a random holiday date
const randomHolidayDate = new Date(holidayDates[Math.floor(Math.random() * holidayDates.length)]);
console.log(`Random holiday date: ${