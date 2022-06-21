import request from 'supertest'
import app from '../src/server'

describe('GET / ', () => {
  test('It should respond with 200', async () => {
    const response = await request(app).get('/')
    expect(response.statusCode).toBe(200)
  })
})

/**
 * TODO:
 * - Connect to test DB or mock db
 * - e2e test for each request
 * - unit test for each service
 * - unit test for each controller
 *
 * Tests:
 *  - Create attende
 *    - 200
 *    - Error: existing email
 *  - Get presentations
 *  - Create Presentation
 *    - With existing user as speaker
 *    - With new user as speaker
 *  - Add attendee to presentation
 *    - Existing user
 *    - non existing user
 *    - non existing presentation
 *    - user already added
 */
