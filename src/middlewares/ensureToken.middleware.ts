import { Request, Response, NextFunction } from 'express';
import { AppError } from '../errors';
import 'dotenv/config';
import jwt from 'jsonwebtoken';

const middleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const checkToken = req.headers.authorization

    if(!checkToken){
        throw new AppError('Token is missing!', 401)
    }

    const token = checkToken.split(' ')[1]

    jwt.verify(token, process.env.SECRET_KEY!, (
        error, decoded: any
        ) => {

            if(error){
                throw new AppError(error.message, 401)
            }

            req.user = {
                admin: decoded.admin,
                id: Number(decoded.sub)
            }

            return next()
    })
}

export default { middleware }