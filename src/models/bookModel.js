import mongoose from 'mongoose'

const {Schema, model} = mongoose

const bookSchema = new Schema({
  title: {type: String, required:true},
  author: {type: String, required:true},
  category: {type: String, required:true},
  price: {type: Number, required:true},
  description: {type: String, required: false},
  imageLink: {type: String, required: false}
})

export default model('Books', bookSchema)
