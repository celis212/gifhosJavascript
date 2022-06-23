import darkMode from "../darkMode.js";

function fullSizeView() {
  // Hide the home view
  const home = document.querySelector("#home");
  home.classList.toggle("hidden");

  // Show the full size view
  const fullSize = document.querySelector("#full-size");
  fullSize.classList.toggle("hidden");

  let checkDarkMode = document.querySelector("body.dark");
  console.log(checkDarkMode);
  if (checkDarkMode) {
    document.body.classList.toggle("dark");
  }
}

export default fullSizeView;
