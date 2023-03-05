import { Request, Response } from 'express';
import { RealEstate } from '../entities';
import { tCreateSchedule } from '../interfaces';
import { scheduleServices } from '../services';

const create = async (req: Request, res: Response): Promise<Response> => {
    const idUser: number = +req.user.id
    const dataSchedule: tCreateSchedule = req.body

    await scheduleServices.create(dataSchedule,idUser)
    
    return res.status(201).json({
        message: 'Schedule created'
    })

}

const list = async (req: Request, res: Response): Promise<Response> => {

    const idRealEstate: number = +req.params.id
    const listSchedules: void | RealEstate = await scheduleServices.list(idRealEstate)
    return res.status(200).json(listSchedules)

}

export default { create, list }