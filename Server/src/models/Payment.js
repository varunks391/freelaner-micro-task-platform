
const mongoose = require('mongoose')

const paymentSchema = new mongoose.Schema({
  amount: Number,
  userId: String,
  status: String
})

module.exports = mongoose.model('Payment', paymentSchema)
