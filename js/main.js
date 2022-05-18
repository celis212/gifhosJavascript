import {showImgTrending, favoritesTrending} from './trending.js';
import displayTemme from './displayTemme.js';

// Set Dark Mode
async function App () {
  showImgTrending();
  displayTemme()
  favoritesTrending();
}

App();