import { Repository } from 'typeorm'
import { AppDataSource } from '../data-source'
import { User } from '../entities'
import { createUser } from '../interfaces';
import { tListUserReturn, userReturn } from '../interfaces/user.interfaces';
import { listUserReturnSchema, userReturnSchema } from '../schemas';

const create = async (dataUser: createUser): Promise<userReturn> => {

    const userRepo: Repository<User> = AppDataSource.getRepository(User)

    const user: User = await userRepo.save(dataUser)
    console.log(user)
    const newUser = userReturnSchema.parse(user)
    return newUser

} 

const list = async (): Promise<tListUserReturn> => {

    const userRepo: Repository<User> = AppDataSource.getRepository(User)
    const users = await userRepo.find()
    const usersReturn = listUserReturnSchema.parse(users)
    return usersReturn

} 

export default { create, list }