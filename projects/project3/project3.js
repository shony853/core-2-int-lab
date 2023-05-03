const aboutElement = document.querySelector(".about");
const aboutDetailElement = document.querySelector(".aboutdetail");

aboutElement.addEventListener("click", () => {
  aboutDetailElement.style.display = aboutDetailElement.style.display === "none" ? "block" : "none";
});

const appToken = "sEEOQS7Ai1EdS0XHVlDTsf53W";
const cdUrl = `https://data.cityofnewyork.us/resource/c3uy-2p5r.json?time_period=Summer 2020&geo_type_name=CD&$select=geo_place_name`;
const boroughUrl = `https://data.cityofnewyork.us/resource/c3uy-2p5r.json?time_period=Summer 2020&geo_type_name=Borough&$select=geo_place_name`;
const citywideUrl = `https://data.cityofnewyork.us/resource/c3uy-2p5r.json?time_period=Summer 2020&geo_type_name=Citywide&$select=geo_place_name`;
const allData = `https://data.cityofnewyork.us/resource/c3uy-2p5r.json?time_period=Summer 2020&name=Ozone (O3)`;


let localData;
const geoplaceElement = document.querySelector(".geoplace");
const outputGeoplacenameElement = document.querySelector(".output_geoplacename");

// function displayGeoPlaceName(url) {
//   fetch(url, { headers: { "X-App-Token": appToken } })
//     .then(response => response.json())
//     .then(data => {
//       geoplaceElement.innerHTML = "";
//       data.forEach(item => {
//         const placeElement = document.createElement("div");
//         placeElement.classList.add("geoplacename");
//         placeElement.textContent = item.geo_place_name;
//         placeElement.addEventListener("click", () => {
//           outputGeoplacenameElement.textContent = item.geo_place_name;
//         });
//         geoplaceElement.appendChild(placeElement);
//       });

//     });
// }

// displayGeoPlaceName(cdUrl);

const cdElement = document.querySelector(".cd");
const boroughElement = document.querySelector(".borough");
const citywideElement = document.querySelector(".citywide");

// cdElement.addEventListener("click", () => {
//   displayGeoPlaceName(cdUrl);
// });



// citywideElement.addEventListener("click", () => {
//   displayGeoPlaceName(citywideUrl);
// });

let boroughs = {};
let districts = {};
let citywide = 0;
parseData();
function parseData(){
  fetch(allData, { headers: { "X-App-Token": appToken } })
    .then(response => response.json())
    .then(data => {
    console.log(data);
    data.forEach(record=>{
      if( record.geo_type_name == 'Borough'){
        boroughs[ record.geo_place_name ] = record.data_value;
      }
      if( record.geo_type_name == 'CD'){
        districts[ record.geo_place_name ] = record.data_value;
      }
      if( record.geo_type_name == 'Citywide'){
        citywide = record.data_value;
      }
    });

    console.log(boroughs);
    console.log(districts);
    console.log(citywide);
  });
}

const max = 33.51;
const min = 25.56;
const outputContainer = document.querySelector('.output_datavalue');
boroughElement.addEventListener("click", () => {
  // displayGeoPlaceName(boroughUrl);
  for (const borough in boroughs){
    let newItem = document.createElement("div");
    newItem.classList.add("borough-option");
    newItem.innerText = borough;
    geoplaceElement.appendChild( newItem );
    newItem.addEventListener('click', function(){
      let value = boroughs[borough];
      outputContainer.innerText = value;
      let ratio = (parseFloat(value)-min) / (max - min);
      let weight = Math.round(1 + ratio*899);
      console.log(weight);
      outputContainer.style.setProperty('--wght', weight);
    });
  }
});

