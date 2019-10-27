// Express
import express, { Application } from 'express'
import routes from './routes'

class App {
  public server: Application

  constructor() {
    this.server = express()

    this.middlewares()
    this.routes()
  }

  public middlewares() {
    this.server.use(express.json())
  }

  public routes() {
    this.server.use(routes)
  }
}

export default new App().server
