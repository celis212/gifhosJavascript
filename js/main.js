import { getData } from './services/giphyService.js';

async function App () {
  // let theme = 'white';
  // const logo = document.querySelector('#logo'); 
  const response = await getData();
  console.log(response.data)

  const darkButtonNav = document.querySelector("#nav-dark-mode")
  const darkButtonBurger = document.querySelector("#burger-dark-mode")
  darkButtonNav.addEventListener('click', () => {
      document.body.classList.toggle('dark')
      // if(theme == 'white'){
      //   logo.setAttribute("src","../../images/logo-desktop.svg")
      // }else{
      //   logo.setAttribute("src","../../images/Logo-modo-noc.svg")
      // }
  })
  darkButtonBurger.addEventListener('click', () => {
      document.body.classList.toggle('dark')
  })
}

App();