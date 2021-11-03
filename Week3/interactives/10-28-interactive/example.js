const axios = require('axios').default;
//-----------------------------GRABS DATA-----------------------------------//
// axios.get('https://gorest.co.in/public/v1/users')
// //Resolve a promise
// //Now do something with the promise
// .then(response => {
//     console.log(response.data)
// });

//one can go further and grab a user from the list we get
//by doing this...
//---------------------------GRABS A SPECIFIC USER DATA-------------------------------//
// axios.get('https://gorest.co.in/public/v1/users/4020')
// //Resolve a promise
// //Now do something with the promise
// .then(response => {
//     console.log(response.data)
// });

// //------------------FETCHING/GETTING DATA----------------------//
axios.get('https://marcusbassportfolioserver.herokuapp.com/customers')
    .then(response => {
        console.log('RESPONSE', response)
})
    .catch(error => {
        console.log('ERROR', error)
});

// // //-------------------PUTTING DATA--------------------//
// axios.put('https://marcusbassportfolioserver.herokuapp.com/customers/1', {
//       'email': 'taw@tehmwashington.com',
//       'first_name': 'Tim',
//       'last_name': 'Yep',
//       'ip': '101.202.303',
//       'latitude': 155100200,
//       'longitude': 200140330,
//       'created_at': '10/28/2021',
//       'updated_at': '10/28/2021'
// })
//     .then(response => {
//         console.log('RESPONSE', response)
//     })
//     .catch(error => {
//         console.log('ERROR', error)
//     })
//----------------------------DELETE---------------------------------//
// axios.delete('https://marcusbassportfolioserver.herokuapp.com/customers/12') 
// .then(response => {
//         console.log('RESPONSE', response)
// })
//     .catch(error => {
//         console.log('ERROR', error)
// })
//-----------------------------POST NEW-----------------------//
// axios.post('https://marcusbassportfolioserver.herokuapp.com/customers', {
//       'email': 'ducks@quackle.com',
//       'first_name': 'Tim',
//       'last_name': 'Washington',
//       'ip': 'no.more.functions.2',
//       'latitude': 'broken-by-arrows',
//       'longitude': 'out-staging-lectures',
//       'created_at': '10/28/2021',
//       'updated_at': '10/28/2021'
// })
//     .then(response => {
//         console.log('RESPONSE', response)
//     })
//     .catch(error => {
//         console.log('ERROR', error)
//     })