import { Request, Response } from 'express';
import { categoryServices } from '../services';
import { tCreateCategory, tReturnCategory } from '../interfaces';

const create = async (req: Request, res: Response): Promise<Response> => {

    const category: tCreateCategory = req.body
    const newCategory: tReturnCategory = await categoryServices.create(category)
    return res.status(201).json(newCategory)

}

export default { create }