import { z } from 'zod';
import { createdUserSchema, createUserSchema, userReturnSchema, listUserReturnSchema } from '../schemas';

export type createUser = z.infer<typeof createUserSchema>
export type createdUser = z.infer<typeof createdUserSchema>
export type userReturn = z.infer<typeof userReturnSchema>
export type tListUserReturn = z.infer<typeof listUserReturnSchema>
