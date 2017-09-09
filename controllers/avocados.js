const Cheese = require('../models/avocado');

function avocadosIndex(req, res) {
  Cheese
    .find()
    .sort({ name: 1 })
    .exec()
    .then(avocados => {
      // get countries from the avocados and create a unique array of countries for the dropdown
      const countries = Array.from(new Set(avocados.map(avocado => avocado.origin).sort()));

      // if there is an origin in the querystring filter the results
      if(req.query.origin) avocados = avocados.filter(avocado => avocado.origin === req.query.origin);

      res.render('avocados/index', { avocados, countries, selectedCountry: req.query.origin });
    })
    .catch(err => res.render('error', { err }));
}

function avocadosNew(req, res) {
  res.render('avocados/new');
}

function avocadosShow(req, res) {
  Cheese
    .findById(req.params.id)
    .populate('user')
    .exec()
    .then(avocado => res.render('avocados/show', { avocado }))
    .catch(err => res.render('error', { err }));
}

function avocadosCreate(req, res) {

  req.body.user = req.currentUser;

  Cheese
    .create(req.body)
    .then(() => res.redirect('/avocados'))
    .catch(err => res.render('error', { err }));
}

function avocadosEdit(req, res) {
  Cheese
    .findById(req.params.id)
    .exec()
    .then(avocado => res.render('avocados/edit', { avocado }))
    .catch(err => res.render('error', { err }));
}

function avocadosUpdate(req, res) {
  Cheese
    .findById(req.params.id)
    .exec()
    .then(avocado => {
      avocado = Object.assign(avocado, req.body);
      return avocado.save();
    })
    .then(avocado => res.redirect(`/avocados/${avocado.id}`))
    .catch(err => res.render('error', { err }));
}

function avocadosDelete(req, res) {
  Cheese
    .findById(req.params.id)
    .exec()
    .then(avocado => avocado.remove())
    .then(() => res.redirect('/avocados'))
    .catch(err => res.render('error', { err }));
}

// This requires the user's favorites to be populated (see `lib/userAuth.js`)
function avocadosFavorite(req, res) {
  // if the selected avocado is not in the user's favorites
  if(!req.currentUser.favorites.find(avocado => avocado.id === req.params.id)) {
    // add the avocado id to the user's favorites
    req.currentUser.favorites.push(req.params.id);
  } else {
    // remove the avocado from the user's favorites
    req.currentUser.favorites = req.currentUser.favorites.filter(avocado => avocado.id !== req.params.id);
  }

  // save the user
  req.currentUser.save()
    .then(() => res.redirect('back'));
}

module.exports = {
  index: avocadosIndex,
  new: avocadosNew,
  show: avocadosShow,
  create: avocadosCreate,
  edit: avocadosEdit,
  update: avocadosUpdate,
  delete: avocadosDelete,
  favorite: avocadosFavorite
};
