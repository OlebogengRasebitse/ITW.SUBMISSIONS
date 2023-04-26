
const MONTHS = [ //Array
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
  ];
  
  const createArray = (length) => { //Function 
    const result = [];
    for (let i = 0; i < length; i++) {
      result.push(i);
    }
    return result;
  };
 console.log(length)
  
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    return new Date(year, month, 0).getDate();
  };
  
  const createData = () => {
    const current = new Date();
    current.setDate(1);
    const startDay = current.getDay();
    const daysInMonth = getDaysInMonth(current);
    const weeks = createArray(6);
    const days = createArray(7);
    let result = [];
    for (let weekIndex = 0; weekIndex < weeks.length; weekIndex++) {
      let value = {
        week: weekIndex + 1,
        days: [],
      };
      for (let dayIndex = 0; dayIndex < days.length; dayIndex++) {
        const day = weekIndex * 7 + dayIndex - startDay + 1;
        const isValid = day > 0 && day <= daysInMonth;
        let classString = 'table__cell';
        if (dayIndex === 0 || dayIndex === 6) {
          classString += ' table__cell_weekend';
        }
        value.days.push({
          dayOfWeek: dayIndex + 1,
          value: isValid ? day : '',
          class: classString,
        });
      }
      weeks[weekIndex] = value;
    }
    return weeks;
  };
  
  const addCell = (existing, classString, value) => {
    return `${existing}<td class="${classString}">${value}</td>`;
  };
  
  const createHtml = (data) => {
    let result = [];
    for (let i = 0; i < data.length; i++) {
      const week = data[i];
      let inner = '';
      inner = addCell(inner, 'table__cell table__cell_sidebar', `Week ${week.week}`);
      for (let j = 0; j < week.days.length; j++) {
        const day = week.days[j];
        let classString = 'table__cell'; //CSS Line deviders.

        console.log(week)

        //Dates and time
        const currentDate = new Date();
        const isToday = currentDate.getDate() === day.value && currentDate.getMonth() === current.getMonth();
        const isWeekend = day.dayOfWeek === 1 || day.dayOfWeek === 7;
        const isAlternate = week.week % 2 === 0;

        //Block shades.
        if (isToday) {
          classString = `${classString} table__cell_today`;
        }
        if (isWeekend) {
          classString = `${classString} table__cell_weekend`;
        }
        if (isAlternate) {
          classString = `${classString} table__cell_alternate`;
        }
        
        //Code for days number 1-30
        inner = addCell(inner, classString, day.value || '');//'' for blank spaces.
      }
      result += `<tr>${inner}</tr>`; //vertical align content inside <tr>
    }
    return result;
  };
  
  const current = new Date();
  document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`;
  const data = createData();
  document.querySelector('[data-content]').innerHTML = createHtml(data);

// // Only edit below


///////////////////////////////////////////
//Code for month & year

//GET CURRENT MONTH AND YEAR
// const currentDate = new Date;
// const currentMonth = currentDate.toLocaleString('default', {month: 'long'});  
// const currentYear = currentDate.getFullYear();

// //GENERATE HTML WITH JS.
// const april = document.querySelector('body > h1')
//  april.innerHTML = `${currentMonth} ${currentYear}`;

// //Code for dates
// const calender = document.querySelector("[data-content]");
// const newCal = document.createElement("h6")
// newCal.textContent = "HELLO B";
// calender.appendChild(newCal);

// old code///////
// const createArray = (length) => {
//     const result = []
//     for (let i = 0; i < length; i++) {
//       result.push(null)
//     }
//     return result
//   }
//   console.log(current)
  
//   const createData = () => {
//     const current = new Date()
//     current.setDate(1)
  
//     const startDay = current.getDay()
//     const daysInMonth = getDaysInMonth(current)
  
//     const weeks = createArray(5)
//     const days = createArray(7)
//     let result = []
  
//     for (let weekIndex = 0; weekIndex < weeks.length; weekIndex++) {
//       const value = {
//         week: weekIndex + 1,
//         days: []
//       }
  
//       for (let dayIndex = 0; dayIndex < days.length; dayIndex++) {
//         const day = dayIndex - startDay + 1
//         const isValid = day > 0 && day <= daysInMonth
  
//         value.days.push({
//           dayOfWeek: dayIndex + 1,
//           value: isValid ? day : null,
//         })
//       }
  
//       result.push(value)
//     }
  
//     return result
  
//   }
