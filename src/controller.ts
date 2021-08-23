import { app } from './server'
import { bl } from './bl'
import express from 'express'

export const getEntities = (_req: express.Request, res: express.Response) => {
    const entities = bl.getEntities()
    res.send(entities)
}

export const setEntity = (req: express.Request, res: express.Response) => {
    // return res.send(bl.setEntity(req.body)) // produce error
    return res.send(bl.setEntity(req.body))
}