const ohMy = () => {
    axios.get('http://localhost:3000/animals')

        .then(response => {
            console.log('RESPONSE', response) // returns an array [lions, tigers, bears]
        })
        .catch(error => {
            console.log('ERROR', error)
        });
};

document.getElementById('animals-button').addEventListener('click', ohMy)