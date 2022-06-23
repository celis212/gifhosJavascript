function fullSizeView() {
  // Hide the home view
  let home = document.querySelector("#home");
  home.classList.toggle("hidden");

  // Show the full size view
  let fullSize = document.querySelector("#full-size");
  fullSize.classList.toggle("hidden");
}

// // Set the container of the full Screen btnBack, btnNext, imgFullScreen
// let divImgDirection = document.createElement('div');
// divImgDirection.classList.add('styleImgDirection');

// divImgDirection.appendChild(btnBack);
// divImgDirection.appendChild(imgFullScreen);
// divImgDirection.appendChild(btnNext);

// // Set the container of the full screen user and title
// let divText = document.createElement('div');
// divText.classList.add('styleDivText');

// divText.appendChild(pUser);
// divText.appendChild(pTitle);

// // Icon Favorite
// let imgFavorite = document.createElement('img');
// imgFavorite.src = "./images/icon-fav-hover.svg";
// imgFavorite.setAttribute('class', 'icon imgFavorite');
// imgFavorite.addEventListener('click', () => {
//   favoriteImage.src = "./images/icon-fav-active.svg";
//   arrayFavorites.push(showTrending[count]['url']);
//   localStorage.setItem('sendFavorites', JSON.stringify(arrayFavorites));
// });

// // Icon Download
// let imgDownload = document.createElement('img');
// imgDownload.src = "../images/icon-download.svg";
// imgDownload.setAttribute('class', 'icon imgDownload');
// imgDownload.addEventListener('click', async () => {
//   let response = await fetch(showTrending[count]['url']);
//   let file = await response.blob();
//   let a = document.createElement('a');
//   a.href = window.URL.createObjectURL(file);
//   a.dataset.downloadurl = ['application/octet-stream', donwloadImage.id, a.href].join(':');
//   a.click();
// });

// let divDescription = document.createElement('div');
// divDescription.classList.add('styleDivDescription');

// divDescription.appendChild(divText);
// divDescription.appendChild(imgFavorite);
// divDescription.appendChild(imgDownload);

// // Set the Container full screen
// let divFullScreen = document.querySelector('#divFullScreen');
// divFullScreen.classList.add('styleFullScreen');
// divFullScreen.classList.remove('hidden');

// // Set the container
// let imgClose = document.createElement('img');
// imgClose.src = '../images/close.svg';
// imgClose.classList.add('styleClose');
// imgClose.classList.add('iconCloseFullScreen');
// imgClose.addEventListener('click', () => {
//   document.getElementById('divFullScreen').innerHTML = "";//
//   document.getElementById('divFullScreen').classList.add('hidden');//
//   document.getElementById('divFullScreen').classList.remove('styleFullScreen');//
// });

// divFullScreen.appendChild(imgClose);
// divFullScreen.appendChild(divImgDirection);
// divFullScreen.appendChild(divDescription);
// document.querySelector('body').appendChild(divFullScreen);

export default fullSizeView;
