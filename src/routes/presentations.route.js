import express from 'express'
import PresentationController from '../controllers/Presentation.controller'

const presentationRoutes = express.Router()

presentationRoutes.get('/', PresentationController.get)
presentationRoutes.post('/', PresentationController.create)
presentationRoutes.post('/:presentationId/attendees/', PresentationController.addAttendee)

export default presentationRoutes
