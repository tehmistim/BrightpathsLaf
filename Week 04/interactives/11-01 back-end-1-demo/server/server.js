const express = require('express')  //imports express for the server to use
const app = express()
const cors = require('cors')
const { response } = require('express')

app.use(cors());
app.use(express.json());  //not used in this exercise but get used to having this in the server script (common setup)

const inventory = ['greeting card', 'wagon', 'computer', 'table', 'chair', 'milk', 'sailboat', 'conditioner', 'rusty nail', 'desk',]

app.get('/api/inventory', (req, res) => {
    if (req.query.item) {
        const filteredItems = inventory.filter(invItem => invItem.toLowerCase().includes(req.query.item.toLowerCase()));

        res.status(200).send(filteredItems)
    } else {
        res.status(200).send(inventory)
    }
});

app.get('/api/inventory/:index', (req, res) => {
    res.status(200).send(inventory[+req.params.index])
});




const SERVER_PORT = 5050                            // USUAL SETUP FOR THE BOTTOM
app.listen(SERVER_PORT, () => console.log(`Server running on ${SERVER_PORT}`));    //  USUAL SETUP FOR THE BOTTOM