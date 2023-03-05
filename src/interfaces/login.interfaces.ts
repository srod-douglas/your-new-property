import { z } from 'zod';
import { loginSchema } from '../schemas';

export type tLogin = z.infer<typeof loginSchema>