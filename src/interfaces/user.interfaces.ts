import { DeepPartial } from 'typeorm';
import { z } from 'zod';
import { createdUserSchema, createUserSchema, userReturnSchema, listUserReturnSchema, updateUserSchema } from '../schemas';

export type tCreateUser = z.infer<typeof createUserSchema>
export type tCreatedUser = z.infer<typeof createdUserSchema>
export type tUserReturn = z.infer<typeof userReturnSchema>
export type tListUserReturn = z.infer<typeof listUserReturnSchema>
export type tUpdateUser = DeepPartial<typeof updateUserSchema>

export interface iReqUser {
    admin: boolean,
    id: number
}
