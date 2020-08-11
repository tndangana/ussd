import { model, Document, Schema } from 'mongoose';

export interface IVenue extends Document {
    id:string|null
    name: string;
    capacity: number;
    city: string;
}

const VenueSchema = new Schema({
    name: String,
    city: String,
    capacity: Number
});

export const Venue = model<IVenue>('venue', VenueSchema)