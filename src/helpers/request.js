const request = async (url, isJson = true) => (
  fetch(url)
    .then(res => (isJson ? res.json() : res.text()))
);

export default request;
