import { getDataLocalStorage, SetDataLocalStorage } from "./localStorage.js";

function favouritePosition(id) {
  const arrayFavorites = getDataLocalStorage("sendFavorites") ?? [];
  return arrayFavorites.indexOf(id);
}

// Set new favorite item
function handleClickFavourite(e) {
  const element = e.currentTarget;
  const id = element.attributes["data-id"].value;
  const arrayFavorites = getDataLocalStorage("sendFavorites") ?? [];
  const idPosition = favouritePosition(id);

  if (idPosition === -1) {
    arrayFavorites.push(id);
    element.src = "../images/icon-fav-active.svg";
  } else {
    arrayFavorites.splice(idPosition, 1);
    element.src = "../images/icon-fav-hover.svg";
  }

  SetDataLocalStorage("sendFavorites", arrayFavorites);
}

export { handleClickFavourite, favouritePosition };
