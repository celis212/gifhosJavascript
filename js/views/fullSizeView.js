import {handleClickFavourite, favouritePosition} from '../utils/favourites.js';

let pos 

function fullSizeView (url, id, title, position,  listOfGifs) {
  // Hide the home view
  let home = document.querySelector('#home');
  home.classList.toggle('hidden');

  // Show the full size view
  let fullSize = document.querySelector('#full-size');
  fullSize.classList.toggle('hidden');

  // Set the container
  let imgClose = document.querySelector('a#closeFullView');
  imgClose.addEventListener('click', () => {
    home.classList.toggle('hidden');
    fullSize.classList.toggle('hidden');
  });

  // Title
  let pTitle = document.querySelector('#full-size .full-size__description__text__title');
  pTitle.innerText = title;

  // Set Img Full Screen  
  let imgFullScreen = document.querySelector('#full-size .full-size__slider__gif');
  imgFullScreen.src = url;

  // Icon: Favorite 
  const favoritefullImage = document.querySelector(`#full-size .full-size__description__buttons__fav--icon`);//imgFavorite
  favoritefullImage.src = favouritePosition(id) >= 0 ? "../images/icon-fav-active.svg" : "../images/icon-fav-hover.svg";
  favoritefullImage.setAttribute('data-id', id);
  favoritefullImage.addEventListener('click', handleClickFavourite);
}

// Container Image - Arrows: Back 
let btnBack = document.querySelector('#full-size #btnBack');
btnBack.addEventListener('click', () => {
  position--;
  if (position >= 0) {
    imgFullScreen.src = listOfGifs[position]['url'];
    pTitle.innerText  = listOfGifs[position]['title'];
  } else {
    position = 49;
    imgFullScreen.src = listOfGifs[position]['url'];
    pTitle.innerText  = listOfGifs[position]['title'];
  }
});

// Container Image - Arrows: Next
let btnNext = document.querySelector('#full-size #btnNext');
btnNext.addEventListener('click', () => {
  position++;
  if (position <= 49) {
    imgFullScreen.src = listOfGifs[position]['url'];
    pTitle.innerText  = listOfGifs[position]['title'];
  } else {
    position = 0;
    imgFullScreen.src = listOfGifs[position]['url'];
    pTitle.innerText  = listOfGifs[position]['title'];
  }
});





  // Icon Favorite 
  // let imgFavorite = document.createElement('img');
  // imgFavorite.src = "../images/icon-fav-hover.svg";
  // imgFavorite.setAttribute('class', 'icon imgFavorite');
  // imgFavorite.addEventListener('click', () => {
  //   favoriteImage.src = "../images/icon-fav-active.svg";
  //   arrayFavorites.push(showTrending[count]['url']);
  //   localStorage.setItem('sendFavorites', JSON.stringify(arrayFavorites));
  // });   


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
// imgFavorite.src = "../images/icon-fav-hover.svg";
// imgFavorite.setAttribute('class', 'icon imgFavorite');
// imgFavorite.addEventListener('click', () => {
//   favoriteImage.src = "../images/icon-fav-active.svg";
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

export {
  fullSizeView,
}