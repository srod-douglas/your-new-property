import { Request, Response } from 'express';
import { userServices } from '../services';
import { tUserReturn, tCreateUser } from '../interfaces'
import { tUpdateUser } from '../interfaces/user.interfaces';

const create = async (req: Request, res: Response): Promise<Response> => {
    const user: tCreateUser = req.body
    const newUser: tUserReturn = await userServices.create(user)
    return res.status(201).json(newUser)

}

const list = async (req: Request, res: Response): Promise<Response> => {
    console.log(req.user)
    const user = await userServices.list()
    return res.status(200).json(user)

}

const update = async (req: Request, res: Response): Promise<Response> => {

    const dataUser: tUpdateUser = req.body
    const idUser: number = Number(req.params.id)

    const userUpdated = await userServices.update(dataUser, idUser)
    
    return res.status(200).json(userUpdated)

}

export default { create, list, update }