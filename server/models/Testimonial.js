const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  college: { type: String, required: true },
  course: { type: String, required: true },
  year: { type: Number, required: true },
  message: { type: String, required: true },
  image: { type: String },
  language: { type: String, enum: ['english', 'marathi'], default: 'english' }
});

module.exports = mongoose.model('Testimonial', testimonialSchema);