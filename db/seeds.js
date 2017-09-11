const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
mongoose.connect(dbURI, { useMongoClient: true });

const Recipe = require('../models/recipe');

Recipe.collection.drop();

Recipe
  .create([{
    name: 'Nutty Smashed Avocado',
    ingredients: 'Pine nuts',
    method: 'Mash the avocado with a fork',
    recipeType: 'Mashed',
    tastingNotes: 'Nutty tasting good on toast!',
    image: 'https://static.independent.co.uk/s3fs-public/styles/story_medium/public/thumbnails/image/2016/06/10/14/falafels-avocado-tahini-dip-middle-eastern-vegetarian-cookbook.jpg'
  },{
    name: 'Baked Eggy Avocado',
    ingredients: 'Eggs',
    method: 'Bake the avocado in the oven',
    recipeType: 'Baked',
    tastingNotes: 'If youve never tried a baked avocado now is your chance!',
    image: 'https://downshiftology.com/wp-content/uploads/2016/02/baked-eggs-in-avocado-6.jpg'
  },{
    name: 'Spicy Avocado Dip',
    ingredients: 'Chillis',
    method: 'Add chillis!',
    recipeType: 'Mashed',
    tastingNotes: 'Creamy spicy metabolism booster!',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf7Ad-foiJw8ivN7iuy-ynj6dqAwVLlxLhpTyVsaLxyiYbiCGP'
  },{
    name: 'Chocolate Avocado Pudding',
    ingredients: 'Cacao nibs, honey',
    method: 'Blend the avocado and ...',
    recipeType: 'Blended',
    tastingNotes: 'Healthier alternative to just a normal chocolate pudding desert',
    image: 'http://cdn-maf2.heartyhosting.com/sites/muscleandfitness.com/files/styles/full_node_image_1090x614/public/media/1109-chocolate-avocado-pudding-protein-whey.jpg?itok=2AYQPoYN'
  }])
  .then(avocado => console.log(`${avocado.length} avocados created!`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
