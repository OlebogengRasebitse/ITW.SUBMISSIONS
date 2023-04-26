        const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]





// // Only edit below


///////////////////////////////////////////
//Code for month & year

//GET CURRENT MONTH AND YEAR
const currentDate = new Date;
const currentMonth = currentDate.toLocaleString('default', {month: 'long'});  
const currentYear = currentDate.getFullYear();

//GENERATE HTML WITH JS.
const april = document.querySelector('body > h1')
 april.innerHTML = `${currentMonth} ${currentYear}`;

//Code for dates
const calender = document.querySelector("[data-content]");
const newCal = document.createElement("h6")
newCal.textContent = "HELLO B";
calender.appendChild(newCal);



const createArray = (length) => {
    const result = []
    for (let i = 0; i < length; i++) {
      result.push(null)
    }
    return result
  }
  console.log(current)
  
  const createData = () => {
    const current = new Date()
    current.setDate(1)
  
    const startDay = current.getDay()
    const daysInMonth = getDaysInMonth(current)
  
    const weeks = createArray(5)
    const days = createArray(7)
    let result = []
  
    for (let weekIndex = 0; weekIndex < weeks.length; weekIndex++) {
      const value = {
        week: weekIndex + 1,
        days: []
      }
  
      for (let dayIndex = 0; dayIndex < days.length; dayIndex++) {
        const day = dayIndex - startDay + 1
        const isValid = day > 0 && day <= daysInMonth
  
        value.days.push({
          dayOfWeek: dayIndex + 1,
          value: isValid ? day : null,
        })
      }
  
      result.push(value)
    }
  
    return result
  
  }



//////////////////////////////////
// const createArray = (length) => {
//     const result = [];

//     for (let i = 0; i < length; i++) {
//         result.push(null);
//     }
//     return result;
// };

// const createData = () => {
//     const current = new Date();
//     current.setDate(1);

//     const startDay = current.getDay();
//     const daysInMonth = getDaysInMonth(current);

//     const  weeks = createArray(6);
//     const  days = createArray(7);
//     let value = null;

//     for (let dayIndex in weeks) {
//         value = {
//             week: parseInt(dayIndex) + 1,
//             days: [],
//         };

//         for (let weekIndex in weeks) {
//             const  day = parseInt(dayIndex) + 1 - startDay;
//             const  isValid = day > 0 && day <= daysInMonth;

//             value.days.push({
//                 dayOfWeek:parseInt(dayIndex) + 1,
//                 value: isValid && day,
//             })
//         }
//         // weeks[weekIndex] = value;
//     }
//     // return weeks;
// };


// const addCell = (existing, classString, value) => {
//     const cell = document.createElement('td');
//     cell.classList.add(classString);
//     cell.innerText = value;
//     existing.appendChild(cell);
// };  
     

// const createHtml = (data) => {
//     let result = '';

//     for (let {week, days} of data); {
//         const row = document.createElement('tr');
//         const weekCell = document.createElement('td');
//         weekCell.classList.add('table__cell table__cell_sidebar');
//         weekCell.innerText = `Week ${week}`;
//         row.appendChild(weekCell);
        
//         for (let {dayOfWeek, value} of days) {
//             const cell = document.createElement('td');
//              let classString = 'table__cell';

// 	        const isWeekend = dayOfWeek === 7;
//             if (isAlternate) classString += `table__cell_weekend`;

//             const isAlternate = week % 2 === 0;
//             if (isAlternate) classString += ' table__cell_alternate';

//             cell.classList.add(classString);
//             cell.innerText = value || '';
//             row.appendChild(cell);

				
//         }

//       return  result += row.outerHTML;
//     };
// }

// // Only edit above

// const current = new Date()

// const data = createData()
// document.querySelector('[data-content]').innerHTML = createHtml(data)


// console.log(MONTHS)
// const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();





