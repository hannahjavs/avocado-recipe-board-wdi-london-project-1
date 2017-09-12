const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
mongoose.connect(dbURI, { useMongoClient: true });

const Recipe = require('../models/recipe');

Recipe.collection.drop();

Recipe
  .create([{
    name: 'Nutty Smashed Avocado',

    ingredients: ['2 cups fresh asparagus, halved and woody stems sliced off', '1 1/2 cups cooked or canned chickpeas (drained and rinsed if using cans)','1 clove garlic','1-2 lemons, squeezed (about 1/4 cup fresh juice)','1/2 large avocado','1/4 cup pumpkin seeds', 'raw (salted and sprouted used) salt and pepper to taste'],

    method: ['1. Halve your asparagus and slice off any woody stems. Bring a large pot of water to a boil and add asparagus. Boil for 3-5 minutes, until moderately tender, but not mushy. Drain water and add asparagus to high speed blender.','2. Also add in the avocado, chickpeas, lemon juice, pumpkin seeds and a pinch of salt and pepper.','3. Blend from low to high until smooth, about 1-3 minutes of blending depending on your blender power.', '4. Taste test and add additional salt and pepper and spices to taste.', 'Serve warm, freshly blended or chill in the fridge for a firmer texture. Serve as a dip or a spread for sandwiches and wraps.'],

    recipeType: 'Mashed',

    tastingNotes: 'Nutty tasting & good on toast!',

    image: 'http://3.bp.blogspot.com/-OKtGyU23ec8/UzsWDcj9l3I/AAAAAAAA4Oo/mRB27ttmVek/s1600/2014_03_13_matcha_9999_164asparagus-dip.jpg'
  },{
    name: 'Baked Eggy Avocado',

    ingredients: ['1 avocado, halved and pitted','2 Eggs','salt & pepper', '1/4 cup crumbled cooked bacon'],

    method: ['Preheat oven to 425 degrees F (220 degrees C).','Place each avocado half in a ramekin.','Crack 1 egg into each avocado half; season with salt, black pepper, and cayenne pepper.','...Bake in the preheated oven until entire egg is cooked through, about 15 minutes.','Sprinkle each avocado with bacon and chives.'],

    recipeType: 'Baked',

    tastingNotes: 'If you have never tried a baked avocado, now is your chance!!!',
    image: 'https://downshiftology.com/wp-content/uploads/2016/02/baked-eggs-in-avocado-6.jpg'
  },{
    name: 'Spicy Avocado Dip',

    ingredients: ['Cacao nibs, honey'],

    method: ['Add chillis!'],

    recipeType: 'Mashed',

    tastingNotes: 'Creamy spicy metabolism booster!',

    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf7Ad-foiJw8ivN7iuy-ynj6dqAwVLlxLhpTyVsaLxyiYbiCGP'
  },{
    name: 'Chocolate Avocado Pudding',

    ingredients: ['Cacao nibs, honey'],

    method: ['Blend the avocado and ...'],

    recipeType: 'Blended',

    tastingNotes: 'Healthier alternative to just a normal chocolate pudding desert',

    image: 'http://cdn-maf2.heartyhosting.com/sites/muscleandfitness.com/files/styles/full_node_image_1090x614/public/media/1109-chocolate-avocado-pudding-protein-whey.jpg?itok=2AYQPoYN'
  },{
    name: 'Chocolate Avocado Cake',

    ingredients: ['3 cups all-purpose flour', '6 Tablespoons unsweetened cocoa powder', '1/2 teaspoon salt, 2 teaspoons baking', '2 teaspoons baking soda', '2 cups granulated sugar', '1/4 cup vegetable oil (I used almond oil)', '1/2 cup soft avoca do, well mashed','about 1 medium avocado', '2 cups water', '2 Tablespoons white vinegar', '2 teaspoons vanilla extract'],

    method: ['Blend the avocado and ...'],

    recipeType: 'Baked',

    tastingNotes: 'Healthier alternative to just a normal chocolate pudding desert',

    image: 'http://farm3.static.flickr.com/2482/3723278915_ee25c57870.jpg'
  },{
    name: 'Nutty Smashed Avocado',

    ingredients: ['2 cups fresh asparagus, halved and woody stems sliced off', '1 1/2 cups cooked or canned chickpeas (drained and rinsed if using cans)','1 clove garlic','1-2 lemons, squeezed (about 1/4 cup fresh juice)','1/2 large avocado','1/4 cup pumpkin seeds', 'raw (salted and sprouted used) salt and pepper to taste'],

    method: ['1. Halve your asparagus and slice off any woody stems. Bring a large pot of water to a boil and add asparagus. Boil for 3-5 minutes, until moderately tender, but not mushy. Drain water and add asparagus to high speed blender.','2. Also add in the avocado, chickpeas, lemon juice, pumpkin seeds and a pinch of salt and pepper.','3. Blend from low to high until smooth, about 1-3 minutes of blending depending on your blender power.', '4. Taste test and add additional salt and pepper and spices to taste.', 'Serve warm, freshly blended or chill in the fridge for a firmer texture. Serve as a dip or a spread for sandwiches and wraps.'],

    recipeType: 'Mashed',

    tastingNotes: 'Nutty tasting & good on toast!',

    image: 'https://static.independent.co.uk/s3fs-public/styles/story_medium/public/thumbnails/image/2016/06/10/14/falafels-avocado-tahini-dip-middle-eastern-vegetarian-cookbook.jpg'
  },{
    name: 'Chopped Lemon Avocado On Rye Bread',

    ingredients: ['1 avocado', '1-2 lemons, squeezed (about 1/4 cup fresh juice)','1/2 large avocado','1/4 cup pumpkin seeds', 'salt and pepper to taste'],

    method: ['Chop avocado into slices', 'toast tye bread (or not)', 'squeeze lemon on top', 'add salt & pepper'],

    recipeType: 'Chopped',

    tastingNotes: 'Lemoney!!!',

    image: 'https://fullplateliving.org/sites/default/files/styles/panopoly_image_original/public/avocado-istock_000065097093.jpg?itok=BwoAFa6P'
  },{
    name: 'Kola House’s Avocado Pizza',

    ingredients: ['Cilantro Salsa:', '2 cups cilantro','1/2 large avocado','1/4 diced young onion', '3 Tbsp diced jalapeno with seeds','3 Tbsp lemon juice, freshly squeezed','2 Tbsp kosher salt','Pizza:','1 pizza dough or crust of your choice','1 medium size spring onion sliced1 medium size spring onion sliced','2 Tbsp cilantro chopped','1 Tbsp diced onion','1 Tbsp lemon juice','1 avocado, pitted, sliced'],
    method: ['Chop avocado into slices', 'toast tye bread (or not)', 'squeeze lemon on top', 'add salt & pepper'],

    recipeType: 'Baked',

    tastingNotes: 'Doughy!',

    image: 'https://www.wellandgood.com/wp-content/uploads/2017/06/avocado-pizza.jpg'
  }])
  .then(avocado => console.log(`${avocado.length} avocados created!`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
