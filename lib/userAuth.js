const User = require('../models/user');

function userAuth(req, res, next) {
  if(!req.session.userId) return next(); // if theres no user id then go to the middle routes

  User
    .findById(req.session.userId)
    .populate('recipes favorites') // FOR USER  FAVORITNG
    .then(user => {
      res.locals.isAuthenticated = true; // this now means every render that you use will have locals
      res.locals.currentUser = user; // on everysingle render/page I have a boolean to tell me if the user is loggedin and is authentic?
      req.currentUser = user;

      next();
    });
}

module.exports = userAuth;
