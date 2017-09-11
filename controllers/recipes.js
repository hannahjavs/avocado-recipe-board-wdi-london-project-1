const Recipe = require('../models/recipe');
// INDEX / HOMEPAGE / INDEX OF AVOCADOS
function recipesIndex(req, res) {
  Recipe
    .find()
    .sort({ name: 1 })
    .exec()
    .then(recipes => {
      res.render('recipes/index', { recipes });
    })
    .catch(err => res.render('error', { err }));
}
// NEW
function recipesNew(req, res) {
  res.render('recipes/new');
}
// SHOW
function recipesShow(req, res) {
  Recipe
    .findById(req.params.id)
    .populate('user comments.user')
    .exec()
    .then(recipe => res.render('recipes/show', { recipe }))
    .catch(err => res.render('error', { err }));
}
// CREATE
function recipesCreate(req, res) {
  // before we create the recipe...
  req.body.user = req.currentUser;  // the logged in user doesnt have to log in to create a new recipe?

  Recipe
    .create(req.body)
    .then(() => res.redirect('/recipes'))
    .catch(err => res.render('error', { err }));
}
// EDIT
function recipesEdit(req, res) {
  Recipe
    .findById(req.params.id)
    .exec()
    .then(recipe => res.render('recipes/edit', { recipe }))
    .catch(err => res.render('error', { err }));
}
// UPDATE
function recipesUpdate(req, res) {
  Recipe
    .findById(req.params.id)
    .exec()
    .then(recipe => {
      recipe = Object.assign(recipe, req.body);
      return recipe.save();
    })
    .then(recipe => res.redirect(`/recipes/${recipe.id}`))
    .catch(err => res.render('error', { err }));
}
// DELETE
function recipesDelete(req, res) {
  Recipe
    .findById(req.params.id)
    .exec()
    .then(recipe => recipe.remove())
    .then(() => res.redirect('/recipes'))
    .catch(err => res.render('error', { err }));
}
// COMMENTS ADD
function recipesCommentsCreate(req, res) {
  req.body.user = req.currentUser; // Shows user who commented
  Recipe
    .findById(req.params.id)
    .exec()
    .then(recipe => {
      recipe.comments.push(req.body);
      return recipe.save();
    })
    .then(recipe => res.redirect(`/recipes/${recipe.id}`))
    .catch(err => res.render('error', {err}));
}

// Here we are first of all finding the recipe that we want to add a comment to, and then pushing the req.body (the form data containing the text and the rating) and pushing it into the recipe.comments array. We are then saving the recipe and redirecting the user back to the /recipes/:id page.

// COMMENTS DELETE
function recipesCommentsDelete(req, res) {
  Recipe
    .findById(req.params.id)
    .exec()
    .then(recipe => {
      const comment = recipe.comments.id(req.params.commentId);
      comment.remove();
      return recipe.save();
    })
    .then(recipe => res.redirect(`/recipe/${recipe.id}`))
    .catch(err => res.render('error', { err }));
}

// Here we are first of all finding the recipe that contains the comment that we want to delete, then finding the comment that we want to delete inside the recipe.comments array. We then remove it using .remove(), and finally save the recipe. We then direct the user back to the /recipe/:id page.

// Export the recipes functions inside module.exports:
module.exports = {
  index: recipesIndex,
  new: recipesNew,
  show: recipesShow,
  create: recipesCreate,
  edit: recipesEdit,
  update: recipesUpdate,
  delete: recipesDelete,
  commentsCreate: recipesCommentsCreate,
  commentsDelete: recipesCommentsDelete
};
