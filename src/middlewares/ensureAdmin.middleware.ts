import { Request, Response, NextFunction } from 'express';
import { AppError } from '../errors';

const middleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    if(!req.user.admin){
        throw new AppError('Insufficient permission', 403)
    }

    return next()

}

export default { middleware }