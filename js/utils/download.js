async function downloadImage (e) {
  const element = e.currentTarget;
  const id      = element.attributes['data-id'].value;
  const url     = element.attributes['data-url'].value;

  let a         = document.createElement('a');
  let response  = await fetch(url);
  let file      = await response.blob();

  a.download            = id;
  a.href                = window.URL.createObjectURL(file);
  a.dataset.downloadurl = ['application/octet-stream', a.download, a.href].join(':');

  a.click();
}

export {downloadImage};