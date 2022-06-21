import mongoose from 'mongoose'

const Schema = mongoose.Schema

const attendeeSchema = new Schema({
  name: String,
  company: String,
  email: String,
  registered: {
    type: Date,
    default: Date.now()
  }
}, { autoCreate: false, _id: false })

export default attendeeSchema
