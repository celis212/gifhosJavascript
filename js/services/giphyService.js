const getData = async () => {
  try {
    const response = await fetch('https://api.giphy.com/v1/gifs/random?api_key=URBjBCAfMq3GZKD7prs8kP8UOLDoqW07&tag=&rating=g')
      .then(res => res.json())
      return response
  } catch(error) {
    throw error;
  }
};

export {
  getData
}
