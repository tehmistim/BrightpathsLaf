const cohartSection = document.querySelector('#cohart-section')
const form = document.querySelector('form')

const baseURL = "http://localhost:4000/api/coharts"

const cohartsCallback = ({ data: coharts }) => displayCoharts(coharts)
const errCallback = err => console.log(err.response.data)

const getAllCoharts = () => axios.get(baseURL).then(cohartsCallback).catch(errCallback)
const createCohart = body => axios.post(baseURL, body).then(cohartsCallback).catch(errCallback)
const deleteCohart = id => axios.delete(`${baseURL}/${id}`).then(cohartsCallback).catch(errCallback)
const updateCohart = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(cohartsCallback).catch(errCallback)

function submitHandler(e) {
    e.preventDefault()

    let cohartName = document.querySelector('#name')
    let squad = document.querySelector('#squad')
    let paired = document.querySelector('input[name="paired"]:checked')
    let imageURL = document.querySelector('#img')

    let bodyObj = {
        cohartName: "cohartName.value",
        squad: "squad.value",
        paired: 'paired.value', 
        imageURL: 'imageURL.value'
    }

    createCohart(bodyObj)

    cohartName.value = ''
    squad.value = ''
    paired.checked = false
    imageURL.value = ''
}

function createCohartCard(cohart) {
    const cohartCard = document.createElement('div')
    cohartCard.classList.add('cohart-card')

    cohartCard.innerHTML = `<img alt='cohart cover' src=${cohart.imageURL} class="cohart-cover"/>
    <p class="cohart-title">${cohart.title}</p>
    <div class="btns-container">
        <button onclick="updateCohart(${cohart.id}, 'minus')">-</button>
        <button onclick="updateCohart(${cohart.id}, 'plus')">+</button>
    </div>
    <button onclick="deleteCohart(${cohart.id})">delete</button>
    `


    cohartSection.appendChild(cohartCard)
}

function displayCoharts(arr) {
    cohartSection.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createCohartCard(arr[i])
    }
}

form.addEventListener('submit', submitHandler)

getAllCoharts()