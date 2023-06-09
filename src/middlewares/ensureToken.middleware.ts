import { Request, Response, NextFunction } from 'express';
import { AppError } from '../errors';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

const middleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const checkToken = req.headers.authorization

    if(!checkToken){
        throw new AppError('Missing bearer token', 401)
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