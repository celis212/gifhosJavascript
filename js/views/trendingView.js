import {initTrending} from '../services/giphyService.js';
import {handleClickFavourite, favouritePosition} from '../utils/favourites.js';
import {downloadImage} from '../utils/download.js';
import {fullSizeView} from '../views/fullSizeView.js';

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
  // let count = countStartTrend - 1;

  showthreeTrending.forEach(gifInfo => {
    // Set the counter for each GIF
    // count ++;
    countGif ++;

    // Set the id for each GIF
    const imgId = gifInfo.id;
    const imgUrl = gifInfo.url;
    const imgTitle = gifInfo.title;

    // Set the container
    // const divValue = document.createElement('div');
    // divValue.setAttribute('class', 'slider__container__trending__value');
    //// divValue.setAttribute('id', `divGifT${imgId}`);

    // const divValueButtons = document.createElement('div');
    // divValueButtons.setAttribute('class', 'slider__container__trending__value__buttons');

    // const divValueText = document.createElement('div');
    // divValueText.setAttribute('class', 'slider__container__trending__value__text');

    // Set the image
    // const img = document.createElement('img');
    const img = document.querySelector(`#gif-${countGif} .slider__container__trending__value__gif`);
    // img.setAttribute('id', `imgTren${imgId}`);
    // img.setAttribute('class', `slider__container__trending__value__gif`);
    img.src = imgUrl;
    img.alt = imgTitle;

    // Set the user info
    // const pUserInfo = document.querySelector(`#gif-${countGif} .slider__container__trending__value__text__user`);//pUser
    // pUserInfo.innerText = "User";
    // pUserInfo.setAttribute('class', 'slider__container__trending__value__text__user');

    // Set the title info 
    const pTitleInfo = document.querySelector(`#gif-${countGif} .slider__container__trending__value__text__title`);//pTitle
    pTitleInfo.innerText = imgTitle;
    // pTitleInfo.setAttribute('class', 'slider__container__trending__value__text__title');

    // Icon: Favorite 
    const favoriteImage = document.querySelector(`#gif-${countGif} .slider__container__trending__value__buttons__fav--icon`);//imgFavorite
    // favoriteImage.setAttribute('id', `imgFavT${imgId}`);
    favoriteImage.src = favouritePosition(imgId) >= 0 ? "../images/icon-fav-active.svg" : "../images/icon-fav-hover.svg";
    // favoriteImage.setAttribute('class', 'slider__container__trending__value__buttons__fav--icon');
    favoriteImage.addEventListener('click', () => handleClickFavourite(favoriteImage, imgId));

    // Icon: Download
    const donwloadImage = document.querySelector(`#gif-${countGif} .slider__container__trending__value__buttons__dwl--icon`);//imgDownload
    // donwloadImage.setAttribute('id', `imgDownT${imgId}`);
    // donwloadImage.src = "../images/icon-download.svg";
    // donwloadImage.setAttribute('class', 'slider__container__trending__value__buttons__dwl--icon');
    donwloadImage.parentElement.addEventListener('click', () => downloadImage(imgUrl, imgId));

    // Icon: Full Size
    let fullSize = document.querySelector(`#gif-${countGif} .slider__container__trending__value__buttons__full--icon`);//imgFullSize
    // fullSizeView.setAttribute('id', `imgFullT${imgId}`);
    // fullSize.src = "../images/icon-max-normal.svg";
    // fullSizeView.setAttribute('class', 'slider__container__trending__value__buttons__full--icon');
    btnBack.src = '../images/button-slider-left.svg';
    fullSize.parentElement.addEventListener('click', () => fullSizeView(imgUrl, imgId, imgTitle, countStartTrend, showTrending));

  // Set the tags for the image
    // divValueButtons.append(favoriteImage, donwloadImage, fullSizeView);
    // divValueText.append(pUserInfo, pTitleInfo);
    // divValue.append(img, divValueButtons, divValueText);
    // showSlider.append(divValue);
  });
}

// Set the next and back buttons
// Set the next button trending
document.querySelector("a#btnNext").addEventListener('click', () => {
  if (countStartTrend < 47) {
    countStartTrend++;
    // Clean the section
    // document.querySelector('#sectionTrending').innerText = "";
    // showImgTrending();
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
    // document.querySelector('#sectionTrending').innerText = "";
    // showImgTrending();
  }

  showImgTrending();
});

export {
  showImgTrending,
}