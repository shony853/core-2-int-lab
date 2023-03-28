fetch('project2.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    processData(data);

  })
  .catch(error => console.log(error));


function sayHello(){
  console.log('Hello');
}

sayHello();

function processData( data ){
  data.forEach( function(item, index){
    console.log(item, index);
    let newItem = document.createElement("div");
    newItem.classList.add("fragrance");
    newItem.classList.add(item.owner.toLowerCase());

    // newItem.style.cssText = `font-size: ${usage}px`;
    newItem.innerHTML = `
      <div class="name title">${item.name}</div>
      <div class="details">
        <div class="image">
          <img src="assets/images/${item.img}.png">
        </div>
        <div class="info">
          <div class="name"><span class="name">${item.name.replaceAll("\n", "<br>")}</span></div>
          <div class="text">
            <div class="withoutnotes">
              <div class="owner"><span class="label">Owned by </span> ${item.owner}</div>
              <div class="type"><span class="label">Type </span> ${item.type}</div>
              <div class="brand"><span class="label">Brand </span> ${item.brand}</div>
              <div class="year"><span class="label">Year of Release </span> ${item.year}</div>
            </div>
            <div class="notes">
              <div class="notes"><span class="label">Notes </span>${item.notes.replaceAll("\n", "<br>")}</div>
            </div>
          </div>
          <h3> 
          Designed by Jenna Shon <br> 
          Parsons School of Design 2023
          </h3>
      </div>`;
    
     

    container.appendChild(newItem);    
    newItem.addEventListener('click', function(){
      console.log('click');
      newItem.classList.toggle('active');
    });
  });
  
}
