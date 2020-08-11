import { model, Schema, Document } from 'mongoose';

export interface IActor extends Document {
    id: string | null
    firstName: string
    lastName: string
    middleName: string,
    dateOfBirth: Date
}

const ActorSchema = new Schema({
    firstName: String,
    middleName: String,
    lastName: String,
    dateOfBirth: { type: Date }
}, { timestamps: true });


export const Actor = model<IActor>('actor', ActorSchema)