const bcrypt = require('bcryptjs');

// Initialize empty array to hold users
const users = [];

module.exports = {
    register: (req, res) => {
        // destructure the request body object into individual variables
        const { username, email, firstName, lastName, password } = req.body;
  
        // this generates a random string to attach to the next variable. Helps with encryption.
        // the number argument represents complex the encryption string will be. Higher numbers have longer load times
        const salt = bcrypt.genSaltSync(5);

        // this bcrypt function generates a random hash string based on the provided password and salts it
        const passwordHash = bcrypt.hashSync(password, salt);

        // we create a user object, using the encrypted password instead of the plain text password
        let user = {
          username,
          email,
          firstName,
          lastName,
          passwordHash
        }

        // that user is then saved to the array
        users.push(user)

        // here we make a copy of that user with the spread operator
        let safeUser = {...user};

        // we already saved the user with the password into our users array, so here we delete the passwordHash key
        // although it's encrypted, you NEVER want to expose a user's password to a client app
        delete safeUser.passwordHash

        // give a happy status code and send the user object without an exposed password back to the client
        res.status(200).send(safeUser)
    },
  login: (req, res) => {

    // destructure the request body into individual variables
    const { username, password } = req.body;
    
    // set a variable to find the user trying to login
    let targetUser = users.find(user => user.username === username);
    
    if (!targetUser) {
        // If the target user couldn't be found, return a 404 status code and error message
        res.status(404).send("A user with that username could not be found.");
    } else {
        // this bcrypt function compares the password from the request body with the target user's password
        // returns true if they match, false if they don't
        const authenticated = bcrypt.compareSync(password, targetUser.password);

        // check if the user was able to log in
        if (authenticated) {
            // copy that user data into a new variable
            let currentUser = {...targetUser};

            // remove that user's password from the new variable
            // the user created still has access to the password so we made a copy to send to the frontend
            // although its encrypted, you never want to expose a user's password to a client app
            delete currentUser.password

            // send the user object without the password
            res.status(200).send(currentUser);
        } else {
            // if the password doesn't match
            res.status(400).send("Invalid username or password")
        }
    }
  }
}