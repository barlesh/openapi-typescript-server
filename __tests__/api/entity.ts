import { app } from '../../src/server'
import supertest from 'supertest'

describe("test get entity", () => {
  it("/GET /api/v1/entity", async () => {
    await supertest(app).get('/api/v1/entity')
      .expect(200)
      .then((response) => {
        expect(response.body.propA).not.toBeNull()
        expect(response.body.propB).not.toBeNull()
        expect(Array.isArray(response.body.propB)).toBeTruthy()
      })
  })
})

const wrongFormatEntity = {
  propA: 5,
  propB: [1,2,3,4]
}
const anotherWrongFormatEntity = {
  propA: "wohoo",
  propB: []
}
describe("test post entity", () => {
  it("[error - /POST /api/v1/entity - wrong entity format]", async () => {
    await supertest(app)
      .post('/api/v1/entity')
      .send(wrongFormatEntity)
      .expect(400)
    
    await supertest(app)
      .post('/api/v1/entity')
      .send(anotherWrongFormatEntity)
      .expect(400)
  })
})