//  DEPENDENCIES

const express = require('express');
const server = express();
server.use(express.json());

// PORT DEFINE
const PORT = process.env.PORT || 3000;


server.get('/barksdale', (req, res) => {
    console.log('Welcome')
    res.send('Welcome to the API')
})

server.post('/barksdale', (req, res) => {
    let EncryptedNumber = req.body
    console.log(EncryptedNumber)
    res.send(EncryptedNumber)
})

server.listen(PORT, () => console.log(`Server is running on ${PORT}`));