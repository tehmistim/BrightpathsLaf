const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors());
app.use(express.json());

app.get('/say-hello', (req, res) => {
  res.send('Hello World!')
})

app.get('/animals', (req, res) => {
    res.send(['Lions', 'Tigers', 'Bears'])
})

app.get('/repeat/:repeat', (req, res) => {
    res.send(`Success!  ${req.params.repeat} was sent as a param!`)
})

app.get('/query-test', (req, res) => {
    const { query = {} } = req;
    let queryArr = Object.entries(query);
    if (!queryArr.length) res.send('You sent an empty query!')
    if(queryArr.length === 1){
        res.send(`You sent query: ${queryArr[0][0]} with value: ${queryArr[0][1]}!`)
    } else { {
        res.send({
            message: 'You sent more than 1 query!',
            queries: query,
        })
    } 
    }
})

let foods = []

app.post('/food', (req, res) => {
    const { newFood } = req.body
    foods.push(newFood)
    res.status(200).send(foods)
})

app.listen(port, () => {
  console.log(`Lab server listening at http://localhost:${port}`)
})