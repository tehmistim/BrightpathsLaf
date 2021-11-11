const coharts = require('./index.js')
let globalId = 28

module.exports = {
    getCoharts: (req, res) => res.status(200).send(coharts),
    deleteCohart: (req, res) => {
        let index = coharts.findIndex(elem => elem.id === +req.params.id)
        coharts.splice(index, 1)
        res.status(200).send(coharts)
    },
    createCohart: (req, res) => {
        let { name, squad, pairedWith, imageURL } = req.body
        let newCohart = {
            id: globalId,
            cohartName, 
            squad,
            pairedWith,
            imageURL
        }
        coharts.push(newCohart)
        res.status(200).send(coharts)
        globalId++
    },
    updateCohart: (req, res) => {
        let { id } = req.params
        let { type } = req.body
        let index = coharts.findIndex(elem => +elem.id === +id)

        if (coharts[index].paired === 20 && type === 'plus') {
            res.status(400).send('21 days not accounted for')
        } else if (coharts[index].paired === 0 && type === 'minus') {
            res.status(400).send('cannot go below 0')
        } else if (type === 'plus') {
            movies[index].paired++
            res.status(200).send(movies)
        } else if (type === 'minus') {
            movies[index].paired--
            res.status(200).send(movies)
        } else {
            res.sendStatus(400)
        }
    }
}