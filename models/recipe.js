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

// if you dont export then JS cannot find anything to make functions work
module.exports = mongoose.model('Recipe', recipeSchema);
