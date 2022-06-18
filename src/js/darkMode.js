const darkMode = () => {
  const darkButtonNav = document.querySelector("#nav-dark-mode");
  darkButtonNav.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });

  const darkButtonBurger = document.querySelector("#burger-dark-mode");
  darkButtonBurger.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
};

export default darkMode;
