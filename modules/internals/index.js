// const { send } = require('./request')
// const { read } = require('./response')

// module.exports = {
//     send,
//     read
// }

module.exports = {
    ...require('./request'),
    ...require('./response')
}