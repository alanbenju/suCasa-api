import mongoose from 'mongoose'
const Schema = mongoose.Schema

const speakerSchema = new Schema({
  name: String,
  company: String,
  email: String,
  bio: String
}, { autoCreate: false, _id: false })

export default speakerSchema
