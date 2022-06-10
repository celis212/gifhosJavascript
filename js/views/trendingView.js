import {initTrending}                             from '../services/giphyService.js';
import {handleClickFavourite, favouritePosition}  from '../utils/favourites.js';
import {downloadImage}                            from '../utils/download.js';
import {fullSizeView}                             from '../views/fullSizeView.js';

// Set the amount of image per page
let countStartTrend = 0;

// Set the target element to show the image
let showSlider = document.querySelector('#sectionTrending');

// Get the info from giphyService and cut on three parts of the array
const showTrending = await initTrending();
console.log(showTrending);

// Set the visualization of the GIF image
async function showImgTrending() {
  
  let showthreeTrending = showTrending.slice(countStartTrend, countStartTrend + 3);
  // Set the counter variable
  let countGif = 0;

  showthreeTrending.forEach(gifInfo => {
    // Set the counter for each GIF
    countGif ++;

    // Set the image
    const img = document.querySelector(`#gif-${countGif} .slider__container__trending__value__gif`);
    img.src = gifInfo.url;
    img.alt = gifInfo.title;

    // Set the title info 
    const pTitleInfo = document.querySelector(`#gif-${countGif} .slider__container__trending__value__text__title`);//pTitle
    pTitleInfo.innerText = gifInfo.title;

    // Icon: Favorite 
    let favouriteImage = document.querySelector(`#gif-${countGif} .slider__container__trending__value__buttons__fav--icon`);//imgFavorite
    favouriteImage.src = favouritePosition(gifInfo.id) >= 0 ? "../images/icon-fav-active.svg" : "../images/icon-fav-hover.svg";
    favouriteImage.setAttribute('data-id', gifInfo.id);
    favouriteImage.addEventListener('click', handleClickFavourite);

    // Icon: Download
    let donwloadImage = document.querySelector(`#gif-${countGif} .slider__container__trending__value__buttons__dwl--icon`);//imgDownload
    donwloadImage.setAttribute('data-url', gifInfo.url);
    donwloadImage.setAttribute('data-id',  gifInfo.id);
    donwloadImage.addEventListener('click', downloadImage);

    // Icon: Full Size
    let fullSize = document.querySelector(`#gif-${countGif} .slider__container__trending__value__buttons__full--icon`);//imgFullSize
    fullSize.parentElement.addEventListener('click', () => fullSizeView(gifInfo.url, gifInfo.id, gifInfo.title, countStartTrend, showTrending));
  });
}

// Set the next button trending
document.querySelector("a#btnNext").addEventListener('click', async () => {
  if (countStartTrend < 47) {
    countStartTrend++;
  } else {
    countStartTrend = 0;
  }

  showImgTrending();
});

// Set the back button trending
document.querySelector("a#btnBack").addEventListener('click', async () => {
  if (countStartTrend === 0) {
    countStartTrend = 47;
  } else {
    countStartTrend--;
  }

  showImgTrending();
});

export {showImgTrending};