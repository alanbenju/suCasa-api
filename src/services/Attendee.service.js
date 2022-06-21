import UserModel from '../models/User.model'

class AttendeeService {
  async get (filters) { // TODO: Use filters
    return await UserModel.find()
  }

  async findByEmail (email) {
    return await UserModel.findOne({ email })
  }

  async create (user) {
    // TODO: Validate user data
    try {
      return await UserModel.create(user)
    } catch (err) {
      console.log('Error while creating user', err)
      throw new Error('Error while creating user') // TODO: Throw custom error
    }
  }
}

export default new AttendeeService()
