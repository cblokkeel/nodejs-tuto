function getMessages (req, res) {
    res.send('<ul><li>hello</li></ul>')
}

function postMessage (req, res) {
    console.log('updating messages')
    res.send('hahah')
}

module.exports = {
    getMessages,
    postMessage
}