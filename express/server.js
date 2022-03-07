const express = require('express')

const app = express()
const PORT = 3000;

const friends = [
    {
        id: 0,
        name: 'Albert einstein'
    },
    {
        id: 1,
        name: 'Isaac Newton'
    }
]

app.use((req, res, next) => {
    const start = Date.now()
    next()
    const delta = Date.now() - start
    console.log(`${req.method} ${req.url} ${delta}ms`)
})

app.get('/', (req, res) => {
    res.send('hello world')
})

app.get('/friends', (req, res) => {
    res.json(friends)
})

app.get('/friends/:friendId', (req, res) => {
    const friendId = +req.params.friendId
    const friend = friends[friendId]
    if (friend)
        res.json(friend)
    else {
        res.status(404).json({
            error: 'Friends does not exist'
        })
    }
})

app.get('/messages', (req, res) => {
    res.send('<ul><li>hello</li></ul>')
})

app.post('/messages', (req, res) => {
    console.log('updating messages')
})

app.listen(PORT, () => console.log(`Server listening on ${PORT}`))