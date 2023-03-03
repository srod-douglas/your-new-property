import { Router } from 'express';
import { categoryController } from '../controllers';
import categoryControllers from '../controllers/category.controllers';
import { ensureAdmin, ensureData, ensureId, ensureToken } from '../middlewares';
import { categorySchema } from '../schemas';

const categoryRouter: Router = Router()

categoryRouter.post('', ensureToken.middleware, ensureAdmin.middleware, ensureData.middleware(categorySchema), categoryControllers.create)
categoryRouter.get('', categoryController.read)
categoryRouter.get('/:id/realEstate', ensureId.middleware, categoryController.listRealEstates)

export default categoryRouter