const express = require('express');
const router = express.Router();
const Testimonial = require('../models/Testimonial');

// Get all testimonials
router.get('/', async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.json(testimonials);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new testimonial
router.post('/', async (req, res) => {
  const testimonial = new Testimonial({
    name: req.body.name,
    college: req.body.college,
    course: req.body.course,
    year: req.body.year,
    message: req.body.message,
    image: req.body.image,
    language: req.body.language
  });

  try {
    const newTestimonial = await testimonial.save();
    res.status(201).json(newTestimonial);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;