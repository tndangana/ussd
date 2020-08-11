import { model, Document, Schema } from 'mongoose';

export interface IPrice extends Document {
    id:string|null
    movieId: string
    price: number
}

const PriceSchema = new Schema({
    movieId: String,
    price: Number
})

export const Price = model<IPrice>('price', PriceSchema);