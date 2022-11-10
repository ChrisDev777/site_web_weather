// Exemple d'appel JS pour récupérer des données météo :
//
let wheatherCode =  [
  "Soleil",
  "Peu nuageux",
  "Ciel voilé",
  "Nuageux",
  "Très nuageux",
  "Couvert",
  "Brouillard",
  "Brouillard givrant",
  "Pluie faible",
  "Pluie modérée",
  "Pluie forte",
  "Pluie faible verglaçante",
  "Pluie modérée verglaçante",
  "Pluie forte verglaçante",
  "Bruine",
  "Neige faible",
  "Neige modérée",
  "Neige forte",
  "Pluie et neige mêlées faibles",
  "Pluie et neige mêlées modérées",
  "Pluie et neige mêlées fortes",
  "Averses de pluie locales et faibles",
  "Averses de pluie locales",
  "Averses locales et fortes",
  "Averses de pluie faibles",
  "Averses de pluie",
  "Averses de pluie fortes",
  "Averses de pluie faibles et fréquentes",
  "Averses de pluie fréquentes",
  "Averses de pluie fortes et fréquentes",
  "Averses de neige localisées et faibles",
  "Averses de neige localisées",
  "Averses de neige localisées et fortes",
  "Averses de neige faibles",
  "Averses de neige",
  "Averses de neige fortes",
  "Averses de neige faibles et fréquentes",
  "Averses de neige fréquentes",
  "Averses de neige fortes et fréquentes",
  "Averses de pluie et neige mêlées localisées et faibles",
  "Averses de pluie et neige mêlées localisées",
  "Averses de pluie et neige mêlées localisées et fortes",
  "Averses de pluie et neige mêlées faibles",
  " Averses de pluie et neige mêlées",
  "Averses de pluie et neige mêlées fortes",
  "Averses de pluie et neige mêlées faibles et nombreuses",
  "Averses de pluie et neige mêlées fréquentes",
  "Averses de pluie et neige mêlées fortes et fréquentes",
  "Orages faibles et locaux",
  "Orages locaux",
  "Orages fort et locaux",
  "Orages faibles",
  "Orages",
  "Orages forts",
  " Orages faibles et fréquents",
  "Orages fréquents",
  "Orages forts et fréquents",
  "Orages faibles et locaux de neige ou grésil",
  "Orages locaux de neige ou grésil",
  "Orages locaux de neige ou grésil",
  "Orages faibles de neige ou grésil",
  "Orages de neige ou grésil",
  "Orages de neige ou grésil",
  "Orages faibles et fréquents de neige ou grésil",
  "Orages fréquents de neige ou grésil",
  "Orages fréquents de neige ou grésil",
  "Orages faibles et locaux de pluie et neige mêlées ou grésil",
  "Orages locaux de pluie et neige mêlées ou grésil",
  "Orages fort et locaux de pluie et neige mêlées ou grésil",
  "Orages faibles de pluie et neige mêlées ou grésil",
  "Orages de pluie et neige mêlées ou grésil",
  "Orages forts de pluie et neige mêlées ou grésil",
  "Orages faibles et fréquents de pluie et neige mêlées ou grésil",
  "Orages fréquents de pluie et neige mêlées ou grésil",
  "Orages forts et fréquents de pluie et neige mêlées ou grésil",
  "Pluies orageuses",
  "Pluie et neige mêlées à caractère orageux",
  "Neige à caractère orageux",
  "Pluie faible intermittente",
  "Pluie modérée intermittente",
  "Pluie forte intermittente",
  "Neige faible intermittente",
  "Neige modérée intermittente",
  "Neige forte intermittente",
  "Pluie et neige mêlées",
  "Pluie et neige mêlées",
  "Pluie et neige mêlées",
  "Averses de grêle"];


fetch("https://api.meteo-concept.com/api/forecast/daily/0?token=a352bbb36f25dcddce2c190e489e6a9b2b3f7677966a9380a873a8a879851903&latlng=45.720019147689136,6.253936236194966").then((resp) => {
  return resp.json();
}).then((data) => {
  console.log('data: ' + JSON.stringify(data));
  var city = "Refuge de la Servaz";
  var tempMin = data.forecast.tmin;
  var tempMax = data.forecast.tmax;
  var weather = data.forecast.weather;

  var convertWeatherCode = wheatherCode[weather];

  let title = document.querySelector(".card-title");
  let w = document.querySelector("#weather");
  let maxt = document.querySelector("#tmax");
  let mint = document.querySelector("#tmin");

  title.innerHTML = city;
  w.innerHTML = "Temps: " + convertWeatherCode;
  maxt.innerHTML = "Plus haute Temperature: " + tempMax + " degrés";
  mint.innerHTML = "Plus basse Temperature: " + tempMin + " degrés";


});

