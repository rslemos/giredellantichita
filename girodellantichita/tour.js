function buildTourTable(div, start, tour) {
	div.addClass('tour');

	// firefox cannot display anything other than current user timezone; so everything must be converted
	var currentTimezoneOffset = -new Date().getTimezoneOffset();

	var dow = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'];

	var dateFormatter = new Intl.DateTimeFormat('pt-BR', {year: 'numeric', month: '2-digit', day: '2-digit'});
	var timeFormatter = new Intl.DateTimeFormat('pt-BR', {hour: '2-digit', minute: '2-digit' });

	var metadata = '<tr><th colspan="4">Traslado</th><th colspan="2">Cidades</th></tr>' + 
	'<tr><th id="by">Meio</th><th id="date">Data</th><th id="time">Hora</th><th id="duration">Duração</th><th id="bound" style="min-width: 20em;">Destino</th><th id="activities" style="width: 80%;">Atividades</th><tr>';

	var table = $('<table class="roteiro"><thead>' + metadata + '</thead><tfoot>' + metadata + '</tfoot><tbody></tbody></table>');
	div.append(table);

	var tbody = table.children('tbody');

	Date.prototype.getLocalTimeFor = function(timezoneOffset) {
		return new Date(this.getTime() + (timezoneOffset - currentTimezoneOffset)*(60*1000));
	}

	var w = start;
	for(var i=0; i<tour.length; i++) {
		tour[i].depart = tour[i].departUTC.getLocalTimeFor(w.timezoneOffset);

		w = tour[i].bound[0];
		tour[i].arrival = tour[i].arrivalUTC.getLocalTimeFor(w.timezoneOffset);
	}

	// prototype for 2 lines
	var prototype = $('<tr id="depart"><td id="by" rowspan="2"></td><td id="date"></td><td id="time"></td><td id="duration" rowspan="2"></td></tr>' + 
		'<tr id="arrival"><td id="date"></td><td id="time"></td><td id="bound" rowspan="2"></td><td id="activities" rowspan="2"></td></tr>');

	for(var i=0; i<tour.length; i++) {
		var newlines = prototype.clone().appendTo(tbody);

		function fillTravelBy(td, travel) {
			td.append(travel.by);

			if (countCrosses(travel.depart, travel.arrival, 0) > 0)
				td.addClass("estadia");
		}

		function fillDate(td, date) {
			td
				.append('<span class="reversed rounded smaller bolder centered" style="display: inline-block; width: 2.5em;">' + dow[date.getDay()] + '</span>')
				.append('&nbsp;')
				.append(dateFormatter.format(date))
			;
		}

		function fillTime(td, date) {
			td.append(timeFormatter.format(date));
		}

		function fillDuration(td, ms) {
			var s = ms/1000 | 0;
			ms -= s*1000;

			var m = s/60 | 0;
			s -= m*60;

			var h = m/60 | 0;
			m -= h*60;

			var d = h/24 | 0;
			h -= d*24;

			var result = m > 0 ? (('00' + m).slice(-2) + 'min') : '';

			if (h > 0 || d > 0)
				result = h + 'h' + result;
			
			if (d > 0)
				result = '+' + d + 'd&nbsp;' + result;

			td.append(result);			
		}

		function fillBound(boundtd, travel, nextTravel) {
			var boundul = $('<ul></ul>').appendTo(boundtd);

			for(var j=0; j<travel.bound.length; j++) {
				$('<li></li>').appendTo(boundul).append(travel.bound[j].name);
			}

			if (typeof nextTravel != 'undefined' && countCrosses(travel.arrival, nextTravel.depart, 0) > 0)
				boundul.children('li').first().addClass("estadia");

			if (typeof travel.lodging === 'object') {
				var lodging = $('<div class="lodging bolder rounded"><img class="icon" src="hotel.png"></div>').appendTo(boundtd);
				lodging.append(travel.lodging.property.name);
				lodging.data(travel.lodging);
			}

			var iconsdiv = $('<div class="icons"></div>').prependTo(boundtd);

			var suntimes = SunCalc.getTimes(travel.arrival, travel.bound[0].coordinates.latitude, travel.bound[0].coordinates.longitude);
			$('<div></div>')
				.appendTo(iconsdiv)
				.append(sun.clone())
				.append(timeFormatter.format(suntimes.sunrise.getLocalTimeFor(travel.bound[0].timezoneOffset)))
				.append('&nbsp;&mdash;&nbsp;')
				.append(timeFormatter.format(suntimes.sunset.getLocalTimeFor(travel.bound[0].timezoneOffset)))
			;

			if (typeof nextTravel != 'undefined') {
				var row = $('<div></div>').appendTo(iconsdiv);

				row.append(getIconRow(countCrosses(travel.arrival, nextTravel.depart, 0), moon));
				row.append(getIconRow(countCrosses(travel.arrival, nextTravel.depart, (12*60+30)*60*1000), lunch));
			}

		}

		fillTravelBy(newlines.filter('#depart').children('td#by'), tour[i]);

		fillDate(newlines.filter('#depart').children('td#date'), tour[i].depart);
		fillDate(newlines.filter('#arrival').children('td#date'), tour[i].arrival);

		fillTime(newlines.filter('#depart').children('td#time'), tour[i].depart);
		fillTime(newlines.filter('#arrival').children('td#time'), tour[i].arrival);

		fillDuration(newlines.filter('#depart').children('td#duration'), tour[i].arrivalUTC.getTime() - tour[i].departUTC.getTime());

		fillBound(newlines.filter('#arrival').children('td#bound'), tour[i], tour[i+1]);
	}

	// special provision for first row
	tbody
		.children('tr:first')
		.append('<td><ul><li></li></ul></td><td></td>')
		.children('td:nth-child(5)')
		.children('ul')
		.children('li')
		.append(start.name)
		.addClass("estadia")
	;

	// special provision for last row
	tbody.children('tr:last')
		.children('td')
		.slice(-2)
		.attr('rowspan', 1)
		.addClass("estadia")
	;

	// coalesce duplicate cells
	function coalesceCellsByColumn(cells) {
		var toremove = $();

		for(var i=0; i<cells.length; i++) {
			var j = i;
			for(i++; i<cells.length; i++) {
				if (cells[j].textContent != cells[i].textContent)
					break;
		
				toremove = toremove.add(cells[i]);		
			}
			i--;

			if (i > j)
				$(cells[j]).attr('rowspan', i-j+1);
		}

		toremove.remove();		
	}

	coalesceCellsByColumn(tbody.children('tr').children('td#date').get());

	$('div.lodging').hover(function(ev) {
		$('div.floating').remove();
		var target = $(ev.target);
		var lodging = target.data();
		var toolbox = $('<div class="floating"></div>')
			.appendTo('body')
			.css({
				top: target.offset().top - target.height(),
				left: target.offset().left + target.width() - 10
			})
		;

		var address = $('<div class="address"></div>');
		lodging.property.address.forEach(function(o){
			address
				.append(o)
				.append('<br>')
		});

		toolbox
			.append('<h4><a href="' + lodging.property.url[0] + '" target="_blank">' + lodging.property.name + '</a></h4>')
			.append(address);
		;

		// property: {
		// 	address: [
		// 		'Corte Dei Musco 3',
		// 		'73100 Lecce',
		// 		'Itália'
		// 	],
		// 	city: lecce,
		// 	phones: [
		// 		'+393476627752'
		// 	]
		// },
		// cost: 270,
		// checkin: [new Date('20150808T14:00:00.000+02:00'), new Date('20150808T22:00:00.000+02:00')],
		// checkout: [new Date('20150811T06:00:00.000+02:00'), new Date('20150811T10:00:00.000+02:00')]

	}, function(ev) {
	})
}

function getIconRow(count, icon) {
	var row = $('<span></span>');

	if (count < 5)
		for(var j=0; j<count; j++)
			row.append(icon.clone());
	else
		row.append(icon.clone()).append('&nbsp;×').append(count);

	return row;	
}

function dateOnly(date) {
	var d = new Date(date);
	d.setHours(0, 0, 0, 0, 0);
	return d;
}

function countCrosses(begin, end, time) {
	var dbegin = dateOnly(begin)
	var dend = dateOnly(end);

	var result = 0;
	if (begin < (dbegin.getTime() + time))
		result++;

	result += (dend - dbegin) / (24*60*60*1000) - 1;

	if (end > (dend.getTime() + time))
		result++;

	return result;
}

var moon =  $('<img class="icon" src="moon.png"  >');
var lunch = $('<img class="icon" src="lunch.png" >');
var sun =   $('<img class="icon" src="sun.png"   >');


