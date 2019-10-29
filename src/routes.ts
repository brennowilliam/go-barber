// Express
import { Router } from 'express'

// Controller
import UserController from './app/controllers/UserController'

const routes: Router = Router()

routes.post('/users', UserController.store)

export default routes
