export function ajaxHelper(method, uri, successCallback) {
  return (
    fetch(process.env.REACT_APP_API_HOST + uri, { method: method })
    .then(result => result.json())
    .then(result => {
      successCallback(result);
    })
    .catch((response) => {
      console.log('Received the following server error response while fetching Weather: ', response);
    })
  );
}
