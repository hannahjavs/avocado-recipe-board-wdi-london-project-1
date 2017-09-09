const router = require('express').Router();
const secureRoute = require('../lib/secureRoute');

const avocados = require('../controllers/avocados');
const users = require('../controllers/users');
const registrations = require('../controllers/registrations');
const sessions = require('../controllers/sessions');

router.get('/', (req, res) => res.render('home', { isHomepage: true }));

router.route('/avocados')
  .get(avocados.index)
  .post(secureRoute, avocados.create);

router.route('/avocados/new')
  .get(secureRoute, avocados.new);

router.route('/avocados/:id')
  .get(avocados.show)
  .put(secureRoute, avocados.update)
  .delete(secureRoute, avocados.delete);

router.route('/avocados/:id/edit')
  .get(secureRoute, avocados.edit);

router.route('/avocados/:id/favorite')
  .post(secureRoute, avocados.favorite);

router.route('/register')
  .get(registrations.new)
  .post(registrations.create);

router.route('/login')
  .get(sessions.new)
  .post(sessions.create);

router.route('/users/:id')
  .get(users.show)
  .put(secureRoute, users.update)
  .delete(secureRoute, users.delete);

router.route('/users/:id/edit')
  .get(secureRoute, users.edit);

router.get('/logout', sessions.delete);

module.exports = router;
