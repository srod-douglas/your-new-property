import { Router } from 'express';
import categoryControllers from '../controllers/category.controllers';
import { ensureAdmin, ensureData, ensureToken } from '../middlewares';
import { categorySchema } from '../schemas';

const categoryRouter: Router = Router()

categoryRouter.post('', ensureToken.middleware, ensureAdmin.middleware, ensureData.middleware(categorySchema), categoryControllers.create)
categoryRouter.get('/:id/realEstate')

export default categoryRouter