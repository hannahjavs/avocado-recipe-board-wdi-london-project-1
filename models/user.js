const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  favorites: [{ type: mongoose.Schema.ObjectId, ref: 'Avocado' }]
});

userSchema
  .virtual('avocados', {
    ref: 'Avocado',
    localField: '_id',
    foreignField: 'user'
  });

userSchema
  .virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation;
  });

// lifecycle hooks (mongoose middleware)
// pre validate
userSchema.pre('validate', function checkPasswordConfirmation(next) {
  if(this.isModified('password') && this._passwordConfirmation !== this.password) this.invalidate('passwordConfirmation', 'does not match');
  next();
});

// pre save
userSchema.pre('save', function hashPassword(next) {
  if(this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
  }
  next();
});

// custom prototype method
userSchema.methods.validatePassword = function validatePassword(password) {
  return bcrypt.compareSync(password, this.password);
};

userSchema.methods.hasFavorited = function hasFavorited(avocado) {
  if(!avocado) return false;
  return !!this.favorites.find(_avocado => avocado.id === _avocado.id);
};

module.exports = mongoose.model('User', userSchema);
