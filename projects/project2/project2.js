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
      <div class="name">${item.name}</div>
      <div class="details">
        <div class="image"><img src="assets/images/${item.img}.png"></div>
        <div class="text">
        <div class="name"><span class="name">${item.name}</span></div>
        <div class="owner">Owned by: ${item.owner}</div>
        <div class="type">Type: ${item.type}</div>
        <div class="brand">Brand: ${item.brand}</div>
        <div class="year">Year of Release: ${item.year}</div>
        <div class="year">Notes: ${item.notes.replaceAll("\n", "<br>")}</div>
        </div>
      </div>`;
    container.appendChild(newItem);    
    
    newItem.addEventListener('click', function(){
      console.log('click');
      newItem.classList.toggle('active');
    });
  });

  
}


