const bots = [
    {
        id: 0,
        name: 'The Hammer', 
        imgAddress: 'https://robohash.org/hammer',
        health: 100, 
        attacks: [
            {
                id: 0, 
                damage: 25
            }, 
            {
                id: 1, 
                damage: 30
            }
        ]
    }, 
    {
        id: 1,
        name: 'Crowbar', 
        imgAddress: 'https://robohash.org/crowbar',
        health: 75, 
        attacks: [
            {
                id: 0, 
                damage: 15
            }, 
            {
                id: 1, 
                damage: 40
            }
        ]
    }, 
    {
        id: 2,
        name: 'Rusty', 
        imgAddress: 'https://robohash.org/rusty',
        health: 120, 
        attacks: [
            {
                id: 0, 
                damage: 30
            }, 
            {
                id: 1, 
                damage: 15
            }
        ]
    }, 
    {
        id: 3,
        name: 'Beta', 
        imgAddress: 'https://robohash.org/beta',
        health: 95, 
        attacks: [
            {
                id: 0, 
                damage: 15
            }, 
            {
                id: 1, 
                damage: 35
            }
        ]
    }, 
    {
        id: 4,
        name: 'Prime Information Drone', 
        imgAddress: 'https://robohash.org/prime',
        health: 80, 
        attacks: [
            {
                id: 0, 
                damage: 25
            }, 
            {
                id: 1, 
                damage: 25
            }
        ]
    }, 
    {
        id: 5,
        name: 'Brobot', 
        imgAddress: 'https://robohash.org/brobot',
        health: 100, 
        attacks: [
            {
                id: 0, 
                damage: 25
            }, 
            {
                id: 1, 
                damage: 30
            }
        ]
    }, 
    {
        id: 6,
        name: 'Nozzle', 
        imgAddress: 'https://robohash.org/nozzle',
        health: 75, 
        attacks: [
            {
                id: 0, 
                damage: 15
            }, 
            {
                id: 1, 
                damage: 40
            }
        ]
    }, 
    {
        id: 7,
        name: 'Globotron', 
        imgAddress: 'https://robohash.org/globotron',
        health: 120, 
        attacks: [
            {
                id: 0, 
                damage: 30
            }, 
            {
                id: 1, 
                damage: 15
            }
        ]
    }, 
    {
        id: 8,
        name: 'Self-Aware Garbage Android', 
        imgAddress: 'https://robohash.org/garbage',
        health: 95, 
        attacks: [
            {
                id: 0, 
                damage: 15
            }, 
            {
                id: 1, 
                damage: 35
            }
        ]
    }, 
    {
        id: 9,
        name: 'Mechi', 
        imgAddress: 'https://robohash.org/mechi',
        health: 80, 
        attacks: [
            {
                id: 0, 
                damage: 25
            }, 
            {
                id: 1, 
                damage: 25
            }
        ]
    }
]

const playerRecord = {
    wins: 0, 
    losses: 0
}

module.exports = {bots, playerRecord}