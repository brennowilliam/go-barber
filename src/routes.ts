// Express
import { Request, Response, Router } from 'express'

const routes: Router = Router()

routes.get('/', (req: Request, res: Response) => res.json({ message: 'Hello, William' }))

export default routes
