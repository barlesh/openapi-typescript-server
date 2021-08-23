import express from "express"
import * as OpenApiValidator from 'express-openapi-validator'
import * as bodyParser from "body-parser"
export const app = express()

import { getEntities, setEntity } from './controller'

app.use(bodyParser.json())
app.use(
    OpenApiValidator.middleware({
      apiSpec: 'src/api/api.yaml',
      validateRequests: true, // (default)
      validateResponses: true, // false by default
    }),
  )
  

  app.route('/api/v1/entity')
    .get(getEntities)
    .post(setEntity)


