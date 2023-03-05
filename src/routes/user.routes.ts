import { Router } from 'express';
import { userController } from '../controllers';
import { ensureAdmin, ensureData, ensureEmail, ensureId, ensureToken } from '../middlewares';
import { createUserSchema, updateUserSchema } from '../schemas';

const userRouter: Router = Router()

userRouter.post('', ensureData.middleware(createUserSchema), ensureEmail.middleware, userController.create)
userRouter.get('', ensureToken.middleware, ensureAdmin.middleware, userController.list)
userRouter.patch('/:id', ensureId.middleware, ensureToken.middleware, ensureAdmin.middleware, ensureData.middleware(updateUserSchema), userController.update)
userRouter.delete('/:id', ensureId.middleware, ensureToken.middleware, ensureAdmin.middleware, ensureData.middleware(updateUserSchema), userController.softDel)

export default userRouter