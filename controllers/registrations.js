// require the model
const User = require('../models/user');

// create a new registration
function registrationsNew(req, res) {
  res.render('registrations/new'); // render this to the screen
}

// create a new user
function registrationsCreate(req, res) {
  User
    .create(req.body)
    .then(() => res.redirect('/')) // redirect to the homepage
    .catch(err => res.render('error', { err })); //then catch all errors that occur
}

// export the function to make it work?
module.exports = {
  create: registrationsCreate,
  new: registrationsNew
};
