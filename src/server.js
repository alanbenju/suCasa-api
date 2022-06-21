
import express, { json } from 'express'
import bodyParser from 'body-parser'
import attendeesRoutes from './routes/attendees.route'
import presentationRoutes from './routes/presentations.route'
import connectToDB from './db'

const app = express()

app.use(json())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
  next()
})

connectToDB()

app.use('/presentations', presentationRoutes)
app.use('/attendees', attendeesRoutes)
app.use('/', (req, res) => res.send(200))

export default app
