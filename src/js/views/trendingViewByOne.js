import {
  handleClickFavourite,
  favouritePosition,
} from "../utils/favourites.js";
import { getDataLocalStorage } from "../utils/localStorage.js";
import { btnNextTrending, btnBackTrending } from "../utils/arrowsButtons.js";
import downloadImage from "../utils/download.js";
import fullSizeView from "./fullSizeView.js";

function fullsizeViewTrending(e) {
  const element = e.currentTarget;
  const position = element
    ? element.attributes["data-position"].value
    : parseInt(e);

  const showTrending = getDataLocalStorage("trendingList");

  // Title
  let pTitle = document.querySelector(
    "#full-size .full-size__description__text__title"
  );
  pTitle.innerText = showTrending[position].title;

  // Set Img Full Screen
  let imgFullScreen = document.querySelector(
    "#full-size .full-size__slider__gif"
  );
  imgFullScreen.src = showTrending[position].url;

  // Icon: Favorite
  const favoritefullImage = document.querySelector(
    `#full-size .full-size__description__buttons__fav--icon`
  );
  favoritefullImage.src =
    favouritePosition(showTrending[position].id) >= 0
      ? "./images/icon-fav-active.svg"
      : "./images/icon-fav-hover.svg";
  favoritefullImage.setAttribute("data-id", showTrending[position].id);
  favoritefullImage.addEventListener("click", handleClickFavourite);

  // Icon: Download
  let donwloadImage = document.querySelector(
    `#full-size .full-size__description__buttons__dwl--icon`
  );
  donwloadImage.setAttribute("data-url", showTrending[position].url);
  donwloadImage.setAttribute("data-id", showTrending[position].id);
  donwloadImage.addEventListener("click", downloadImage);

  // Set the container
  let imgClose = document.querySelector("a#closeFullView");
  imgClose.addEventListener("click", fullSizeView);

  // Next button
  let btnNext = document.querySelector("#full-size #btnBack");
  btnNext.setAttribute("data-count", 1);
  btnNext.setAttribute("data-number", position);
  btnNext.addEventListener("click", btnNextTrending);

  // Back button
  let btnBack = document.querySelector("#full-size #btnNext");
  btnBack.setAttribute("data-count", 1);
  btnBack.setAttribute("data-number", position);
  btnBack.addEventListener("click", btnBackTrending);
}

export default fullsizeViewTrending;
