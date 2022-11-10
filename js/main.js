// Exemple d'appel JS pour récupérer des données météo :
//
fetch("https://api.meteo-concept.com/api/forecast/daily?token=a352bbb36f25dcddce2c190e489e6a9b2b3f7677966a9380a873a8a879851903&insee=73005").then((resp) => {
  return resp.json();
}).then((data) => {
  console.log('data: ' + JSON.stringify(data));
  var city = data.city.name;


  console.log("city= "+ city);

});

