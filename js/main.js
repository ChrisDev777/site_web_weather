// Exemple d'appel JS pour récupérer des données météo :
//
fetch("https://api.meteo-concept.com/api/forecast/daily/0?token=a352bbb36f25dcddce2c190e489e6a9b2b3f7677966a9380a873a8a879851903&insee=73005").then((resp) => {
  return resp.json();
}).then((data) => {
  console.log('data: ' + JSON.stringify(data));
  var city = data.city.name;
  var tempMin = data.forecast.tmin;
  var tempMax = data.forecast.tmax;

  console.log("city= "+ city);
  console.log("tMin= "+ tempMin);


  var body = document.body;
  var meteoDiv = document.createElement("div");
  meteoDiv.innerHTML = city;
  body.appendChild(meteoDiv);
});



