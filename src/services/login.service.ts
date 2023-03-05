import { compare } from 'bcryptjs';
import { Repository } from 'typeorm';
import { AppDataSource } from '../data-source';
import { User } from '../entities';
import { AppError } from '../errors';
import { iReqUser, tLogin } from '../interfaces';
import jwt from 'jsonwebtoken'
import 'dotenv/config'

const create = async (dataLogin: tLogin, reqUser: iReqUser) => {

    const userRepo: Repository<User> = AppDataSource.getRepository(User)

    const user: User | null = await userRepo.findOneBy({
        email: dataLogin.email
    })

    
    if(!user){
        throw new AppError('Invalid credentials', 401)
    }

    const pwdMatch = await compare(dataLogin.password, user.password)

    if(!pwdMatch){
        throw new AppError('Invalid credentials', 401)
    }

    if(user.deletedAt){
        throw new AppError('Invalid credentials', 401)
    }

    const token: string = jwt.sign(
        {
            admin: user.admin
        },
        process.env.SECRET_KEY!,
        {
            expiresIn: '24h',
            subject: String(user.id)
        }
    )

    reqUser = {
        id: user.id,
        admin: user.admin
    }
    return token
}

export default { create }