
const mongoose = require('mongoose')

const ratingSchema = new mongoose.Schema({
  rating: Number,
  review: String,
  userId: String
})

module.exports = mongoose.model('Rating', ratingSchema)
