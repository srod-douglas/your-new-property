import { Router } from 'express';
import { realEstateController } from '../controllers';
import { ensureAdmin, ensureData, ensureToken } from '../middlewares';
import { createRealEstateSchema } from '../schemas';

const realEstateRouter: Router = Router()

realEstateRouter.post('', ensureToken.middleware, ensureAdmin.middleware, ensureData.middleware(createRealEstateSchema), realEstateController.create)
realEstateRouter.get('', realEstateController.list)

export default realEstateRouter