import { model, Document, Schema } from 'mongoose';

export interface IDirector extends Document {
    firstName: string
    middleName: string
    lastName: string
    dateOfBirth: Date
}
const DirectorSchema = new Schema({
    firstName: String,
    middleName: String,
    lastName: String,
    dateOfBirth: { type: Date }
})
export const Director = model<IDirector>('director', DirectorSchema)
