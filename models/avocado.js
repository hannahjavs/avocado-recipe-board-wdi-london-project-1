const mongoose = require('mongoose');

const avocadoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ingredients: { type: String, required: true },
  method: { type: String, required: true },
  image: { type: String, required: true },
  tastingNotes: { type: String, maxlength: 380 },
  user: { type: mongoose.Schema.ObjectId, ref: 'User' }
});

avocadoSchema.methods.isOwnedBy = function isOwnedBy(user) {
  if(!user) return false;
  return !!user.avocados.find(avocado => avocado.id === this.id);
};

module.exports = mongoose.model('Avocado', avocadoSchema);
