const User = require('../models/user');

function sessionsNew(req, res) {
  res.render('sessions/new');
}
// CREATE
function sessionsCreate(req, res) {
  User
    .findOne({ email: req.body.email })
    .then(user => {
      if(!user || !user.validatePassword(req.body.password)) {
        req.flash('danger', 'Invalid credentials' ); //if we cant find a user OR validate password returns false then, send an error page
        return res.redirect('/login');
      }
      // user authentication - store the users id into the cookie
      req.session.userId = user.id; // the users id is now store onto the browser - we can now always see this in the terminal
      res.redirect('/');
    });
}
// this is when the user handles the form we are creating a session
// find the userby the users email address and then check to see that the password matches the email

// DELETE
function sessionsDelete(req,res) {
  req.session.regenerate(() => res.redirect('/')); // this is not going to delete the session cookie itself but its going to create a new empty cookie and redirect to the homepage.
}

module.exports = {
  new: sessionsNew,
  create: sessionsCreate,
  delete: sessionsDelete
};
