const pendAppts = document.querySelector('#pend-appts')
const upcomingAppts = document.querySelector('#up-appts')
const pastAppts = document.querySelector('#past-appts')

function createDisplayDate(date) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const reqDate = new Date(date)
    const reqDateDisplay = reqDate.toLocaleDateString('en-US', options)
    const reqTime = reqDate.toLocaleTimeString('en-US')
    const timeDisplay = reqTime.slice(0, -6)
    const timeOfDay = reqTime.slice(-2)
    return `${reqDateDisplay} ${timeDisplay} ${timeOfDay}`
}

function makePendingApptCard(appt) {
    const dateDisplayText = createDisplayDate(appt.date)

    const apptElem = 
    `<div class="card" id="appt-${appt['appt_id']}">
        <h2>${dateDisplayText}</h2>
        <h3>${appt['service_type']}</h3>
        <p>Approved: <button onclick="markApproved(${appt.appt_id})">Mark Approved</button> | Completed: Waiting for approval</p>
        <p>${appt.notes}</p>
    </div>`

    return apptElem
}

function makeApptCard(appt, nextAppt) {
    const dateDisplayText = createDisplayDate(appt.date)

    const apptElem = 
    `<div class="card" id="appt-${appt['appt_id']}">
        <h2>${dateDisplayText}</h2>
        <h3>${appt['service_type']}</h3>
        <h4>${appt['first_name']} ${appt['last_name']}</h4>
        ${nextAppt ? `<h4>${nextAppt['first_name']} ${nextAppt['last_name']}</h4>` : `<span style="display:none"></span>`}
        <p>Approved: yes | Completed: ${!appt.completed  ? `<button onclick="markCompleted(${appt.appt_id})">Mark Completed</button>` : 'yes'}</p>
        <p>${appt.notes}</p>
    </div>`

    return apptElem
}

function getPendingAppointments() {
    axios.get('http://localhost:8765/pending')
    .then(res => {
        for (let i = 0; i < res.data.length; i += 2) {
            const appt = res.data[i]
            const apptElem = makePendingApptCard(appt)
            pendAppts.innerHTML += apptElem    
        }
    })
    .catch(err => console.log(err))
}

function getUpcomingAppointments() {
    axios.get('http://localhost:8765/upcoming')
    .then(res => {
        console.log('UPCOMING')
        console.log(res.data)
        for (let i = 0; i < res.data.length; i += 2) {
            const appt = res.data[i]
            const nextAppt = res.data[i + 1] || null
            const apptElem = makeApptCard(appt, nextAppt)
            upcomingAppts.innerHTML += apptElem    
        }
    })
    .catch(err => console.log(err))
}

function getPastAppointments() {
    axios.get('http://localhost:8765/appt')
        .then(res => {
            for (let i = 0; i < res.data.length; i += 2) {
                const appt = res.data[i]
                const nextAppt = res.data[i + 1] || null
                const apptElem = makeApptCard(appt, nextAppt)
                pastAppts.innerHTML += apptElem    
            }
        })
        .catch(err => console.log(err))
}

function markApproved(id) {
    const selector = `#appt-${id}`
    const elemToRemove = document.querySelector(selector)

    elemToRemove.remove()

    axios.put('http://localhost:8765/approve', {apptId: id})
        .then(() => getUpcomingAppointments())
        .catch(err => console.log(err))
}

function markCompleted(id) {
    const selector = `#appt-${id}`
    const elemToRemove = document.querySelector(selector)

    elemToRemove.remove()

    axios.put('http://localhost:8765/complete', {apptId: id})
    .then(() => getPastAppointments())
    .catch(err => console.log(err))
}

getPendingAppointments()
// getUpcomingAppointments()
// getPastAppointments()