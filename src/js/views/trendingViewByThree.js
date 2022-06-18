import {
  handleClickFavourite,
  favouritePosition,
} from "../utils/favourites.js";
import downloadImage from "../utils/download.js";
import fullSizeView from "./fullSizeView.js";
import fullsizeViewTrending from "./trendingViewByOne.js";
import { getDataLocalStorage } from "../utils/localStorage.js";
import { btnNextTrending, btnBackTrending } from "../utils/arrowsButtons.js";

// Set the visualization of the GIF image
async function showImgTrending(countStart = 0) {
  // Set the amount of image per page
  let startTrend = parseInt(countStart);

  // Get the info from giphyService and cut on three parts of the array
  const showTrending = getDataLocalStorage("trendingList");

  let showthreeTrending = showTrending.slice(startTrend, startTrend + 3);
  // Set the counter variable
  let countGif = 0;

  showthreeTrending.forEach((gifInfo) => {
    // Set the counter for each GIF
    countGif++;

    // Set the image
    const img = document.querySelector(
      `#gif-${countGif} .slider__container__trending__value__gif`
    );
    img.src = gifInfo.url;
    img.alt = gifInfo.title;

    // Set the title info
    const pTitleInfo = document.querySelector(
      `#gif-${countGif} .slider__container__trending__value__text__title`
    ); //pTitle
    pTitleInfo.innerText = gifInfo.title;

    // Icon: Favorite
    let favouriteImage = document.querySelector(
      `#gif-${countGif} .slider__container__trending__value__buttons__fav--icon`
    ); //imgFavorite
    favouriteImage.src =
      favouritePosition(gifInfo.id) >= 0
        ? "./images/icon-fav-active.svg"
        : "./images/icon-fav-hover.svg";
    favouriteImage.setAttribute("data-id", gifInfo.id);
    favouriteImage.addEventListener("click", handleClickFavourite);

    // Icon: Download
    let donwloadImage = document.querySelector(
      `#gif-${countGif} .slider__container__trending__value__buttons__dwl--icon`
    ); //imgDownload
    donwloadImage.setAttribute("data-url", gifInfo.url);
    donwloadImage.setAttribute("data-id", gifInfo.id);
    donwloadImage.addEventListener("click", downloadImage);

    // Icon: Full Size
    let fullSize = document.querySelector(
      `#gif-${countGif} .slider__container__trending__value__buttons__full--icon`
    ); //imgFullSize
    fullSize.parentElement.addEventListener("click", () => {
      fullSizeView();
      fullsizeViewTrending(startTrend + countGif - 1);
    });
  });

  // Next button
  let btnNext = document.querySelector("a#btnNext");
  btnNext.setAttribute("data-count", 3);
  btnNext.setAttribute("data-number", startTrend);
  btnNext.addEventListener("click", btnNextTrending);

  // Back button
  let btnBack = document.querySelector("a#btnBack");
  btnBack.setAttribute("data-count", 3);
  btnBack.setAttribute("data-number", startTrend);
  btnBack.addEventListener("click", btnBackTrending);
}

export default showImgTrending;
