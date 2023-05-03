const aboutElement = document.querySelector(".about");
const aboutDetailElement = document.querySelector(".aboutdetail");

aboutElement.addEventListener("click", () => {
  aboutDetailElement.style.display = aboutDetailElement.style.display === "none" ? "block" : "none";
});

const appToken = "sEEOQS7Ai1EdS0XHVlDTsf53W";
const cdUrl = `https://data.cityofnewyork.us/resource/c3uy-2p5r.json?time_period=Summer 2020&geo_type_name=CD&$select=geo_place_name`;
const boroughUrl = `https://data.cityofnewyork.us/resource/c3uy-2p5r.json?time_period=Summer 2020&geo_type_name=Borough&$select=geo_place_name`;
const citywideUrl = `https://data.cityofnewyork.us/resource/c3uy-2p5r.json?time_period=Summer 2020&geo_type_name=Citywide&$select=geo_place_name`;
const allData = `https://data.cityofnewyork.us/resource/c3uy-2p5r.json?time_period=Summer 2020`;

let localData;
const geoplaceElement = document.querySelector(".geoplace");
const outputGeoplacenameElement = document.querySelector(".output_geoplacename");

function displayGeoPlaceName(url) {
  fetch(url, { headers: { "X-App-Token": appToken } })
    .then(response => response.json())
    .then(data => {
      geoplaceElement.innerHTML = "";
      data.forEach(item => {
        const placeElement = document.createElement("div");
        placeElement.classList.add("geoplacename");
        placeElement.textContent = item.geo_place_name;
        placeElement.addEventListener("click", () => {
          outputGeoplacenameElement.textContent = item.geo_place_name;
        });
        geoplaceElement.appendChild(placeElement);
      });
    });
}

displayGeoPlaceName(cdUrl);

const cdElement = document.querySelector(".cd");
const boroughElement = document.querySelector(".borough");
const citywideElement = document.querySelector(".citywide");

cdElement.addEventListener("click", () => {
  displayGeoPlaceName(cdUrl);
});

boroughElement.addEventListener("click", () => {
  displayGeoPlaceName(boroughUrl);
});

citywideElement.addEventListener("click", () => {
  displayGeoPlaceName(citywideUrl);
});
