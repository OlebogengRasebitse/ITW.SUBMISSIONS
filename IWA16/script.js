const MONTHS = [ //ARRAY OF 12 STRINGS
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec',
]

const data = {
	response: {
		requestType: "FETCH_ATHLETE_DATA",
		requestBy: "ALL_MATCHING_ATHLETES",
		forDisplay: "BEST_RACES",

		data: {
			NM372: {
				firstName: "Nwabisa",
				surname: "Masiko",
				id: "NM372",
				races: [
					{
						date: '2022-11-18T20:00:00.000Z',
						time: [9, 7, 8, 6],
					},
					{
						date: '2022-12-02T20:00:00.000Z',
						time: [6, 7, 8, 7],
					},
				],
			},

			SV782: {
				firstName: "Schalk",
				surname: "Venter",
				id: "SV782",
				races: [
					{
						date: '2022-11-18T20:00:00.000Z',
						time: [10, 8, 3, 12],
					},
					{
						date: '2022-11-25T20:00:00.000Z',
						time: [6, 8, 9, 11],
					},
					{
						date: '2022-12-02T20:00:00.000Z',
						time: [10, 11, 4, 8],
					},
					{
						date: '2022-12-09T20:00:00.000Z',
						time: [9, 8, 9, 11],
					},
				],
			},
		},
	},
};

// Only edit below this comment


const createHtml = (athlete) => {
	const { firstName, surname, id, races } = athlete;
	const [latestRace] = races.slice(-1);
	const [time1, time2, time3, time4] = latestRace.time;
	const latestRaceDate = new Date(latestRace.date);
	const formattedDate = `${latestRaceDate.getDate()} ${MONTHS[latestRaceDate.getMonth()]} ${latestRaceDate.getFullYear()}`;
	const totalRaceCount = races.length;
	const totalTime = `${String(Math.floor((time1 + time2 + time3 + time4) / 60)).padStart(2, '0')}:${String((time1 + time2 + time3 + time4) % 60).padStart(2, '0')}`;
  
	const section = document.querySelector(`[data-athlete="${id}"]`);
		
	const title = document.createElement('h2');
	title.textContent = `Athlete: ${id}`;
  
	const list = document.createElement('dl');
  
	const fullNameTerm = document.createElement('dt');
	fullNameTerm.textContent = 'Full Name';
  
	const fullNameDesc = document.createElement('dd');
	fullNameDesc.textContent = `${firstName} ${surname}`;
  
	const raceCountTerm = document.createElement('dt');
	raceCountTerm.textContent = 'Total Races';
  
	const raceCountDesc = document.createElement('dd');
	raceCountDesc.textContent = totalRaceCount;
  
	const latestDateTerm = document.createElement('dt');
	latestDateTerm.textContent = 'Event Date (Latest)';
  
	const latestDateDesc = document.createElement('dd');
	latestDateDesc.textContent = formattedDate;
  
	const latestTimeTerm = document.createElement('dt');
  latestTimeTerm.textContent = 'Latest Race Time';
  
  const latestTimeDesc = document.createElement('dd');
  latestTimeDesc.textContent = totalTime;

	list.appendChild(fullNameTerm);
	list.appendChild(fullNameDesc);
	list.appendChild(raceCountTerm);
	list.appendChild(raceCountDesc);
	list.appendChild(latestDateTerm);
	list.appendChild(latestDateDesc);
	list.appendChild(latestTimeTerm);
	list.appendChild(latestTimeDesc);
  
	section.appendChild(title);
	section.appendChild(list);
  }






// const formatDate = (dateString) => {
// 	const date = new Date(dateString); //creates a date object from a date string
// 	const day = date.getDate();
// 	const month = MONTHS[date.getMonth()];
// 	const year = date.getFullYear();
// 	return `${day} ${month} ${year}`;
// };


// const formatTime = (minutes) => {
// 	const hours = Math.floor(minutes / 60);
// 	const mins = minutes % 60;
// 	return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
// };

// const displayAthleteData = (athlete) => {
// 	const { id, firstName, surname, races } = athlete;
// 	const section = document.querySelector(`[data-athlete="${id}"]`);

// 	const latestRace = races[races.length - 1];
// 	const totalRaces = races.length;

// 	const h2 = document.createElement('h2');
// 	h2.textContent = `Athlete: ${firstName} ${surname}`;

// 	const dl = document.createElement('dl');
// 	dl.innerHTML = `
// 	  <dt>Full Name</dt>
// 	  <dd>${firstName} ${surname}</dd>
// 	  <dt>Total Races</dt>
// 	  <dd>${totalRaces}</dd>
// 	  <dt>Event Date (Latest)</dt>
// 	  <dd>${formatDate(latestRace.date)}</dd>
// 	  <dt>Total Time (Latest)</dt>
// 	  <dd>${formatTime(latestRace.time.reduce((a, b) => a + b))}</dd>
// 	`;

// 	section.appendChild(h2);
// 	section.appendChild(dl);
// }
