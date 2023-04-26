const appToken = "sEEOQS7Ai1EdS0XHVlDTsf53W";
const boroughUrl = `https://data.cityofnewyork.us/resource/c3uy-2p5r.json?geo_type_name=Borough&$select=geo_place_name`;
const citywideUrl = `https://data.cityofnewyork.us/resource/c3uy-2p5r.json?geo_type_name=Citywide&$select=geo_place_name`;

const geoplaceElement = document.querySelector(".geoplace");
const cdLabelElement = document.querySelector(".cdlabel");

function displayGeoPlaceName(url) {
  fetch(url, { headers: { "X-App-Token": appToken } })
    .then(response => response.json())
    .then(data => {
      // Extract unique geo place names
      const uniqueGeoPlaceNames = [...new Set(data.map(item => item.geo_place_name))];
      // Create HTML for geo place names
      const geoPlaceNameHtml = uniqueGeoPlaceNames.map(name => `<p>${name}</p>`).join("");
      // Display HTML in geoplaceElement
      geoplaceElement.innerHTML = geoPlaceNameHtml;
    })
    .catch(error => console.error(error));
}

const boroughElement = document.querySelector(".borough");
boroughElement.addEventListener("click", () => displayGeoPlaceName(boroughUrl));

const citywideElement = document.querySelector(".citywide");
citywideElement.addEventListener("click", () => displayGeoPlaceName(citywideUrl));

const cdElement = document.querySelector(".cd");
cdElement.addEventListener("click", () => {
  cdLabelElement.style.display = "block";
});
