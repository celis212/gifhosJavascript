import { showImgTrending } from '../views/trendingView.js';

// Set the next button trending
async function btnNextTrending(e) {
  const element = e.currentTarget;
  const count   = parseInt(element.attributes['data-count'].value);
  const number  = parseInt(element.attributes['data-number'].value);
  let newStart  = 0;

  if (count === 1) {
    if (number < 49) {
      newStart = number + 1;
    } else {
      newStart = 0;
    }
  } else {
    if (number < 47) {
      newStart = number + 1;
    } else {
      newStart = 0;
    }
  }

  showImgTrending(newStart);
}
  
// Set the back button trending
async function btnBackTrending(e) {
  const element = e.currentTarget;
  const count   = parseInt(element.attributes['data-count'].value);
  const number  = parseInt(element.attributes['data-number'].value);
  let newStart  = 0;

  if (count === 1) {
    if (number <= 0) {
      newStart = 49;
    } else {
      newStart = number - 1;
    }
  } else if (count === 3) {
    if (number <= 0) {
      newStart = 47;
    } else {
      newStart = number - 1;
    }
  }

  showImgTrending(newStart);
}

export { btnNextTrending, btnBackTrending };