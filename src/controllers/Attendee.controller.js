import AttendeeService from '../services/Attendee.service'

class AttendeeController {
  async get (req, res) {
    const filters = req.query // TODO: Build filters object
    const attendees = await AttendeeService.get(filters)
    const response = {
      result: attendees,
      total: 0 // TODO: Count attendees and send total
    }
    res.send(response)
  }

  async create (req, res) {
    try {
      const attendee = await AttendeeService.create(req.body)
      const response = {
        result: attendee
      }
      res.status(201).send(response)
    } catch (err) {
      const response = {
        err: err.toString()
      }
      res.status(500).send(response) // TODO: Code depends on custom error
    }
  }
}

export default new AttendeeController()
