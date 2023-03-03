import { NextFunction, Request, Response } from 'express';
import { Repository } from 'typeorm';
import { AppDataSource } from '../data-source';
import { User } from '../entities';
import { AppError } from '../errors';

const middleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    
    const idRoute = Number(req.params.id)
    const repoUser: Repository<User> = AppDataSource.getRepository(User)
    
    const idFound = await repoUser.findOneBy({
        id: idRoute
    })

    if(!idFound){
        throw new AppError('User not found', 404)
    }

    return next()

}

export default { middleware }