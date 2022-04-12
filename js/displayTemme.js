const displayTemme = () => {
  const darkButtonNav = document.querySelector("#nav-dark-mode")
  const darkButtonBurger = document.querySelector("#burger-dark-mode")
  
  darkButtonNav.addEventListener('click', () => {
    document.body.classList.toggle('dark')
  });
  darkButtonBurger.addEventListener('click', () => {
    document.body.classList.toggle('dark')
  });
}
export default displayTemme;
