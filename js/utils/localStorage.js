function getDataLocalStorage(key) {
	const data = localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : null;
	return data;
}

function SetDataLocalStorage(key, data) {
	localStorage.setItem(key, JSON.stringify(data));
}

export { getDataLocalStorage, SetDataLocalStorage };