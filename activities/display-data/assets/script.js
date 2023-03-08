// console.log('hi!');

let letters = ['a', 'b', 'c']; //an array;

let emojiObject = {
    "key": "value",
    "id": 13,
    "emoji": "👍"
    
};

//setup container element
let container = document.getElementById("container");

// must setup a local server to use fetch
// see Python instructions here:
// https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server#using_python
fetch('./assets/emojis.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    processEmojis(data);
  })
  .catch(error => console.log(error));



function processEmojis( data ){
  data.forEach( function(item, index){
    console.log(item, index);
    let usage = item['general-usage'] * 10;
    console.log('usage', usage);
    let newItem = document.createElement("div");
    newItem.classList.add("icon");
    newItem.classList.add(item.categorykey);
    // newItem.style.cssText = `font-size: ${usage}px`;
    newItem.innerHTML = `
      <!--commenting out <div class="image"><img src="assets/images/${item.img}.jpg"></div>-->
      <div class="category">${item.category}</div>
      <div class="unicode">${item.unicode}</div>
      <div class="emoji">${item.emoji}</div>`;
    container.appendChild(newItem);    
  });
}

function sayHello(){
  console.log('Hello');
}


sayHello();