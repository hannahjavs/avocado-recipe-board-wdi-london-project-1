const User = require('../models/user');

function userAuth(req, res, next) {
  if(!req.session.userId) return next();

  User
    .findById(req.session.userId)
    .populate('avocados favorites')
    .then(user => {

      // if the user hasn't been found (perhaps if they have deleted their account)
      // log them out
      if(!user) req.session.regenerate(() => {
        req.flash('warning', 'Your session has expired. Please log in again.');
        return res.redirect('/login');
      });

      res.locals.isAuthenticated = true;
      res.locals.currentUser = user;
      req.currentUser = user;

      next();
    });
}

module.exports = userAuth;
