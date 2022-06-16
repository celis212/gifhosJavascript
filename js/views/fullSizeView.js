import { handleClickFavourite, favouritePosition } from '../utils/favourites.js';
import { getDataLocalStorage } from '../utils/localStorage.js';

function fullSizeView (position) {
  // Hide the home view
  console.log(position);
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

  const showTrending = getDataLocalStorage('trendingList')

  // Title
  let pTitle = document.querySelector('#full-size .full-size__description__text__title');
  pTitle.innerText = showTrending[position].title;

  // Set Img Full Screen  
  let imgFullScreen = document.querySelector('#full-size .full-size__slider__gif');
  imgFullScreen.src = showTrending[position].url;

  // Icon: Favorite 
  const favoritefullImage = document.querySelector(`#full-size .full-size__description__buttons__fav--icon`);//imgFavorite
  favoritefullImage.src = favouritePosition(showTrending[position].id) >= 0 ? "../images/icon-fav-active.svg" : "../images/icon-fav-hover.svg";
  favoritefullImage.setAttribute('data-id', showTrending[position].id);
  favoritefullImage.addEventListener('click', handleClickFavourite);

  // Container Image - Arrows: Back 
  // sacar las arrow de aca y ponerlas en un archivo diferente 
  // aca enviaremos el position lo modificamos y lo enviamos de nuevo al fullsize 
  // debemos de separar el que permite la visualizacion del fullsize y el que cambia de gifo dentro de este fullsize
  let btnBack = document.querySelector('#full-size #btnBack');
  btnBack.addEventListener('click', () => {
    position --;
    if (position < 0) {
      position = 49;
    }
    fullSizeView(position);
  });

  // Container Image - Arrows: Next
  let btnNext = document.querySelector('#full-size #btnNext');
  btnNext.addEventListener('click', () => {
    position ++;
    if (position > 49) {
      position = 0;
    }
    fullSizeView(position);
  });
}









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