fetch("https://api.meteo-concept.com/api/forecast/daily/0?token=a352bbb36f25dcddce2c190e489e6a9b2b3f7677966a9380a873a8a879851903&latlng=45.755970983017846,6.166909761456816").then((resp) => {
  return resp.json();
}).then((data) => {
  console.log('data: ' + JSON.stringify(data));
  var city = 'Roc des Boeufs';
  var tempMin = data.forecast.tmin;
  var tempMax = data.forecast.tmax;
  var weather = data.forecast.weather;

  var convertWeatherCode = wheatherCode[weather];

  let title = document.querySelector(".card-title1");
  let w = document.querySelector("#weather1");
  let maxt = document.querySelector("#tmax1");
  let mint = document.querySelector("#tmin1");

  title.innerHTML = city;
  w.innerHTML = "Temps: " + convertWeatherCode;
  maxt.innerHTML = "Plus haute Temperature: " + tempMax + " degrés";
  mint.innerHTML = "Plus basse Temperature: " + tempMin + " degrés";

});

fetch("https://api.meteo-concept.com/api/forecast/daily/0?token=a352bbb36f25dcddce2c190e489e6a9b2b3f7677966a9380a873a8a879851903&latlng=45.567388639634096,6.066727306183258").then((resp) => {
  return resp.json();
}).then((data) => {
  console.log('data: ' + JSON.stringify(data));
  var city = 'Point de la Gallopaz';
  var tempMin = data.forecast.tmin;
  var tempMax = data.forecast.tmax;
  var weather = data.forecast.weather;

  var convertWeatherCode = wheatherCode[weather];

  let title = document.querySelector(".card-title2");
  let w = document.querySelector("#weather2");
  let maxt = document.querySelector("#tmax2");
  let mint = document.querySelector("#tmin2");
  console.log(title);
  title.innerHTML = city;
  w.innerHTML = "Temps: " + convertWeatherCode;
  maxt.innerHTML = "Plus haute Temperature: " + tempMax + " degrés";
  mint.innerHTML = "Plus basse Temperature: " + tempMin + " degrés";

});


fetch("https://api.meteo-concept.com/api/forecast/daily/0?token=a352bbb36f25dcddce2c190e489e6a9b2b3f7677966a9380a873a8a879851903&latlng=45.61473633696678,5.965739592698296").then((resp) => {
  return resp.json();
}).then((data) => {
  console.log('data: ' + JSON.stringify(data));
  var city = 'Croix du Nivolet';
  var tempMin = data.forecast.tmin;
  var tempMax = data.forecast.tmax;
  var weather = data.forecast.weather;

  var convertWeatherCode = wheatherCode[weather];

  let title = document.querySelector(".card-title3");
  let w = document.querySelector("#weather3");
  let maxt = document.querySelector("#tmax3");
  let mint = document.querySelector("#tmin3");
  console.log(title);
  title.innerHTML = city;
  w.innerHTML = "Temps: " + convertWeatherCode;
  maxt.innerHTML = "Plus haute Temperature: " + tempMax + " degrés";
  mint.innerHTML = "Plus basse Temperature: " + tempMin + " degrés";

});

fetch("https://api.meteo-concept.com/api/forecast/daily/0?token=a352bbb36f25dcddce2c190e489e6a9b2b3f7677966a9380a873a8a879851903&latlng=45.68691854206205,6.020031627600368").then((resp) => {
  return resp.json();
}).then((data) => {
  console.log('data: ' + JSON.stringify(data));
  var city = 'Croix des Bergers';
  var tempMin = data.forecast.tmin;
  var tempMax = data.forecast.tmax;
  var weather = data.forecast.weather;
  var h = data.forecast.datetime;

  var convertWeatherCode = wheatherCode[weather];

  let title = document.querySelector(".card-title4");
  let w = document.querySelector("#weather4");
  let maxt = document.querySelector("#tmax4");
  let mint = document.querySelector("#tmin4");
  console.log(title);
  title.innerHTML = city;
  w.innerHTML = "Temps: " + convertWeatherCode;
  maxt.innerHTML = "Plus haute Temperature: " + tempMax + " degrés";
  mint.innerHTML = h;

});
