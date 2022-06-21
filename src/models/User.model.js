import mongoose from 'mongoose'
const Schema = mongoose.Schema

const schema = new Schema({
  name: String,
  company: String,
  email: { type: String, unique: true }
}, { timestamps: true })

const UserModel = mongoose.model('User', schema)

export default UserModel
