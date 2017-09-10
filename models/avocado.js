const mongoose = require('mongoose');

const avocadoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  origin: { type: String, required: true },
  image: { type: String, required: true },
  tastingNotes: { type: String, maxlength: 380 },
  user: { type: mongoose.Schema.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Avocado', avocadoSchema);
