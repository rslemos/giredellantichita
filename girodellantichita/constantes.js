var brasil = { names: ['Brasil'] };
var russia = { names: ['Rússia'] };
var holanda = { names: ['Holanda'] };
var franca = { names: ['França'] };

var italia = { names: ['Itália', 'Italy', 'Italia', 'Ιταλία', 'İtalya', 'Italie', 'Italien']};
var turquia = { names: ['Turquia', 'Turkey', 'Turchia', 'Τουρκία', 'Türkiye', 'Turquie', 'Turquía', 'Türkei']};
var grecia = { names: ['Grécia', 'Greece', 'Grecia', 'Ελλάδα', 'Yunanistan', 'Grèce', 'Griechenland']};
var espanha = { names: ['Espanha'] };

var rio_de_janeiro = { name: 'Rio de Janeiro', timezoneOffset: -180, coordinates: { latitude: -22.908, longitude: -43.196 }, country: brasil  };
var amsterdam      = { name: 'Amsterdã',       timezoneOffset: +120, coordinates: { latitude: +52.367, longitude:  +4.9   }, country: holanda, names: ['Amsterdã'] };
var moscou         = { name: 'Moscou',         timezoneOffset: +180, coordinates: { latitude: +55.750, longitude: +37.617 }, country: russia, names: ['Moscou'] };

var novgorod       = { name: 'Veliky Novgorod',timezoneOffset: +180, coordinates: { latitude: +58.550, longitude: +31.267 }, country: russia, names: ['Veliky Novgorod'] };

var sergievposad   = { name: 'Sergiev Posad',  timezoneOffset: +180, coordinates: {                                       }, country: russia, names: ['Sergiev Posad'] };
var rostov         = { name: 'Rostov'       ,  timezoneOffset: +180, coordinates: {                                       }, country: russia, names: ['Rostov'] };
var yaroslav       = { name: 'Yaroslav'     ,  timezoneOffset: +180, coordinates: {                                       }, country: russia, names: ['Yaroslav'] };
var kostroma       = { name: 'Kostroma'     ,  timezoneOffset: +180, coordinates: {                                       }, country: russia, names: ['Kostroma'] };
var suzdal         = { name: 'Suzdal'       ,  timezoneOffset: +180, coordinates: {                                       }, country: russia, names: ['Suzdal'] };
var vladimir       = { name: 'Vladimir'     ,  timezoneOffset: +180, coordinates: {                                       }, country: russia, names: ['Vladimir'] };

var petersburgo    = { name: 'São Petersburgo',timezoneOffset: +180, coordinates: { latitude: +59.950, longitude: +30.3   }, country: russia, names: ['São Petersburgo'] };
var paris          = { name: 'Paris',          timezoneOffset: +120, coordinates: { latitude: +48.857, longitude:  +2.351 }, country: franca, names: ['Paris'] };



