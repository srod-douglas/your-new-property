import { compare } from 'bcryptjs';
import { Repository } from 'typeorm';
import { AppDataSource } from '../data-source';
import { User } from '../entities';
import { AppError } from '../errors';
import { tLogin } from '../interfaces';
import jwt from 'jsonwebtoken'
import 'dotenv/config'

const create = async (dataLogin: tLogin) => {

    const userRepo: Repository<User> = AppDataSource.getRepository(User)

    const user: User | null = await userRepo.findOneBy({
        email: dataLogin.email
    })

    
    if(!user){
        throw new AppError('Wrong email or password', 401)
    }

    const pwdMatch = await compare(dataLogin.password, user.password)

    if(!pwdMatch){
        throw new AppError('Wrong email or password', 401)
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
    return token
}

export default { create }