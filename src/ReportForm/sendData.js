// @flow

export default sendData(data: Object) {
  const init = {
    method: 'POST',
    mode: 'cors',
    body: data
  }

  const response = await fetch(process.env.REACT_APP_API_ENDPOINT, init)
}
