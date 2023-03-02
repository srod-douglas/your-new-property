import { Request, Response } from 'express';
import { userServices } from '../services';

const create = async (req: Request, res: Response): Promise<Response> => {

    const user = await userServices.create(req.body)
    return res.status(201).json(user)

}

const list = async (req: Request, res: Response): Promise<Response> => {
    console.log(req.user)
    const user = await userServices.list()
    return res.status(200).json(user)

}

export default { create, list }