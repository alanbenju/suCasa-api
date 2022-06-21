import mongoose from 'mongoose'
import speakerSchema from './Speaker.schema'
import attendeeSchema from './Attendee.schema'

const Schema = mongoose.Schema

const schema = new Schema({
  id: Schema.Types.ObjectId,
  presentation: String,
  details: String,
  room: Number,
  speaker: speakerSchema,
  attendees: [attendeeSchema]
}, { timestamps: true })

const PresentationModel = mongoose.model('Presentation', schema)

export default PresentationModel
