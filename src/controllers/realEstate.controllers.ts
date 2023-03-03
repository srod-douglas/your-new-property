import { Request, Response } from 'express';
import { realEstateServices } from '../services';

const create = async (req: Request, res: Response): Promise<Response> => {

    const dataRealEstate = req.body
    const newRealEstate = await realEstateServices.create(dataRealEstate)
    return res.status(201).json(newRealEstate)

}

const list = async (req: Request, res: Response): Promise<Response> => {

    const listRealEstate = await realEstateServices.list()
    return res.status(200).json(listRealEstate)

}

export default { create, list }