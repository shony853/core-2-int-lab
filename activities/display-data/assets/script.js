let container = document.getElementById("container");

fetch('./assets/emoji.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    displayData(data);
  })