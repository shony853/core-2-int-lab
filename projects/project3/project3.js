const aboutElement = document.querySelector(".about");
const aboutDetailElement = document.querySelector(".aboutdetail");
const geoplaceElement = document.querySelector(".geoplace");
const outputNameElement = document.querySelector(".output_name");
const detailElement = document.querySelector(".detail")
aboutElement.addEventListener("click", () => {
  aboutDetailElement.style.display = aboutDetailElement.style.display === "none" ? "block" : "none";
  detailElement.style.display = "none";
});

const appToken = "sEEOQS7Ai1EdS0XHVlDTsf53W";
const cdUrl = `https://data.cityofnewyork.us/resource/c3uy-2p5r.json?time_period=Summer 2020&geo_type_name=CD&$select=geo_place_name`;
const boroughUrl = `https://data.cityofnewyork.us/resource/c3uy-2p5r.json?time_period=Summer 2020&geo_type_name=Borough&$select=geo_place_name`;
const citywideUrl = `https://data.cityofnewyork.us/resource/c3uy-2p5r.json?time_period=Summer 2020&geo_type_name=Citywide&$select=geo_place_name`;
const allData = `https://data.cityofnewyork.us/resource/c3uy-2p5r.json?time_period=Summer 2020&name=Ozone (O3)`;


let localData;


geoplaceElement.addEventListener("click", () => {
  detailElement.style.display = "block";
  outputNameElement.style.display = "block";
  aboutDetailElement.style.display = "none";
});
// const outputGeoplacenameElement = document.querySelector(".output_geoplacename");



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
let city = {};
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
        city[ record.geo_place_name ] = record.data_value;
      }
    });

    console.log(boroughs);
    console.log(districts);
    console.log(city);
  });
}

const max = 33.51;
const min = 25.56;
const outputContainer = document.querySelector('.output_datavalue');
cdElement.addEventListener("click", () => {
  // displayGeoPlaceName(boroughUrl);
  geoplaceElement.innerHTML = "";
  for (const cd in districts){
    let newItem = document.createElement("div");
    newItem.classList.add("cd-option");
    newItem.innerText = cd;

    geoplaceElement.appendChild( newItem );
    newItem.addEventListener('click', function(){
      let geoplaceName = document.querySelector(".output_geoplacename");
      geoplaceName.innerHTML= cd;
      let value = districts[cd];
      outputContainer.innerText = value;
      let ratio = (parseFloat(value)-min) / (max - min);
      let weight = Math.round(1 + ratio*899);
      console.log(weight);
      outputContainer.style.setProperty('--wght', weight);
    });
  }
});
boroughElement.addEventListener("click", () => {
  // displayGeoPlaceName(boroughUrl);
  geoplaceElement.innerHTML = "";
  for (const borough in boroughs){
    let newItem = document.createElement("div");
    newItem.classList.add("borough-option");
    newItem.innerText = borough;
    geoplaceElement.appendChild( newItem );
    newItem.addEventListener('click', function(){
      let geoplaceName = document.querySelector(".output_geoplacename");
      geoplaceName.innerHTML= borough;

      let value = boroughs[borough];
      outputContainer.innerText = value;
      let ratio = (parseFloat(value)-min) / (max - min);
      let weight = Math.round(1 + ratio*899);
      console.log(weight);
      outputContainer.style.setProperty('--wght', weight);
    });
  }
});
citywideElement.addEventListener("click", () => {
  // displayGeoPlaceName(boroughUrl);
  geoplaceElement.innerHTML = "";
  for (const citywide in city){
    let newItem = document.createElement("div");
    newItem.classList.add("citywide-option");
    newItem.innerText = citywide;
    geoplaceElement.appendChild( newItem );
    newItem.addEventListener('click', function(){
      let geoplaceName = document.querySelector(".output_geoplacename");
      geoplaceName.innerHTML= citywide;
      let value = city[citywide];
      outputContainer.innerText = value;
      let ratio = (parseFloat(value)-min) / (max - min);
      let weight = Math.round(1 + ratio*899);
      console.log(weight);
      outputContainer.style.setProperty('--wght', weight);
    });
  }
});




