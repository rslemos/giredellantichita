var ib_6024 = {
	airline: 'Iberia',
	depart: {
		utc: new Date('2015-08-03T18:40:00.000-03:00'),
		at: rio_de_janeiro
	},
	arrival: {
		utc: new Date('2015-08-04T09:40:00.000+02:00'),
		at: madri
	},
	flight: 'IB 6024'
};

var ib_3232 = {
	airline: 'Iberia',
	depart: {
		utc: new Date('2015-08-04T12:05:00.000+02:00'),
		at: madri
	},
	arrival: {
		utc: new Date('2015-08-04T14:30:00.000+02:00'),
		at: fiumicino
	},
	flight: 'IB 3232'
};

var ib_3239 = {
	airline: 'Iberia',
	depart: {
		utc: new Date('2015-09-05T07:45:00.000+02:00'),
		at: fiumicino
	},
	arrival: {
		utc: new Date('2015-09-05T10:20:00.000+02:00'),
		at: madri
	},
	flight: 'IB 3239'
};

var ib_6025 = {
	airline: 'Iberia',
	depart: {
		utc: new Date('2015-09-05T11:50:00.000+02:00'),
		at: madri
	},
	arrival: {
		utc: new Date('2015-09-05T17:20:00.000-03:00'),
		at: rio_de_janeiro
	},
	flight: 'IB 6025'
};

var tk_1446 = {
	airline: 'Turkish',
	depart: {
		utc: new Date('2015-08-11T15:25:00.000+02:00'),
		at: bari
	},
	arrival: {
		utc: new Date('2015-08-11T18:25:00.000+03:00'),
		at: istambul
	},
	flight: 'TK 1446'
};

var kk_26 = {
	airline: 'Atlas Global',
	depart: {
		utc: new Date('2015-08-14T17:30:00.000+03:00'),
		at: istambul
	},
	arrival: {
		utc: new Date('2015-08-14T18:30:00.000+03:00'),
		at: esmirra
	},
	flight: 'KK 26'
};

var a3_997 = {
	airline: 'Aegean',
	depart: {
		utc: new Date('2015-08-16T15:55:00.000+03:00'),
		at: esmirra
	},
	arrival: {
		utc: new Date('2015-08-16T16:50:00.000+03:00'),
		at: atenas
	},
	flight: 'A3 997'
};

var v7_1491 = {
	airline: 'Volotea',
	depart: {
		utc: new Date('2015-08-19T22:20:00.000+03:00'),
		at: atenas
	},
	arrival: {
		utc: new Date('2015-08-19T23:40:00.000+02:00'),
		at: veneza
	},
	flight: 'V7 1491'
};

