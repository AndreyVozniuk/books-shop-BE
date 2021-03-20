import mongoose from 'mongoose'

const {Schema, model} = mongoose

const schema = new Schema({
  title: {type: String, required:true},
  author: {type: String, required:true},
  category: {type: String, required:true},
  price: {type: Number, required:true},
})

export default model('Books', schema)
