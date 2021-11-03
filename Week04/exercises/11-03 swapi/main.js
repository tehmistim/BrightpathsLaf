// const { default: axios } = require("axios");

const button = document.querySelector('button')

    button.addEventListener('click', () => {
        alert(`Tim's favorite place is his shop.`)  
});

axios.get('https://swapi.dev/api/planets/2')
  .then((response) => {
    const residents = response.data.residents
        for (people of residents) {
            axios.get(people)
            .then(res => {
                // return res.data.name
                let newh2 = document.createElement('h2')
                    newh2.textContent = res.data.name
                    document.querySelector('body').append(newh2)
            })
        }
    // console.log(response.status);
    // console.log(response.statusText);
    // console.log(response.headers);
    // console.log(response.config);

  });