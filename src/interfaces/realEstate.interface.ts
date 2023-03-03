import { z } from 'zod';
import { createRealEstateSchema } from '../schemas';
import { returnRealEstateSchema } from '../schemas/realEstate.schemas';

export type tCreateRealEstate = z.infer<typeof createRealEstateSchema>
export type tReturnRealEstate = z.infer<typeof returnRealEstateSchema>