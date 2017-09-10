const router = require('express').Router();
const secureRoute = require('../lib/secureRoute');

const avocados = require('../controllers/avocados');
const registrations = require('../controllers/registrations');
const sessions = require('../controllers/sessions');

router.get('/', (req, res) => res.render('home', { isHomepage: true }));

router.route('/avocados')
  .get(avocados.index)
  .post(secureRoute, avocados.create); // this is a secureRoute to check that you have a user id - if you are an authentic logged in user you may pass.

router.route('/avocados/new')
  .get(secureRoute, avocados.new);

router.route('/avocados/:id')
  .get(avocados.show)
  .put(secureRoute, avocados.update)
  .delete(secureRoute, avocados.delete);

router.route('/avocados/:id/edit')
  .get(secureRoute, avocados.edit);

router.route('/register')
  .get(registrations.new) // get the register form
  .post(registrations.create); // register a new user when you submit the register form

router.route('/login')
  .get(sessions.new)
  .post(sessions.create);

router.get('/logout', sessions.delete); // when we log out we will delete the session and logout

module.exports = router;
