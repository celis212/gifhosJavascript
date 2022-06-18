import {
  handleClickFavourite,
  favouritePosition,
} from "../utils/favourites.js";
import { getDataLocalStorage } from "../utils/localStorage.js";

function fullsizeViewTrending(position) {
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
  ); //imgFavorite
  favoritefullImage.src =
    favouritePosition(showTrending[position].id) >= 0
      ? "./images/icon-fav-active.svg"
      : "./images/icon-fav-hover.svg";
  favoritefullImage.setAttribute("data-id", showTrending[position].id);
  favoritefullImage.addEventListener("click", handleClickFavourite);

  // Icon: Download
  let donwloadImage = document.querySelector(
    `#full-size .full-size__description__buttons__dwl--icon`
  ); //imgDownload
  donwloadImage.setAttribute("data-url", showTrending[position].url);
  donwloadImage.setAttribute("data-id", gifInfo.id);
  donwloadImage.addEventListener("click", downloadImage);

  // Container Image - Arrows: Back
  // sacar las arrow de aca y ponerlas en un archivo diferente
  // aca enviaremos el position lo modificamos y lo enviamos de nuevo al fullsize
  // debemos de separar el que permite la visualizacion del fullsize y el que cambia de gifo dentro de este fullsize

  // let btnBack = document.querySelector('#full-size #btnBack');
  // btnBack.addEventListener('click', () => {
  //   position --;
  //   if (position < 0) {
  //     position = 49;
  //   }
  //   fullSizeView(position);
  // });

  // Container Image - Arrows: Next
  // let btnNext = document.querySelector('#full-size #btnNext');
  // btnNext.addEventListener('click', () => {
  //   position ++;
  //   if (position > 49) {
  //     position = 0;
  //   }
  //   fullSizeView(position);
  // });
}

export default fullsizeViewTrending;
