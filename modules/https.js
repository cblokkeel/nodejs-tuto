const { send, read } = require('./internals')

const makeRequest = (url, data) => {
    send(url, data)
    return read()
}

console.log(makeRequest('https://google.com', 'data'))