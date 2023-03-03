import { z } from 'zod';

export const createUserSchema = z.object({

    name: z.string().min(1).max(45),
    email: z.string().email().max(45),
    password: z.string().min(1).max(120),
    admin: z.boolean().default(false)

})

export const createdUserSchema = createUserSchema.extend({

    id: z.number(),
    createdAt: z.string(),
    updatedAt: z.string(),
    deletedAt: z.string().nullish()

})

export const updateUserSchema = createUserSchema.omit({ admin: true }).partial()

export const userReturnSchema = createdUserSchema.omit({ password: true })
export const listUserReturnSchema = userReturnSchema.array()