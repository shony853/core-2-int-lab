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
    newItem.classList.add(item.owner);

    // newItem.style.cssText = `font-size: ${usage}px`;
    newItem.innerHTML = `
      <div class="name">${item.name}</div>
      <div class="details">
        <!--commenting out <div class="image"><img src="assets/images/${item.img}.jpg"></div>-->
        <div class="name">${item.name}</div>
        <div class="owner">${item.owner}</div>
        <div class="type">${item.type}</div>
        <div class="brand">${item.brand}</div>
        <div class="year">${item.year}</div>
      </div>`;
    container.appendChild(newItem);    
    
    newItem.addEventListener('click', function(){
      console.log('click');
      newItem.classList.toggle('active');
    });
  });
}


