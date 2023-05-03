
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
 
//creates an array for days and weeks
const createArray = (length) => { //Function 
  const result = []; //results from loop.
  for (let i = 0; i < length; i++) { 
    result.push(i);
  }
  return result;

};

//Returns number of days in the current month
const getDaysInMonth = (date) => {
  const year = date.getFullYear(); //Get year as a four digit number (yyyy) +  Extract the year from the date
  const month = date.getMonth() + 1; // Extract the month from the date + 1 to get the actual month
  return new Date(year, month,0).getDate(); // Create a new date object for the last day of the given month and year, then extract the day of the month (i.e. the number of days in the month)
};

//

const createData = () => {
  const current = new Date();  //new Date() without arguments, creates a date object with the current date and time:
  current.setDate(1); //1st of the current month
  const startDay = current.getDay();
  const daysInMonth = getDaysInMonth(current); //gives us the number of days in the month
  const weeks = createArray(6); //rows
  const days = createArray(7); //columns
  let result = [];
  for (let weekIndex = 0; weekIndex < weeks.length; weekIndex++) {
    let value = {
      week: weekIndex + 1,
      days: [],
    };
    for (let dayIndex = 0; dayIndex < days.length; dayIndex++) { 
      const day = weekIndex * 7 + dayIndex - startDay + 1; 
      const isValid = day > 0 && day <= daysInMonth; //checks if the day value calculated in the previous step is a valid day in the current month
      let classString = 'table__cell'; //initializes a class string 
      if (dayIndex === 0 || dayIndex === 6) {
        classString += ' table__cell_weekend';
      }
      value.days.push({
        dayOfWeek: dayIndex + 1,  //(0-6) 
        value: isValid ? day : '',
        class: classString,
      });
    }
    weeks[weekIndex] = value;
    
  }
  return weeks;
};

//add a new HTML table cell to an existing HTML string
const addCell = (existing, classString, value) => {
  return `${existing}<td class="${classString}">${value}</td>`; // table cell (<td>) 
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
document.querySelector('[data-title]').innerHTML = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`;
const data = createData();
document.querySelector('[data-content]').innerHTML = createHtml(data);


  //textContents is all text contained by an element and all its children that are for formatting purposes only.
// innerText returns all text contained by an element and all its child elements.
// innerHtml returns all text, including html tags, that is contained by an element.



