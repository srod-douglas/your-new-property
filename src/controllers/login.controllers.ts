import { Request, Response } from 'express';
import { loginServices } from '../services';

const create = async (req: Request, res: Response): Promise<Response> => {
    console.log(req.user)
    const token: string = await loginServices.create(req.body)
    return res.json({
        token: token
    })

}

export default { create }