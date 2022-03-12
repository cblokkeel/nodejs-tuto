const path = require('path') 

function getMessages (req, res) {
    // res.send('<ul><li>hello</li></ul>')
    // res.sendFile(path.join(__dirname, '..', 'public', 'images', 'skimountain.jpg'))
    res.render('messages', {
        title: 'Super message',
        friend: 'Elon musk'
    })
}

function postMessage (req, res) {
    console.log('updating messages')
    res.send('hahah')
}

module.exports = {
    getMessages,
    postMessage
}