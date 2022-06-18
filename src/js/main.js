import darkMode from "./darkMode.js";
import initTrending from "./services/giphyService.js";
import showImgTrending from "./views/trendingViewByThree.js";

// Set Dark Mode
async function App() {
  darkMode();
  initTrending();
  showImgTrending();
}

App();
