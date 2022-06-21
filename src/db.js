import mongoose from 'mongoose'

export default function connectToDB () {
  const url = process.env.MONGO_URL || 'mongodb://localhost:27017/suCasa-database'

  mongoose
    .connect(
      url,
      { useNewUrlParser: true }
    )
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err))
}
