fetch('project2.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    processData(data);
  })
  .catch(error => console.log(error));

function sayHello() {
  console.log('Hello');
}

sayHello();

function processData(data) {
  data.forEach(function (item, index) {
    console.log(item, index);
    let newItem = document.createElement('div');
    newItem.classList.add('fragrance');
    newItem.classList.add(item.owner.toLowerCase());

    newItem.innerHTML = `
      <div class="name title">${item.name}</div>
      <div class="details">
        <div class="image">
          <img src="assets/images/${item.img}.png">
        </div>
        <div class="info">
          <div class="name"><span class="name">${item.name.replaceAll('\n', '<br>')}</span></div>
          <div class="text">
            <div class="withoutnotes">
              <div class="owner"><span class="label">Owned by </span> ${item.owner}</div>
              <div class="type"><span class="label">Type </span> ${item.type}</div>
              <div class="brand"><span class="label">Brand </span> ${item.brand}</div>
              <div class="year"><span class="label">Year of Release </span> ${item.year}</div>
            </div>
            <div class="notes">
              <div class="notes"><span class="label">Notes </span>${item.notes.replaceAll('\n', '<br>')}</div>
            </div>
          </div>
        </div>
      </div>`;

    const container = document.querySelector('#container');
    container.appendChild(newItem);

    // Add event listener to toggle filter for "owner": "Jenna" when "box jenna1" is clicked
    const boxJenna1 = document.querySelector('.box.jenna1');
    boxJenna1.addEventListener('click', function () {
      boxJenna1.classList.toggle('active');

      if (boxJenna1.classList.contains('active')) {
        const allFragrances = document.querySelectorAll('.fragrance');
        allFragrances.forEach(function (fragrance) {
          fragrance.style.display = 'block';
        });
      } else {
        const jennaFragrances = document.querySelectorAll('.fragrance.jenna');
        const allFragrances = document.querySelectorAll('.fragrance');
        allFragrances.forEach(function (fragrance) {
          fragrance.style.display = 'none';
        });
        jennaFragrances.forEach(function (fragrance) {
          fragrance.style.display = 'block';
        });
      }
    });

    // Add event listener to toggle filter for "owner": "Jenna" when "box jenna1" is clicked
    const boxSeyoung1 = document.querySelector('.box.seyoung1');
    boxSeyoung1.addEventListener('click', function () {
      boxSeyoung1.classList.toggle('active');

      if (boxSeyoung1.classList.contains('active')) {
        const allFragrances = document.querySelectorAll('.fragrance');
        allFragrances.forEach(function (fragrance) {
          fragrance.style.display = 'block';
        });
      } else {
        const seyoungFragrances = document.querySelectorAll('.fragrance.seyoung');
        const allFragrances = document.querySelectorAll('.fragrance');
        allFragrances.forEach(function (fragrance) {
          fragrance.style.display = 'none';
        });
        seyoungFragrances.forEach(function (fragrance) {
          fragrance.style.display = 'block';
        });
      }
    });

    newItem.addEventListener('click', function () {
      console.log('click');
      newItem.classList.toggle('active');
    });
  });
}
