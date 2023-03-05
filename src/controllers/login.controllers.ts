import { Request, Response } from 'express';
import { loginServices } from '../services';

const create = async (req: Request, res: Response): Promise<Response> => {

    const token: string = await loginServices.create(req.body, req.user)
    
    return res.json({
        token: token
    })

}

export default { create }