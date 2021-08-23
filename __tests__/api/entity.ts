import supertest from 'supertest'
import L from 'lodash'
import { app } from '../../src/server'

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

const entity = {
  propA: 'someprop',
  propB: [1,2,3,4]
}

describe("test post entity", () => {
  it("[ok - /POST /api/v1/entity]", async () => {
    await supertest(app)
      .post('/api/v1/entity')
      .send(entity)
      .expect(200)
  })
  it("[error - /POST /api/v1/entity - wrong entity format]", async () => {
    await supertest(app)
      .post('/api/v1/entity')
      .send(L.set(entity, 'propA', 5))
      .expect(400)
    
    await supertest(app)
      .post('/api/v1/entity')
      .send(L.set(entity, 'propB', []))
      .expect(400)
    
    await supertest(app)
      .post('/api/v1/entity')
      .send(L.set(entity, 'propB', 'not an array'))
      .expect(400)
  })
})