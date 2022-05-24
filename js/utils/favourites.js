import { getDataLocalStorage, SetDataLocalStorage } from "./localStorage.js";

const arrayFavorites = getDataLocalStorage('sendFavorites') ?? [];

function favouritePosition (id) {
  return arrayFavorites.indexOf(id);
}

// Set new favorite item
function handleClickFavourite (icon , id) {
  const idPosition = favouritePosition(id);
  if (idPosition === -1) {
    arrayFavorites.push(id);
    icon.src = "../images/icon-fav-active.svg";
  } else {
    arrayFavorites.splice(idPosition, 1);
    icon.src = "../images/icon-fav-hover.svg";
  }

  SetDataLocalStorage('sendFavorites', arrayFavorites);
}

export {handleClickFavourite, favouritePosition};