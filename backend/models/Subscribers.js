const mongoose = require('mongoose')
const { Schema } = mongoose

const suscribeSchema = new Schema({
  suscriber:{
    type: Schema.Types.ObjectId,
    ref:'User'
  },
  plan: {
    type: Schema.Types.ObjectId,
    ref: ''
  }
})