const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
mongoose.connect(dbURI, { useMongoClient: true });

const Recipe = require('../models/recipe');

Recipe.collection.drop();

Recipe
  .create([{
    name: 'Smashed Asparagus Avocado',

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
  },{
    name: 'Baked Avocado Pie',

    ingredients: ['1	ripe, Fresh California Avocado, seeded, peeled and mashed', '1/2 cup	lemon juice','1	(14 oz.) can sweetened condensed milk', '1	(9-inch) prepared graham cracker pie crust','As needed	Whipped cream, for garnish','As needed	Sliced almonds, for garnish'],

    method: ['Blend avocado, lemon juice', 'lemon zest and sweetened condensed milk until smooth.', 'Pour mixture into prepared pie crust.', 'Top with whipped cream and sliced almonds, if desired.','Place pie in refrigerator for 3-4 hours and allow to set.','Slice and serve.','Serving Suggestion: Use a pastry bag to pipe the whipped cream onto the pie like a pro!'],

    recipeType: 'Baked',

    tastingNotes: 'Aesthetically pleasing!',

    image: 'https://www.californiaavocado.com/getattachment/703df9ac-4ecd-4ba0-b2f4-54fc1462bd6b/California-Summer-Avocado-Pie'
  },{
    name: 'Avocado & Lemon Sorbet',

    ingredients: ['2 cups unsweetened almond milk','2 ripe avocados','3/4 cup Swerve (or other natural sweetener)','2 TBS lime juice','1 tsp mango extract or other extract','½ tsp Celtic sea salt (keeps it soft)'],

    method: ['Place the ingredients in a food processor (I use my beloved BlendTec blender, on sale now!) and puree until very smooth.', 'Transfer the mixture to the chilled container of your ice cream machine (click HERE to find the one I love...','I make ice cream so much, I broke mine and they sent me a new one for FREE! It is also ½ off now.) and make according to the manufacturers instructions.','Once complete, transfer to a chilled container and store in the freezer.'],

    recipeType: 'Frozen',

    tastingNotes: 'Refreshing!!',

    image: 'http://mariamindbodyhealth.com/wp-content/uploads/2013/08/IMG_3305.jpg'
  },{
    name: 'Sour Avocado Shots',

    ingredients: ['4 oranges','2 lemons','one hand of fresh mint','1 avocado','Vodka (Optional)'],

    method: ['Place the ingredients in a food processor (I use my beloved BlendTec blender, on sale now!) and puree until very smooth.', 'Transfer the mixture to the chilled container of your ice cream machine (click HERE to find the one I love...','I make ice cream so much, I broke mine and they sent me a new one for FREE! It is also ½ off now.) and make according to the manufacturers instructions.','Once complete, transfer to a chilled container and store in the freezer.'],

    recipeType: 'Blended',

    tastingNotes: 'Alcoholic! Sour and refreshing!',

    image: 'http://1.bp.blogspot.com/-xsuSlZo_HhQ/Uppi0jh-V8I/AAAAAAAAHfI/SsaQRsus-AU/s1600/130628-2045-8905.jpg'
  },{
    name: 'Chopped Chicken Avocado Filling!',

    ingredients: ['3 large avocados','Juice of 1 lime','1 tsp cumin','½ tsp ground coriander','2 chicken breasts (cooked) or 2.5 cups of shredded chicken','5 strips of bacon (I use turkey bacon)'],

    method: ['Begin by cooking your bacon to your liking. Mine generally takes about 5 minutes per side on Medium-Medium high heat.', 'Mash up your avocado with a fork in a large bowl. Add lime and spices (reserve the salt for the very end).','Mix in chicken, bacon and pecans.','Salt to taste.','Serve over greens, in a wrap, or on bread as a sandwich.'],

    recipeType: 'Chopped',

    tastingNotes: 'Alcoholic! Sour and refreshing!',

    image: 'http://wholesomelicious-8101.kxcdn.com/wp-content/uploads/2017/06/Avocado-Chicken-Salad-with-Bacon-Photo--1024x683.jpg'
  },{
    name: 'Avocado Rissotto',

    ingredients: ['1tbsp oil','1 onion, diced','3 cloves garlic, minced','190g arborio rice','1 vegetable stock cube','1l hot water','2 avocados','100g edam cheese, grated or diced','2tbsp fresh parsley, chopped','1tbsp lime juice','Salt & Black pepper'],

    method: ['Heat the oil in a large frying pan, wok or risotto pan, and cook the onion and garlic over a medium-low heat for 5 minutes, until soft and translucent. Add the rice and cook for a further 2 minutes.','Mix the stock cube with about 150ml hot water, and add to the pan. Cook, stirring, until the liquid has nearly all been absorbed.',' Add more hot water around 150ml at a time, again waiting for it to be mostly absorbed before adding more, and stirring regularly.','Continue adding water until the rice is cooked - I ended up using just over a litre, but you might need slightly more or less.','Meanwhile, coarsely mash the avocado with a fork, along with the lime juice and salt and pepper.','When the rice is cooked, add the edam, then the mashed avocado and chopped parsley, and mix until combined. Serve warm.'],

    recipeType: 'Baked',

    tastingNotes: 'Warm & wholesome!',

    image: 'http://www.amuse-your-bouche.com/wp-content/uploads/2013/05/Avocado-risotto-1-1024x714.jpg'
  },{
    name: 'Avocado Rissotto',

    ingredients: ['1tbsp oil','1 onion, diced','3 cloves garlic, minced','190g arborio rice','1 vegetable stock cube','1l hot water','2 avocados','100g edam cheese, grated or diced','2tbsp fresh parsley, chopped','1tbsp lime juice','Salt & Black pepper'],

    method: ['Heat the oil in a large frying pan, wok or risotto pan, and cook the onion and garlic over a medium-low heat for 5 minutes, until soft and translucent. Add the rice and cook for a further 2 minutes.','Mix the stock cube with about 150ml hot water, and add to the pan. Cook, stirring, until the liquid has nearly all been absorbed.',' Add more hot water around 150ml at a time, again waiting for it to be mostly absorbed before adding more, and stirring regularly.','Continue adding water until the rice is cooked - I ended up using just over a litre, but you might need slightly more or less.','Meanwhile, coarsely mash the avocado with a fork, along with the lime juice and salt and pepper.','When the rice is cooked, add the edam, then the mashed avocado and chopped parsley, and mix until combined. Serve warm.'],

    recipeType: 'Baked',

    tastingNotes: 'Warm & wholesome!',

    image: 'http://www.amuse-your-bouche.com/wp-content/uploads/2013/05/Avocado-risotto-1-1024x714.jpg'

  }])
  .then(avocado => console.log(`${avocado.length} avocados created!`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
