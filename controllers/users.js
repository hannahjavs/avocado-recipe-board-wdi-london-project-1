const User = require('../models/user');
// SHOW
function usersShow(req, res) {
  User
    .findById(req.params.id)
    .populate('avocados favorites')
    .exec()
    .then(user => res.render('users/show', { user }))
    .catch(err => res.render('error', { err }));
}
// EDIT
function usersEdit(req, res) {
  User
    .findById(req.params.id)
    .exec()
    .then(user => res.render('users/edit', { user }))
    .catch(err => res.render('error', { err }));
}
// UPDATE
function usersUpdate(req, res) {
  User
    .findById(req.params.id)
    .exec()
    .then(user => {
      user = Object.assign(user, req.body);
      return user.save();
    })
    .catch(err => res.render('error', { err }));
}
// DELETE
function usersDelete(req, res) {
  User
    .findById(req.params.id)
    .exec()
    .then(user => user.remove())
    .catch(err => res.render('error', { err }));
}

module.exports = {
  show: usersShow,
  edit: usersEdit,
  update: usersUpdate,
  delete: usersDelete
};
