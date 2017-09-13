// mongoose has to be required in order for models to work
const mongoose = require('mongoose');

const commentsSchema = new mongoose.Schema({
  text: { type: String },
  rating: {type: Number},
  user: { type: mongoose.Schema.ObjectId, ref: 'User' }
});

const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ingredients: [{ type: String, required: true }], //square brackets indicates an array
  method: [{ type: String, required: true }], //square brackets indicates an array
  recipeType: { type: String },
  image: { type: String, required: true },
  tastingNotes: { type: String, maxlength: 380 },
  user: { type: mongoose.Schema.ObjectId, ref: 'User' },
  comments: [ commentsSchema ]
});

// ARRAY CREATED FOR INGREDIENTS
recipeSchema.path('ingredients')
  .set(function createIngredientArray(ingredients) {
    return ingredients.split('\n'); // split used to turn into an array
  });

recipeSchema.virtual('ingredientsString')
  .get(function getIngredientsString() {
    return this.ingredients.join('\n');
  });

// ARRAY CREATED FOR METHOD
recipeSchema.path('method')
  .set(function createMethodArray(method) {
    return method.split('\n');
  });

recipeSchema.virtual('methodString')
  .get(function getMethodString() {
    return this.method.join('\n');
  });

// if you dont export then JS cannot find anything to make functions work
module.exports = mongoose.model('Recipe', recipeSchema);
