const encrypt = data => {
    return 'encrypted data'
}

const send = (url, data) => {
    const encryptedData = encrypt(data)
    console.log(`Sending ${encryptedData} to ${url}`)
}

module.exports = {
    send,
}