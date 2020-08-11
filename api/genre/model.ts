import { model, Document, Schema } from 'mongoose';

export interface IGenre extends Document {
    id: string | null
    type: string
}

export interface IRating extends Document {
    type: string
}

const RatingSchema = new Schema({
    type: String
}, {
    timestamps: true
})

export const Rating = model<IRating>('rating', RatingSchema);


const GenreSchema = new Schema({
    type: String
}, {
    timestamps: true
})
export const Genre = model<IGenre>('genre', GenreSchema);

