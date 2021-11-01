const express = require('express')  //imports express for the server to use
const app = express()
const cors = require('cors')
const { response } = require('express')

app.use(cors());
app.use(express.json());  //not used in this exercise but get used to having this in the server script (common setup)







app.get("/api/users", (req, res) => {
    let friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"];
    res.status(200).send(friends);
  });

  app.get("/weather/:temperature", (req, res) => {
    const phrase = `<h3>It was ${req.params.temperature} today</h3>`;
    res.status(200).send(phrase);
  });





const SERVER_PORT = 4000                            // USUAL SETUP FOR THE BOTTOM
app.listen(4000, () => console.log(`Server running on port ${SERVER_PORT}`));
