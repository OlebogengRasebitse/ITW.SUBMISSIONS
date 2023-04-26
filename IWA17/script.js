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

const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();


// Only edit below 

const createArray = (length) => {
    const result = [];

    for (let i = 0; i < length; i++) {
        result.push(null);
    }
    return result;
};

const createData = () => {
    const current = new Date();
    current.setDate(1);

    const startDay = current.getDay();
    const daysInMonth = getDaysInMonth(current);

    const  weeks = createArray(6);
    const  days = createArray(7);
    let value = null;

    for (let weekIndex in weeks) {
        value = {
            week: parseInt(weekIndex) + 1,
            days: [],
        };

        for (let weekIndex in weeks) {
            const  day = parseInt(dayIndex) + 1 - startDay;
            const  isValid = day > 0 && day <= daysInMonth;

            value.days.push({
                dayOfWeek:parseInt(dayIndex) + 1,
                value: isValid && day,
            })
        }
        weeks[weekIndex] = value;
    }
    return weeks;
};


const addCell = (existing, classString, value) => {
    const cell = document.createElement('td');
    cell.classList.add(classString);
    cell.innerText = value;
    existing.appendChild(cell);
};  
        'table_ _cell', 'table__cell_sidebar'); 
    weekC


const createHtml = (data) => {
    let result = '';

    for (let {week, days} of data) {
        const row = document.createElement('tr');
        const weekCell = document.createElement('td');
        weekCell.classList.add('table__cell table__cell_sidebar');
        weekCell.innerText = `Week ${week}`;
        row.appendChild(weekCell
            );
        
        for (let {dayOfWeek, value} of days) {
            const cell = document.createElement('td');
             let classString = 'table__cell';

	        const isWeekend = dayOfWeek === 7;
            if (isAlternate) classString += `table__cell_weekend`;

            const isAlternate = week % 2 === 0;
            if (isAlternate) classString += ' table__cell_alternate';

            cell.classList.add(classString);
            cell.innerText = value || '';
            row.appendChild(cell);

				
        }

      return  result += row.outerHTML;
    };
}

// Only edit above

const current = new Date()
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`

const data = createData()
document.querySelector('[data-content]').innerHTML = createHtml(data)