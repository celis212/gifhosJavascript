import showImgTrending from "../views/trendingViewByThree.js";
import fullsizeViewTrending from "../views/trendingViewByOne.js";

// Set the next button trending
async function btnNextTrending(e) {
  const element = e.currentTarget;
  const count = parseInt(element.attributes["data-count"].value);
  const number = parseInt(element.attributes["data-number"].value);
  let newStart = 0;

  if (count === 1 && number < 49) {
    newStart = number + 1;
  } else if (count === 3 && number < 47) {
    newStart = number + 1;
  }

  if (count === 3) {
    showImgTrending(newStart);
  } else {
    fullsizeViewTrending(newStart);
  }
}

// Set the back button trending
async function btnBackTrending(e) {
  const element = e.currentTarget;
  const count = parseInt(element.attributes["data-count"].value);
  const number = parseInt(element.attributes["data-number"].value);
  let newStart = 0;

  if (number <= 0) {
    if (count === 1) {
      newStart = 49;
    } else if (count === 3) {
      newStart = 47;
    }
  } else {
    newStart = number - 1;
  }

  if (count === 3) {
    showImgTrending(newStart);
  } else {
    fullsizeViewTrending(newStart);
  }
}

export { btnNextTrending, btnBackTrending };
