const clientList = document.querySelector('#client-list')

function makeClientCard(client) {
    const phoneNumber = client['phone_number']
    const displayPhoneNumber = `(${phoneNumber.slice(0,3)})${phoneNumber.slice(3,6)}-${phoneNumber.slice(6,10)}`
    const clientCard = 
    `<div class="card">
        <h2>${client['first_name']} ${client['last_name']}</h2>
        <h3>${displayPhoneNumber} | ${client['email']}</h3>
        <p>${client['address']}, ${client['city']}, ${client['state']} ${client['zip_code']}</p>
    </div>`

    return clientCard
}

function getAllClients() {
    axios.get('http://localhost:8765/clients')
        .then(res => {
            res.data.forEach(client => {
                const clientCard = makeClientCard(client)

                clientList.innerHTML += clientCard
            })
        })
        .catch(err => console.log(err))
}

getAllClients()