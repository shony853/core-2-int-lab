const appToken = "sEEOQS7Ai1EdS0XHVlDTsf53W";
const url = "https://data.cityofnewyork.us/resource/c3uy-2p5r.json?geo_type_name=CD&$select=geo_place_name";

const geoplaceElement = document.querySelector(".geoplace");

fetch(url, { headers: { "X-App-Token": appToken } })
  .then(response => response.json())
  .then(data => {
    const geoPlaceNames = data.map(item => item.geo_place_name);
    geoplaceElement.textContent = geoPlaceNames.join(", ");
  })
  .catch(error => console.error(error));
