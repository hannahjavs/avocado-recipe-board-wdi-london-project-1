const router = require('express').Router();
const secureRoute = require('../lib/secureRoute');

const recipes = require('../controllers/recipes');
const registrations = require('../controllers/registrations');
const sessions = require('../controllers/sessions');

// here we have to come out of the folder and go to models ../models/recipe

// RENDER THE HOMEPAGE WITH THE URL /
router.get('/', (req, res) => res.render('home', { isHomepage: true }));

//INDEX
router.route('/recipes')
  .get(recipes.index)
  .post(secureRoute, recipes.create); // this is a secureRoute to check that you have a user id - if you are an authentic logged in user you may pass.

// NEW
router.route('/recipes/new')
  .get(secureRoute, recipes.new);

// ID
router.route('/recipes/:id')
  .get(recipes.show)
  .put(secureRoute, recipes.update)
  .delete(secureRoute, recipes.delete);

// EDIT
router.route('/recipes/:id/edit')
  .get(secureRoute, recipes.edit);

// REGISTER
router.route('/register')
  .get(registrations.new) // get the register form
  .post(registrations.create); // register a new user when you submit the register form

// LOGIN
router.route('/login')
  .get(sessions.new)
  .post(sessions.create);

// COMMENTS ADD
router.route('/recipes/:id/comments')
  .post(recipes.commentsCreate);

// COMMENTS DELETE
// Inside config/routes.js add a route for the delete request
router.delete('/recipes/:id/comments/:commentId', recipes.commentsDelete);
// Here the :id will be the id of the recipe, and the :commentId is the id of the comment we want to delete.


// DELETE
router.get('/logout', sessions.delete); // when we log out we will delete the session and logout

// EXPORT THE ROUTER
module.exports = router;
