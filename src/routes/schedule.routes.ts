import { Router } from 'express';
import { scheduleController } from '../controllers';
import { ensureAdmin, ensureData, ensureToken } from '../middlewares';
import { createScheduleSchema } from '../schemas';

const scheduleRouter: Router = Router()

scheduleRouter.post('', ensureToken.middleware, ensureData.middleware(createScheduleSchema), scheduleController.create)
scheduleRouter.get('/realEstate/:id', ensureToken.middleware, ensureAdmin.middleware, scheduleController.list)

export default scheduleRouter