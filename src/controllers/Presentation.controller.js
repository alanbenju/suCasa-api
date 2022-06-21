import AttendeeService from '../services/Attendee.service'
import PresentationService from '../services/Presentation.service'

class PresentationController {
  async get (req, res) {
    const filters = req.query // TODO: Build filters object
    const presentations = await PresentationService.get(filters)
    const response = {
      result: presentations,
      total: 0 // TODO: Count presentations and send total
    }
    res.send(response)
  }

  async create (req, res) {
    try {
      const presentation = req.body // TODO: Validate
      let user = await AttendeeService.findByEmail(presentation.speaker.email)
      if (!user) user = await AttendeeService.create(presentation.speaker)
      const presentationDocument = await PresentationService.create(presentation)
      const response = {
        result: presentationDocument
      }
      res.status(201).send(response)
    } catch (err) {
      console.log(err)
      const response = {
        err: err.toString()
      }
      res.status(500).send(response) // TODO: Code depends on custom error
    }
  }

  async addAttendee (req, res) {
    try {
      const presentationId = req.params.presentationId
      const attendeeEmail = req.body.email
      const presentation = await PresentationService.addAttendee(presentationId, attendeeEmail)
      const response = {
        result: presentation
      }
      res.status(200).send(response)
    } catch (err) {
      const response = {
        err: err.toString()
      }
      res.status(500).send(response) // TODO: Code depends on custom error
    }
  }
}

export default new PresentationController()
