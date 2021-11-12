const form = document.querySelector('form')
const nameInput = document.querySelector('#name-input')
const countrySelect = document.querySelector('#country-select')
const countryList = document.querySelector('#country-list')

function handleSubmit(e) {
    e.preventDefault()

    if (nameInput.value < 1) {
        alert ('You must enter a city name')
        return
    }

    let userRating = document.querySelector('input[name="rating"]:checked').value
    let body = {
        name: nameInput.value, 
        rating: +userRating, 
        countryId: +countrySelect.value
    }

    axios.post('http://localhost:4004/cities', body)
        .then(() => {
            countrySelect.value = 1
            nameInput.value = ''
            document.querySelector('#rating-one').checked = true
            getCities()
        })
}

function deleteCard(id) {
    axios.delete(`http://localhost:4004/cities/${id}`)
        .then(() => getCities())
        .catch(err => console.log(err))
}

function getCities() {
    countryList.innerHTML = ''

    axios.get('http://localhost:4004/cities/')
        .then(res => {
            res.data.forEach(elem => {
                let countryCard = `<div class="country-card">
                    <h2>${elem.city}, ${elem.country}</h2>
                    <h3>Rating: ${elem.rating}/5</h3>
                    <button onclick="deleteCard(${elem['city_id']})">Delete</button>
                    </div>
                `

                countryList.innerHTML += countryCard
            })
        })
}

function getCountries() {
    axios.get('http://localhost:4004/countries')
        .then(res => {
            res.data.forEach(country => {
                const option = document.createElement('option')
                option.setAttribute('value', country['country_id'])
                option.textContent = country.name
                countrySelect.appendChild(option)
            })
        })
}

getCountries()
getCities()
form.addEventListener('submit', handleSubmit)