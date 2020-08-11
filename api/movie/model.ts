import { Schema, model, Document } from 'mongoose';

export interface IMovie extends Document {
    id: string | null
    title: string
    casting: string
    runningTime: string
    genre: string
    year: string
    director: string
    description: string
}

const MovieSchema = new Schema({
    title: String,
    // casting: [{ type: Schema.Types.ObjectId, ref: 'actor' }],
    // runningTime: String,
    // genre: { type: Schema.Types.ObjectId, ref: 'genre' },
    // rating: { type: Schema.Types.ObjectId, ref: 'rating' },
    // year: String,
    // director: { type: Schema.Types.ObjectId, ref: 'director' },
    description: String
}, { timestamps: true })

export const Movie = model('movie', MovieSchema)