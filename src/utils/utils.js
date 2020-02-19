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

export function getFillColor(region) {
  let fill = '#c43a31';
  if (region === 'Speyside') {
    fill = '#F28705';
  } else if (region === 'Highland') {
    fill = '#F20505';
  } else if (region === 'Islay') {
    fill = '#025159';
  } else if (region === 'Island') {
    fill = '#03A696';
  } else if (region === 'Lowland') {
    fill = '#F25D27';
  } else if (region === 'Campbeltown') {
    fill = '#666';
  } else if (region === 'Other') {
    fill = '#666';
  }
  return fill;
}
