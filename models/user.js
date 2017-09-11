const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// there is a unique on here because it is for password HASHING
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// A virtual has two methods its a SET and a GET
// SET means we are holding it somewhere for a bit so we can check that the password and the confirmation match!
userSchema
  .virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation; // hold onto it for a moment
  });

// now we want to run another lifecycle hook
// pre validate
userSchema.pre('validate', function checkPasswordConfirmation(next) {
  if(this.isModified('password') && this._passwordConfirmation !== this.password) this.invalidate('passwordConfirmation', 'does not match');
  next(); // if everything is fine then the data is saved
});


// lifecycle hook (mongoose middleware) - pre save
userSchema.pre('save', function hashPassword(next) {
  if(this.isModified('password')) { // this is to stop is hashing over itself and having a hash of a hash
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
  }
  next();
});
// this.password will be the users text password
// the more salt there is on a password the harder it is to hash a password - this is the number 8 for the level of salting.
// 8 is the default setting for salting


// custom prototype method
userSchema.methods.validatePassword = function validatePassword(password) {
  return bcrypt.compareSync(password, this.password);
};


// lifecycle hook
// pre validate, validations, post validate, pre save, saved, post save
// pre and remove, delete data m post remove


module.exports = mongoose.model('User', userSchema);