var roteiro = [

	{ departUTC : new Date('2015-08-03T18:40:00.000-03:00'),
	  arrivalUTC: new Date('2015-08-04T09:40:00.000+02:00'), bound: [madri],
	  by: ib_6024 },

	{ departUTC : new Date('2015-08-04T12:05:00.000+02:00'),
	  arrivalUTC: new Date('2015-08-04T14:30:00.000+02:00'), bound: [fiumicino],
	  by: ib_3232 },

	{ departUTC : new Date('2015-08-04T16:30:00.000+02:00'),
	  arrivalUTC: new Date('2015-08-04T17:00:00.000+02:00'), bound: [roma],
	  by: trem,
	  lodging: {
		property: {
			name: 'Hotel San Carlo',
			url: ['http://www.hotelsancarloroma.com/', 'http://www.booking.com/hotel/it/san-carlo-roma.html'],
			email: 'info@hotelsancarloroma.com',
			address: [
				'Via delle Carrozze 93',
				'Spagna'
			],
			zip: '00187',
			city: roma,
			phones: [
				'+39066784548'
			]
		},
		cost: 250,
		checkin: [new Date('20150804T12:00:00.000+02:00'), null],
		checkout: [null, new Date('20150806T12:00:00.000+02:00')]
	   }
	},
	
	{ departUTC : new Date('2015-08-06T08:45:00.000+02:00'),
	  arrivalUTC: new Date('2015-08-06T09:55:00.000+02:00'), bound: [nápoles, pompéia],
	  by: trem },
	
	{ departUTC : new Date('2015-08-06T18:00:00.000+02:00'),
	  arrivalUTC: new Date('2015-08-06T18:45:00.000+02:00'), bound: [anacapri, capri],
	  by: ferry,
	  lodging: {
		property: {
			name: 'Mediterraneo Guest House',
			url: ['http://www.mediterraneo-capri.com/', 'http://www.booking.com/hotel/it/hotelnapolimediterraneonapoli.html'],
			email: 'mediterraneo@capri.it',
			address: [
				'Via Caposcuro 12'
			],
			zip: '80071',
			city: anacapri,
			phones: [
				'+390818372907'
			]
		},
		cost: 280,
		checkin: [new Date('2015-08-06T14:00:00.000+02:00'), new Date('2015-08-06T20:00:00.000+02:00')],
		checkout: [new Date('2015-08-07T08:00:00.000+02:00'), new Date('2015-08-08T11:00:00.000+02:00')],
	  }
	},
	
	{ departUTC : new Date('2015-08-08T08:40:00.000+02:00'),
	  arrivalUTC: new Date('2015-08-08T09:10:00.000+02:00'), bound: [sorrento],
	  by: ferry },
	
	{ departUTC : new Date('2015-08-08T09:40:00.000+02:00'),
	  arrivalUTC: new Date('2015-08-08T14:30:00.000+02:00'), bound: [amalfi, salerno],
	  by: carro },
	
	{ departUTC : new Date('2015-08-08T15:00:00.000+02:00'),
	  arrivalUTC: new Date('2015-08-08T18:55:00.000+02:00'), bound: [lecce, otranto, galatina, gallipoli],
	  by: carro,
	  lodging: {
		property: {
			name: 'B&B Corte Dei Musco',
			url: ['http://www.bbcortedeimusco.it/', 'http://www.booking.com/hotel/it/b-b-corte-dei-musco.html'],
			email: 'info@bbcortedeimusco.it',
			address: [
				'Corte Dei Musco 3'
			],
			zip: '73100',
			city: lecce,
			phones: [
				'+393476627752'
			]
		},
		cost: 270,
		checkin: [new Date('20150808T14:00:00.000+02:00'), new Date('20150808T22:00:00.000+02:00')],
		checkout: [new Date('20150811T06:00:00.000+02:00'), new Date('20150811T10:00:00.000+02:00')]
	  }
	},
	
	{ departUTC : new Date('2015-08-11T13:00:00.000+02:00'),
	  arrivalUTC: new Date('2015-08-11T14:25:00.000+02:00'), bound: [bari],
	  by: carro },
	
	{ departUTC : new Date('2015-08-11T15:25:00.000+02:00'),
	  arrivalUTC: new Date('2015-08-11T18:25:00.000+03:00'), bound: [istambul],
	  by: tk_1446,
	  lodging: {
		property: {
			name: 'Emporium Hotel',
			url: ['http://www.emporiumhotelistanbul.com/', 'http://www.booking.com/hotel/tr/emporium.html'],
			email: 'info@emporiumhotelistanbul.com',
			address: [
				'Ordu Cad. No:11 Beyazıt',
				'Fatih'
			],
			zip: '34126',
			city: istambul,
			phones: [
				'+902125186262'
			]
		},
		cost: 252.45,
		checkin: [new Date('20150811T14:00:00.000+03:00'), null],
		checkout: [null, new Date('20150814T12:00:00.000+03:00')]
	  }
	},
	
	{ departUTC : new Date('2015-08-14T17:30:00.000+03:00'),
	  arrivalUTC: new Date('2015-08-14T18:30:00.000+03:00'), bound: [esmirra],
	  by: kk_26 },

	{ departUTC : new Date('2015-08-14T18:50:00.000+03:00'),
	  arrivalUTC: new Date('2015-08-14T19:50:00.000+03:00'), bound: [éfeso],
	  by: ônibus,
	  lodging: {
		property: {
			name: 'Hotel Canberra',
			url: ['http://www.hotelcanberra.net/', 'http://www.booking.com/hotel/tr/canberra-selassuk.html'],
			email: 'info@hotelcanberra.net',
			address: [
				'Atatürk Bulvari 1067',
				'Sok No 15'
			],
			zip: '35920',
			city: selçuk,
			phones: [
				'+902328927668'
			]
		},
		cost: 70,
		checkin: [new Date('20150814T14:00:00.000+03:00'), null],
		checkout: [null, new Date('20150816T11:30:00.000+03:00')]
	  }
	},

	{ departUTC : new Date('2015-08-16T13:40:00.000+03:00'),
	  arrivalUTC: new Date('2015-08-16T14:40:00.000+03:00'), bound: [esmirra],
	  by: ônibus },

	{ departUTC : new Date('2015-08-16T15:55:00.000+03:00'),
	  arrivalUTC: new Date('2015-08-16T16:50:00.000+03:00'), bound: [atenas],
	  by: a3_997,
	  lodging: {
		property: {
			name: 'Hotel Adonis',
			url: ['https://www.hotel-adonis.gr/', 'http://www.booking.com/hotel/gr/adonis-athens.html'],
			address: [
				'Kodrou 3',
				'Plaka'
			],
			zip: '10558',
			city: atenas,
			phones: [
				'+302103249737'
			]
		},
		cost: 285,
		checkin: [new Date('20150816T14:00:00.000+03:00'), null],
		checkout: [null, new Date('20150819T12:00:00.000+03:00')]
	  }
	},
	
	{ departUTC : new Date('2015-08-19T21:10:00.000+03:00'),
	  arrivalUTC: new Date('2015-08-19T22:30:00.000+02:00'), bound: [mestre, veneza, pádua, milão],
	  by: v7_1491,
	  lodging: {
		property: {
			name: 'Hotel San Zulian',
			url: ['http://www.hotelsanzulian.com/', 'http://www.booking.com/hotel/it/sanzulian.html'],
			email: 'desk@hotelsanzulian.com',
			address: [
				'San Marco 527',
				'San Marco'
			],
			zip: '30124',
			city: veneza,
			phones: [
				'+390415225872'
			]
		},
		cost: 715,
		checkin: [new Date('20150819T13:00:00.000+02:00'), null],
		checkout: [null, new Date('20150824T11:00:00.000+02:00')]
	  }
	},
	
	{ departUTC : new Date('2015-08-24T19:44:00.000+02:00'),
	  arrivalUTC: new Date('2015-08-24T20:44:00.000+02:00'), bound: [florença, pisa, livorno, viareggio, san_gimignano],
	  by: trem,
	  lodging: {
		property: {
			name: 'Hotel Delle Nazioni',
			url: ['http://www.hoteldellenazioniflorence.com/', 'http://www.booking.com/hotel/it/hoteldellenazionifirenze.html'],
			address: [
				'Via Luigi Alamanni 15',
				'Santa Maria Novella'
			],
			zip: '50123',
			city: florença,
			phones: [
				'+39055283575'
			]
		},
		cost: 597.60,
		checkin: [new Date('20150824T14:00:00.000+02:00'), null],
		checkout: [null, new Date('20150830T12:00:00.000+02:00')]
	  }
	},
	
	{ departUTC : new Date('2015-08-30T08:00:00.000+02:00'),
	  arrivalUTC: new Date('2015-08-30T10:10:00.000+02:00'), bound: [assis],
	  by: trem },
	
	{ departUTC : new Date('2015-08-30T18:20:00.000+02:00'),
	  arrivalUTC: new Date('2015-08-30T20:44:00.000+02:00'), bound: [roma, frascati, vaticano],
	  by: trem,
	  lodging: {
		property: {
			name: 'Hotel Tritone Rome',
			url: ['http://www.tritonehotel.com/', 'http://www.booking.com/hotel/it/hoteltritoneroma.html'],
			address: [
				'Via del Tritone 210',
				'Trevi'
			],
			zip: '00187',
			city: roma,
			phones: [
				'+390669922575'
			]
		},
		cost: 780,
		checkin: [new Date('20150830T14:00:00.000+02:00'), null],
		checkout: [null, new Date('20150904T12:00:00.000+02:00')] 
	  }
	},

	{ departUTC : new Date('2015-09-04T13:00:00.000+02:00'),
	  arrivalUTC: new Date('2015-09-04T13:30:00.000+02:00'), bound: [fiumicino],
	  by: trem,
	  lodging: {
		property: {
			name: 'Metropolis Rooms&Services',
			url: ['http://www.booking.com/hotel/it/metropolis-rooms-amp-service.html'],
			address: [
				'Via della Scafa 144/A'
			],
			zip: '00054',
			city: fiumicino,
			phones: [
				'+390665029675'
			]
		},
		cost: 80,
		checkin: [new Date('20150904T15:00:00.000+02:00'), new Date('20150904T23:00:00.000+02:00')],
		checkout: [new Date('20150905T08:00:00.000+02:00'), new Date('20150905T11:00:00.000+02:00')]
	  }
	},

	{ departUTC : new Date('2015-09-05T07:45:00.000+02:00'),
	  arrivalUTC: new Date('2015-09-05T10:20:00.000+02:00'), bound: [madri],
	  by: ib_3239 },

	{ departUTC : new Date('2015-09-05T11:50:00.000+02:00'),
	  arrivalUTC: new Date('2015-09-05T17:20:00.000-03:00'), bound: [rio_de_janeiro],
	  by: ib_6025 },
];