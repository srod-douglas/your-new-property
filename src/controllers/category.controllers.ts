import { Request, Response } from 'express';
import { categoryServices } from '../services';
import { tCreateCategory, tReturnCategory } from '../interfaces';
import { Category } from '../entities';

const create = async (req: Request, res: Response): Promise<Response> => {

    const category: tCreateCategory = req.body
    const newCategory: tReturnCategory = await categoryServices.create(category)
    return res.status(201).json(newCategory)

}

const read = async (req: Request, res: Response): Promise<Response> => {

    const categories: Category[] = await categoryServices.list()
    return res.status(200).json(categories)

}

const listRealEstates = async (req: Request, res: Response): Promise<Response> => {

    const realEstates: Category | null = await categoryServices.listRealEstateFromId(+req.params.id)
    
    return res.status(200).json(realEstates)

}

export default { create, read, listRealEstates }