import {  genreService } from "./service";
import { NextFunction ,Request,Response} from "express";
import { IGenre } from "./model";



const service = genreService();
export const create = (req: Request, res: Response, next: NextFunction) => {
    service.create(req.body)
        .then((result) => result ? res.status(201).json(result) : res.status(409).json({ message: "already exists" }))
        .catch(err => next(err));
}

export const update = (req: Request, res: Response, next: NextFunction) => {
    service.update(req.body, req.params.id)
        .then((result) => result ? res.status(200).json(result) : res.status(404).json({ message: "not found" }))
        .catch(err => next(err));
}

export const list = (req: Request, res: Response, next: NextFunction) => {
    service.findAll()
        .then((result: IGenre[]) => res.status(200).json(result))
        .catch(err => next(err));
}

export const getOne = (req: Request, res: Response, next: NextFunction) => {
    service.find(req.params.id)
        .then(result => result ? res.status(200).json(result) : res.status(404).json({ message: "not found" }))
        .catch(err => next(err));
}
