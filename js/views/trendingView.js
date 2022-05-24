import {initTrending}                             from '../services/giphyService.js';
import {handleClickFavourite, favouritePosition}  from '../utils/favourites.js';
import {downloadImage}                            from '../utils/download.js';
import {fullSizeView}                             from '../views/fullSizeView.js';

// Set the amount of image per page
let countStartTrend = 0;

// Set the target element to show the image
let showSlider = document.querySelector('#sectionTrending');

// Set the visualization of the GIF image
async function showImgTrending() {
  // Get the info from giphyService and cut on three parts of the array
  const showTrending = await initTrending();
  let showthreeTrending = showTrending.slice(countStartTrend, countStartTrend + 3);

  // Set the counter variable
  let countGif = 0;

  showthreeTrending.forEach(gifInfo => {
    // Set the counter for each GIF
    countGif ++;

    // Set the id for each GIF
    const imgId = gifInfo.id;
    const imgUrl = gifInfo.url;
    const imgTitle = gifInfo.title;

    // Set the image
    const img = document.querySelector(`#gif-${countGif} .slider__container__trending__value__gif`);
    img.src = imgUrl;
    img.alt = imgTitle;

    // Set the title info 
    const pTitleInfo = document.querySelector(`#gif-${countGif} .slider__container__trending__value__text__title`);//pTitle
    pTitleInfo.innerText = imgTitle;

    // Icon: Favorite 
    const favoriteImage = document.querySelector(`#gif-${countGif} .slider__container__trending__value__buttons__fav--icon`);//imgFavorite
    favoriteImage.src = favouritePosition(imgId) >= 0 ? "../images/icon-fav-active.svg" : "../images/icon-fav-hover.svg";
    favoriteImage.addEventListener('click', () => handleClickFavourite(favoriteImage, imgId));

    // Icon: Download
    const donwloadImage = document.querySelector(`#gif-${countGif} .slider__container__trending__value__buttons__dwl--icon`);//imgDownload
    donwloadImage.parentElement.addEventListener('click', () => downloadImage(imgUrl, imgId));

    // Icon: Full Size
    let fullSize = document.querySelector(`#gif-${countGif} .slider__container__trending__value__buttons__full--icon`);//imgFullSize
    fullSize.parentElement.addEventListener('click', () => fullSizeView(imgUrl, imgId, imgTitle, countStartTrend, showTrending));
  });
}

// Set the next button trending
document.querySelector("a#btnNext").addEventListener('click', () => {
  if (countStartTrend < 47) {
    countStartTrend++;
  } else {
    countStartTrend = 0;
  }

  showImgTrending();
});

// Set the back button trending
document.querySelector("a#btnBack").addEventListener('click', () => {
  if (countStartTrend === 0) {
    countStartTrend = 47;
  } else {
    countStartTrend--;
  }

  showImgTrending();
});

export {showImgTrending};