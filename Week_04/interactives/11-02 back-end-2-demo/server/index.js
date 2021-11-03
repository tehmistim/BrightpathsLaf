const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())
//--------------------above is the typical server setup
//-----------line 10 is to use the controller.js file
const {getMovies, deleteMovie, createMovie, updateMovie} = require('./controller.js')

app.get(`/api/movies`, getMovies)
app.delete(`/api/movies/:id`, deleteMovie)
app.post(`/api/movies`,createMovie)
app.put(`/api/movies/:id`, updateMovie)








app.listen(4004, () => console.log(`Server running on 4004`));  