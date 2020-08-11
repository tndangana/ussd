import { IRead, IWrite } from './IGenericService';
import { Document, Model } from 'mongoose';

export abstract class BaseRepository<T extends Document> implements IRead<T>, IWrite<T>{


    private _model: Model<Document>;

    constructor(schemaModel: Model<Document>) {
        this._model = schemaModel;
    }


    find(item: T): Promise<T[]> {
        throw new Error("Method not implemented.");
    }
    findOne(id: string): Promise<T> {
        throw new Error("Method not implemented.");
    }

    create(item: T): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    update(id: string, item: T): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}