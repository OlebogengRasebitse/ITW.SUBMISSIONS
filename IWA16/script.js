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
// Create HTML for each athlete
//  Object.values(data.response.data).forEach((athlete) => {
//  	const { firstName, surname, id, races } = athlete; //DESTRUCTURING.Use what we only need.

	// convert the values of the data.response.data object into an array

	for (const athleteKey in data.response.data) { //Repeatedly go through dat.response properties.
		const athlete = data.response.data[athleteKey]; //Retrieves the value of current property
		const { firstName, surname, id, races } = athlete; //DESTRUCTURING.Use what we only need.



	// Get the latest race
	const [latestRace] = races.slice(-1);//New Array array is sorted in descending order by date.Use slice to get the last race
	const [time1, time2, time3, time4] = latestRace.time;// extracts these four values into separate variables named using RESTRUCTURING
	const latestRaceDate = new Date(latestRace.date);//creates a new Date object
	const formattedDate = `${latestRaceDate.getDate()} ${MONTHS[latestRaceDate.getMonth()]} ${latestRaceDate.getFullYear()}`; //dd mm yyyy
	const totalRaceCount = races.length; //2 & 4  
	const totalTime = `${String(Math.floor((time1 + time2 + time3 + time4) / 60)).padStart(2, '0')}:${String((time1 + time2 + time3 + time4) % 60).padStart(2, '0')}`; //hh:mm
  
	// Create the HTML elements
	const section = document.querySelector(`[data-athlete="${id}"]`);
	const iD = document.createElement('h2');

	const title = document.createElement('dd');
	const titleA = document.createElement('dt');

	const infoDateA = document.createElement('dt');
	const infoDate = document.createElement('dd');

	const infoRacesA = document.createElement('dt');
	const infoRaces = document.createElement('dd');

	const infoTotalA = document.createElement('dt');
	const infoTotal = document.createElement('dd');

  
	// Set the text content of the HTML elements
	iD.textContent = `${id}`;
	titleA.textContent = `Athlete:`;
	title.textContent = `${firstName} ${surname}`;

	infoDateA.textContent = `Event Date:`;
	infoDate.textContent = `(Latest) ${formattedDate}`;

	infoRacesA.textContent = `Total races:`;
	infoRaces.textContent = `${totalRaceCount}`;
	
	infoTotalA.textContent = `Total time: ${totalTime}`;
	infoTotal.textContent = `${totalTime}`;

	// Add the HTML elements to the section
	section.appendChild(iD);
	section.appendChild(titleA);
	section.appendChild(title);
	section.appendChild(infoDateA);
	section.appendChild(infoDate);
	section.appendChild(infoRacesA);
	section.appendChild(infoRaces);
	section.appendChild(infoTotalA);
	section.appendChild(infoTotal);
  };
