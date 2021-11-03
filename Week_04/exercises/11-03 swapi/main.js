// const { default: axios } = require("axios");

const button = document.querySelector('button')

button.addEventListener('click', () => {
    axios.get('https://swapi.dev/api/planets/2/')
        .then((res) => {
            let residents = res.data.residents
            for (people of residents) {
                axios.get(people)
                    .then(res => {
                        let newh2 = document.createElement('h2')
                        newh2.textContent = res.data.name
                        document.querySelector('body').append(newh2)
                    })
            }
        })
})