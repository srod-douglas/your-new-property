import { NextFunction, Request, Response } from 'express';
import { Repository } from 'typeorm';
import { AppDataSource } from '../data-source';
import { Category, User } from '../entities';
import { AppError } from '../errors';

const middleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    if(req.originalUrl == '/categories/:id/realEstate'){

        const idRoute = Number(req.params.id)
        const repoCategory: Repository<Category> = AppDataSource.getRepository(Category)
        
        const idFound = await repoCategory.findOneBy({
            id: idRoute
        })
    
        if(!idFound){
            throw new AppError('Category not found', 404)
        }
        return next()
    }

    if(req.originalUrl = '/categories/:id/realEstate'){

        const idRoute = Number(req.params.id)
        const repoCategory: Repository<Category> = AppDataSource.getRepository(Category)
        
        const idFound = await repoCategory.findOneBy({
            id: idRoute
        })
    
        if(!idFound){
            throw new AppError('Category not found', 404)
        }
        return next()
    }

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