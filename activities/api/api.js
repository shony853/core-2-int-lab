function getNewFoxImage(){
    fetch('https://randomfox.ca/floof/')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        displayFoxImage(data.image);
      })
      .catch(error => console.log(error));
  }
  
  function displayFoxImage(imageUrl){
    const foxImage = document.getElementById('foximage');
    foxImage.setAttribute('src', imageUrl);
  }
  
  const newFoxButton = document.getElementById('new-fox-button');
  newFoxButton.addEventListener('click', getNewFoxImage);
  
  getNewFoxImage();
  