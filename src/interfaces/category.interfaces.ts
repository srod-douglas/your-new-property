import { z } from 'zod';
import { categorySchema, returnCategorySchema } from '../schemas';

export type tCreateCategory = z.infer<typeof categorySchema>
export type tReturnCategory = z.infer<typeof returnCategorySchema>