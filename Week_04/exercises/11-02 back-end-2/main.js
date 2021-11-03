const housesContainer = document.querySelector('#houses-container')
const form = document.querySelector('form')

const baseURL = `http://localhost:4004/api/houses`

const housesCallback = ({ data: houses }) => displayHouses(houses)
const errCallback = err => console.log(err)

const getAllHouses = () => axios.get(baseURL).then(housesCallback).catch(errCallback)
const createHouse = body => axios.post(baseURL, body).then(housesCallback).catch(errCallback)
const deleteHouse = id => axios.delete(`${baseURL}/${id}`).then(housesCallback).catch(errCallback)
const updateHouse = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(housesCallback).catch(errCallback)

function submitHandler(e) {
    e.preventDefault()

    let address = document.querySelector('#address')
    let price = document.querySelector('#price')
    let imageURL = document.querySelector('#img')

    let bodyObj = {
        address: address.value,
        price: price.value, 
        imageURL: imageURL.value
    }

    createHouse(bodyObj)

    address.value = ''
    price.value = ''
    imageURL.value = ''
}

function createHouseCard(house) {
    const houseCard = document.createElement('div')
    houseCard.classList.add('house-card')

    houseCard.innerHTML = `<img alt='house cover image' src=${house.imageURL} class="house-cover-image"/>
    <p class="address">${house.address}</p>
    <div class="btns-container">
        <button onclick="updateHouse(${house.id}, 'minus')">-</button>
        <p class="house-price">$${house.price}</p>
        <button onclick="updateHouse(${house.id}, 'plus')">+</button>
    </div>
    <button onclick="deleteHouse(${house.id})">delete</button>
    `


    housesContainer.appendChild(houseCard)
}

function displayHouses(arr) {
    housesContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createHouseCard(arr[i])
    }
}

form.addEventListener('submit', submitHandler)

getAllHouses()