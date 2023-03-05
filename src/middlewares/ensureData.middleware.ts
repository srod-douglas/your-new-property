import { NextFunction, Request, Response } from 'express';
import { ZodTypeAny } from 'zod';

const middleware = (schema: ZodTypeAny) => (req: Request, res: Response, next: NextFunction): void => {
    
    const checkData = schema.parse(req.body)
    req.body = checkData

    return next()

}

export default { middleware }