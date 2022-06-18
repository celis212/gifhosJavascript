const customFetch = (url) => fetch(url).then((response) => response.json());
export default customFetch;
