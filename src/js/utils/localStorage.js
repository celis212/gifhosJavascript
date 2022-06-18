// Get the local storage with the favorite images
function getDataLocalStorage(key) {
  const data = localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key))
    : null;
  return data;
}

// Set the local storage with the favorite images
function SetDataLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export { getDataLocalStorage, SetDataLocalStorage };
