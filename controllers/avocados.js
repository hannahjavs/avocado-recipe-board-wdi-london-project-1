const Avocado = require('../models/avocado');
// INDEX / HOMEPAGE / INDEX OF AVOCADOS
function avocadosIndex(req, res) {
  Avocado
    .find()
    .sort({ name: 1 })
    .exec()
    .then(avocados => {
      // get countries from the avocado recipes and create a unique array of countries for the dropdown
      const countries = Array.from(new Set(avocados.map(avocado => avocado.origin).sort()));

      // if there is an origin in the querystring filter the results
      if(req.query.origin) avocados = avocados.filter(avocado => avocado.origin === req.query.origin);

      res.render('avocados/index', { avocados, countries, selectedCountry: req.query.origin });
    })
    .catch(err => res.render('error', { err }));
}
// NEW
function avocadosNew(req, res) {
  res.render('avocados/new');
}
// SHOW
function avocadosShow(req, res) {
  Avocado
    .findById(req.params.id)
    .populate('user')
    .exec()
    .then(avocado => res.render('avocados/show', { avocado }))
    .catch(err => res.render('error', { err }));
}
// CREATE
function avocadosCreate(req, res) {
  // before we create the avocado...
  req.body.user = req.currentUser;  // the logged in user doesnt have to log in to create a new avocado?

  Avocado
    .create(req.body)
    .then(() => res.redirect('/avocados'))
    .catch(err => res.render('error', { err }));
}
// EDIT
function avocadosEdit(req, res) {
  Avocado
    .findById(req.params.id)
    .exec()
    .then(avocado => res.render('avocados/edit', { avocado }))
    .catch(err => res.render('error', { err }));
}
// UPDATE
function avocadosUpdate(req, res) {
  Avocado
    .findById(req.params.id)
    .exec()
    .then(avocado => {
      avocado = Object.assign(avocado, req.body);
      return avocado.save();
    })
    .then(avocado => res.redirect(`/avocados/${avocado.id}`))
    .catch(err => res.render('error', { err }));
}
// DELETE
function avocadosDelete(req, res) {
  Avocado
    .findById(req.params.id)
    .exec()
    .then(avocado => avocado.remove())
    .then(() => res.redirect('/avocados'))
    .catch(err => res.render('error', { err }));
}

module.exports = {
  index: avocadosIndex,
  new: avocadosNew,
  show: avocadosShow,
  create: avocadosCreate,
  edit: avocadosEdit,
  update: avocadosUpdate,
  delete: avocadosDelete
};
