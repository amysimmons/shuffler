var teams = [
	'a',
	'b',
	'c',
];

// make a copy of the teams
var remainingTeams = teams.slice();

// print out the teams
teams.forEach((team, index) => {
	$('.teams-list').append(`<li class=${index}>${team}</li>`)
})

$('.shuffle-btn').on('click', () => {

	// shuffle the remaining teams
	var shuffled = _.shuffle(remainingTeams);

	// find the upNext team
	var upNext = shuffled[0];

	// if there are no more teams to go, return
	var upNextIndex = remainingTeams.indexOf(upNext);
	if (upNextIndex < 0) {
		return;
	}

	// add the upnext team to the ui
	$('.up-next').html(`<li>${upNext}</li>`);

	// add a class of done to the upnext team in the original list
	var originalIndex = teams.indexOf(upNext);
	$(`.teams-list li.${originalIndex}`).addClass('done');

	// remove the upNext team from the remaining teams list
	remainingTeams.splice(upNextIndex, 1);
})


