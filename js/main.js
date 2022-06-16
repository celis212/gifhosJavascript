import { showImgTrending }  from './views/trendingView.js';
import  darkMode            from './darkMode.js';
import { initTrending }     from './services/giphyService.js';


// Set Dark Mode
async function App () {
  showImgTrending();
  darkMode();
}

App();
initTrending();