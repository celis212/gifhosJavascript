import showImgTrending from "./views/trendingViewByThree.js";
import darkMode from "./darkMode.js";
import initTrending from "./services/giphyService.js";

// Set Dark Mode
async function App() {
  darkMode();
  initTrending();
  showImgTrending();
}

App();
