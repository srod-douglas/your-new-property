import { Router } from 'express';
import { loginController } from '../controllers';
import { ensureData } from '../middlewares';
import { loginSchema } from '../schemas';

const loginRouter: Router = Router()

loginRouter.post('', ensureData.middleware(loginSchema), loginController.create)

export default loginRouter