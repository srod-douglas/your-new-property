import { Request, Response, NextFunction } from 'express';
import { AppError } from '../errors';

const middleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const idUserUpdate: number = Number(req.params.id)

    if(req.method === 'PATCH'){

        if(idUserUpdate !== Number(req.user.id) && !req.user.admin){

            throw new AppError('Insufficient permission', 403)
            
        }else{
            return next()
        }
    }

    if(!req.user.admin){
        throw new AppError('Insufficient permission', 403)
    }

    return next()
}

export default { middleware }