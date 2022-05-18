import {initTrending} from './services/giphyService.js';

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
  let count = countStartTrend - 1;

  showthreeTrending.forEach(gifInfo => {
    //Start the counter for each GIF
    count ++;

    // Set the container
    let divValue = document.createElement('div');
    divValue.setAttribute('class', 'slider__container__trending__value');
    divValue.setAttribute('id', `divGifT${count}`);

    let divValueButtons = document.createElement('div');
    divValueButtons.setAttribute('class', 'slider__container__trending__value__buttons');

    let divValueText = document.createElement('div');
    divValueText.setAttribute('class', 'slider__container__trending__value__text');

    // Set the image
    let img = document.createElement('img');
    img.setAttribute('id', `imgTren${count}`);
    img.setAttribute('class', `slider__container__trending__value__gif`);
    img.src = gifInfo['url'];
    img.alt = gifInfo['title'];

    // Set the user info
    let pUserInfo = document.createElement('p');//pUser
    pUserInfo.innerText = "User";
    pUserInfo.setAttribute('class', 'slider__container__trending__value__text__user');

    // Set the title info 
    let pTitleInfo = document.createElement('p');//pTitle
    pTitleInfo.innerText = gifInfo['title'];
    pTitleInfo.setAttribute('class', 'slider__container__trending__value__text__title');

    // Icon Hover: Favorite 
    let favoriteImage = document.createElement('img');//imgFavorite
    favoriteImage.setAttribute('id', `imgFavT${count}`);
    favoriteImage.src = "../images/icon-fav-hover.svg";
    favoriteImage.setAttribute('onclick', 'favoritesTrending(this)');//addFavoritesTrending
    favoriteImage.setAttribute('class', 'slider__container__trending__value__buttons__fav--icon');

    // Icon Hover: Download
    let donwloadImage = document.createElement('img');//imgDownload
    donwloadImage.setAttribute('id', `imgDownT${count}`);
    donwloadImage.src = "../images/icon-download.svg";
    donwloadImage.setAttribute('onclick', 'downloadTrending(this)');
    donwloadImage.setAttribute('class', 'slider__container__trending__value__buttons__dwl--icon');

    // Icon Hover: Full Size
    let fullSizeView = document.createElement('img');//imgFullSize
    fullSizeView.setAttribute('id', `imgFullT${count}`);
    fullSizeView.src = "../images/icon-max-normal.svg";
    fullSizeView.setAttribute('onclick', 'fullSize(this)');
    fullSizeView.setAttribute('class', 'slider__container__trending__value__buttons__full--icon');

    // Set the tags for the image
    divValueButtons.append(favoriteImage, donwloadImage, fullSizeView);
    divValueText.append(pUserInfo, pTitleInfo);
    divValue.append(img, divValueButtons, divValueText);
    showSlider.append(divValue);
  });
}

// Set the next and back buttons
document.querySelector("a#btnNext").addEventListener('click', nextTrendingGIF);
document.querySelector("a#btnBack").addEventListener('click', backTrendingGIF);

// Set the next button trending
function nextTrendingGIF() {
  if (countStartTrend <= 47) {
    countStartTrend++;
    // Clean the section
    document.querySelector('#sectionTrending').innerText = "";
    showImgTrending();
  } else {
    countStartTrend = 0;
  }
}

// Set the back button trending
function backTrendingGIF() {
  if (countStartTrend == 0) {
    countStartTrend = 47;
  } else {
    countStartTrend--;
    document.querySelector('#sectionTrending').innerText = "";
    showImgTrending();
  }
}

// Add Favorites
var arrayFavorites = [];
var arrFav = JSON.parse(localStorage.getItem("sendFavorites"));
if (arrFav != null) {
  arrayFavorites = arrFav;
}

async function favoritesTrending(iconFavorite) {
  let idImgHtml = await iconFavorite.id;
  console.log(idImgHtml);
  let extractLastDigit = idImgHtml.slice(7, idImgHtml.length);
  let tagGif = document.getElementById(`divGifT${extractLastDigit}`);
  arrayFavorites.push(tagGif.src);
  localStorage.setItem('sendFavorites', JSON.stringify(arrayFavorites));
  location.reload();
}

export {
  showImgTrending,
  favoritesTrending
}