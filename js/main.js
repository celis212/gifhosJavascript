import {showImgTrending} from './views/trendingView.js';
import darkMode from './darkMode.js';

// Set Dark Mode
async function App () {
  showImgTrending();
  darkMode()
}

App();