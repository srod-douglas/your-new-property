import { Router } from 'express';
import { userController } from '../controllers';
import { ensureAdmin, ensureData, ensureToken } from '../middlewares';
import { createUserSchema } from '../schemas';

const userRouter: Router = Router()

userRouter.post('', ensureData.middleware(createUserSchema), userController.create)
userRouter.get('', ensureToken.middleware, userController.list)
userRouter.patch('/:id')
userRouter.delete('/:id')

export default userRouter