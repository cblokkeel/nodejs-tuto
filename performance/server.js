const express = require('express')

const app = express()
const PORT = 3000

function delay(duration) {
    const startTime = Date.now()
    while (Date.now() - startTime < duration) {}
}

app.get('/', (req, res) => {
    res.send('performance example')
})

app.get('/timer', (req, res) => {
    //delay res
    delay(10000)
    res.send('aaaaaaa')
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})
