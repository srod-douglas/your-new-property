import { z } from 'zod';
import { categorySchema, returnCategorySchema, returnRealEstatesList } from '../schemas';

export type tCreateCategory = z.infer<typeof categorySchema>
export type tReturnCategory = z.infer<typeof returnCategorySchema>
export type tReturnRealEstateList = z.infer<typeof returnRealEstatesList>