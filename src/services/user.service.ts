import { Repository } from 'typeorm'
import { AppDataSource } from '../data-source'
import { User } from '../entities'
import { AppError } from '../errors';
import { tCreateUser } from '../interfaces';
import { tListUserReturn, tUpdateUser, tUserReturn } from '../interfaces';
import { listUserReturnSchema, userReturnSchema } from '../schemas';

const create = async (dataUser: tCreateUser): Promise<tUserReturn> => {

    const userRepo: Repository<User> = AppDataSource.getRepository(User)
    const user: User = userRepo.create(dataUser)
    await userRepo.save(user)

    const newUser: tUserReturn = userReturnSchema.parse(user)

    return newUser

} 

const list = async (): Promise<tListUserReturn> => {

    const userRepo: Repository<User> = AppDataSource.getRepository(User)
    const users: User[] = await userRepo.find()
    
    const usersReturn: tListUserReturn = listUserReturnSchema.parse(users)
    return usersReturn

} 

const update = async (dataUser: tUpdateUser, idUser: number): Promise<tUserReturn> => {

    const userRepo: Repository<User> = AppDataSource.getRepository(User)

    const findUser: User | null = await userRepo.findOneBy({
        id: idUser
    })

    const newUser: User = userRepo.create({
        ...findUser,
        ...dataUser
    })

    const updatedUser: tUserReturn = userReturnSchema.parse(await userRepo.save(newUser)) 

    return updatedUser
} 

const softDel = async (idToDel: number): Promise<void> => {

    const userRepo: Repository<User> = AppDataSource.getRepository(User)

    const findUser: User | null = await userRepo.findOneBy({
        id: idToDel
    })

    if(findUser?.deletedAt){
        throw new AppError('User not found', 404)
    }

    const deletedUser = {
        ...findUser,
        deletedAt: String(new Date())
    }

    userReturnSchema.parse(await userRepo.save(deletedUser)) 

    return
} 

export default { create, list, update, softDel }