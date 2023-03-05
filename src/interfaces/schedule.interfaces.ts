import { z } from 'zod';
import { createScheduleSchema } from '../schemas';

export type tCreateSchedule = z.infer<typeof createScheduleSchema>