import { createUserSchema, createdUserSchema, userReturnSchema, listUserReturnSchema, updateUserSchema } from './user.schemas';
import { loginSchema } from './login.schemas';
import { categorySchema, returnCategorySchema, returnRealEstatesList } from './category.schemas';
import { createRealEstateSchema, returnRealEstateSchema } from './realEstate.schemas';
import { createScheduleSchema } from './schedule.schemas'


export  {
    createUserSchema,
    createdUserSchema,
    userReturnSchema,
    loginSchema,
    listUserReturnSchema,
    updateUserSchema,
    categorySchema,
    returnCategorySchema,
    returnRealEstatesList,
    createRealEstateSchema,
    returnRealEstateSchema,
    createScheduleSchema
}