var madri          = { name: 'Madri'         , timezoneOffset: +120, coordinates: { latitude: +40.383, longitude:  -3.717 }, country: espanha };
var fiumicino      = { name: 'Fiumicino'     , timezoneOffset: +120, coordinates: { latitude: +41.766, longitude: +12.233 }, country: italia , names: ['Fiumicino'] };
var roma           = { name: 'Roma'          , timezoneOffset: +120, coordinates: { latitude: +41.9  , longitude: +12.5   }, country: italia , names: ['Roma', 'Rome', 'Ρώμη', 'Rom'] };
var frascati       = { name: 'Frascati'      , timezoneOffset: +120, coordinates: { latitude: +41.816, longitude: +12.683 }, country: italia  };
var vaticano       = { name: 'Vaticano'      , timezoneOffset: +120, coordinates: { latitude: +41.903, longitude: +12.453 }, country: italia  };
var nápoles        = { name: 'Nápoles'       , timezoneOffset: +120, coordinates: { latitude: +40.845, longitude: +14.258 }, country: italia  };
var anacapri       = { name: 'Anacapri'      , timezoneOffset: +120, coordinates: { latitude: +40.55 , longitude: +14.216 }, country: italia , names: ['Anacapri'] };
var capri          = { name: 'Capri'         , timezoneOffset: +120, coordinates: { latitude: +40.55 , longitude: +14.25  }, country: italia  };
var sorrento       = { name: 'Sorrento'      , timezoneOffset: +120, coordinates: { latitude: +40.626, longitude: +14.376 }, country: italia  };
var amalfi         = { name: 'Amalfi'        , timezoneOffset: +120, coordinates: { latitude: +40.633, longitude: +14.6   }, country: italia  };
var salerno        = { name: 'Salerno'       , timezoneOffset: +120, coordinates: { latitude: +40.683, longitude: +14.766 }, country: italia  };
var pompéia        = { name: 'Pompéia'       , timezoneOffset: +120, coordinates: { latitude: +40.75 , longitude: +14.486 }, country: italia  };
var assis          = { name: 'Assis'         , timezoneOffset: +120, coordinates: { latitude: +43.075, longitude: +12.617 }, country: italia  };
var san_gimignano  = { name: 'San Gimignano' , timezoneOffset: +120, coordinates: { latitude: +43.468, longitude: +11.042 }, country: italia  };
var florença       = { name: 'Florença'      , timezoneOffset: +120, coordinates: { latitude: +43.783, longitude: +11.25  }, country: italia , names: ['Florença', 'Florence', 'Firenze', 'Φλωρεντία', 'Floransa', 'Florencia'] };
var pisa           = { name: 'Pisa'          , timezoneOffset: +120, coordinates: { latitude: +43.716, longitude: +10.4   }, country: italia  };
var livorno        = { name: 'Livorno'       , timezoneOffset: +120, coordinates: { latitude: +43.55 , longitude: +10.316 }, country: italia  };
var viareggio      = { name: 'Viareggio'     , timezoneOffset: +120, coordinates: { latitude: +43.866, longitude: +10.233 }, country: italia  };
var mestre         = { name: 'Mestre'        , timezoneOffset: +120, coordinates: { latitude: +45.490, longitude: +12.238 }, country: italia  };
var veneza         = { name: 'Veneza'        , timezoneOffset: +120, coordinates: { latitude: +45.437, longitude: +12.335 }, country: italia , names: ['Veneza', 'Venice', 'Venezia', 'Βενετία', 'Venedik', 'Venise', 'Venecia', 'Venedig'] };
var pádua          = { name: 'Pádua'         , timezoneOffset: +120, coordinates: { latitude: +45.416, longitude: +11.866 }, country: italia  };
var milão          = { name: 'Milão'         , timezoneOffset: +120, coordinates: { latitude: +45.466, longitude:  +9.183 }, country: italia  };
var brindisi       = { name: 'Brindisi'      , timezoneOffset: +120, coordinates: { latitude: +40.633, longitude: +17.933 }, country: italia  };
var lecce          = { name: 'Lecce'         , timezoneOffset: +120, coordinates: { latitude: +40.35 , longitude: +18.166 }, country: italia , names: ['Lecce'] };
var otranto        = { name: 'Otranto'       , timezoneOffset: +120, coordinates: { latitude: +40.15 , longitude: +18.483 }, country: italia  };
var galatina       = { name: 'Galatina'      , timezoneOffset: +120, coordinates: { latitude: +40.166, longitude: +18.166 }, country: italia  };
var gallipoli      = { name: 'Gallipoli'     , timezoneOffset: +120, coordinates: { latitude: +40.066, longitude: +18.05  }, country: italia  };
var bari           = { name: 'Bari'          , timezoneOffset: +120, coordinates: { latitude: +41.125, longitude: +16.866 }, country: italia  };
var patras         = { name: 'Patras'        , timezoneOffset: +180, coordinates: { latitude: +38.25 , longitude: +21.733 }, country: grecia  };
var atenas         = { name: 'Atenas'        , timezoneOffset: +180, coordinates: { latitude: +37.966, longitude: +23.716 }, country: grecia , names: ['Atenas', 'Athens', 'Atene', 'Αθήνα', 'Atina', 'Athènes', 'Athen'] };
var esmirra        = { name: 'Esmirra'       , timezoneOffset: +180, coordinates: { latitude: +38.422, longitude: +27.129 }, country: turquia };
var éfeso          = { name: 'Éfeso'         , timezoneOffset: +180, coordinates: { latitude: +37.941, longitude: +27.341 }, country: turquia, names: ['Éfeso', 'Ephesus', 'Efeso', 'Έφεσο', 'Efes', 'Ephèse'] };
var selçuk         = { name: 'Selçuk'        , timezoneOffset: +180, coordinates: { latitude: +37.95,  longitude: +27.367 }, country: turquia, names: ['Selçuk', 'Σελτσούκ'] };
var istambul       = { name: 'Istambul'      , timezoneOffset: +180, coordinates: { latitude: +41.013, longitude: +28.955 }, country: turquia, names: ['Istambul', 'Istanbul', 'Κωνσταντινούπολη', 'İstanbul', 'Estanbul'] };

var avião          = 'Avião';
var trem           = 'Trem';
var carro          = 'Carro';
var ferry          = 'Ferry';
var ônibus         = 'Ônibus';

