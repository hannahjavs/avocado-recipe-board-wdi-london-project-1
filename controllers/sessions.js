const User = require('../models/user');

function sessionsNew(req, res) {
  // store the page that the user has come from in the session
  req.session.returnTo = req.headers.referer;
  res.render('sessions/new');
}

function sessionsCreate(req, res) {
  User
    .findOne({ email: req.body.email })
    .then(user => {
      if(!user || !user.validatePassword(req.body.password)) {
        req.flash('danger', 'Invalid credentials');
        return res.redirect('/login');
      }
      // user is authenticated
      req.session.userId = user.id;

      // return the user back to the page that they came from
      // remove the reference from the session
      const returnTo = req.session.returnTo;
      delete req.session.returnTo;

      res.redirect(returnTo);
    });
}

function sessionsDelete(req, res) {
  req.session.regenerate(() => res.redirect('/'));
}

module.exports = {
  new: sessionsNew,
  create: sessionsCreate,
  delete: sessionsDelete
};
