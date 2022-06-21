import express from 'express'
import AttendeeController from '../controllers/Attendee.controller'

const attendeesRoutes = express.Router()

attendeesRoutes.get('/', AttendeeController.get)
attendeesRoutes.post('/', AttendeeController.create)

export default attendeesRoutes
