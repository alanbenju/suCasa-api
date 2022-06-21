import PresentationModel from '../models/Presentation.model'
import UserModel from '../models/User.model'

class PresentationService {
  /**
     * @param {*} filters: limit, skip, others..
     */
  async get (filters) { // TODO: Use filters
    return await PresentationModel.find()
  }

  async create (presentation) {
    // TODO: validation
    try {
      return await PresentationModel.create(presentation)
    } catch (err) {
      console.log('Error while creating presentation', err)
      throw new Error('Error while creating presentation') // TODO: Throw custom error
    }
  }

  async addAttendee (presentationId, attendeeEmail) {
    // TODO: Validate that user is not already added
    const presentation = await PresentationModel.findById(presentationId)
    if (!presentation) throw new Error('Presentation does not exist')
    console.log(attendeeEmail)
    const attendee = await UserModel.findOne({ email: attendeeEmail })
    if (!attendee) throw new Error('Attendee does not exist')
    presentation.attendees.push({ name: attendee.name, email: attendee.email, company: attendee.company })
    return await PresentationModel.updateOne({ _id: presentation._id }, presentation)
  }
}

export default new PresentationService()
