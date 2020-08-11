import { model, Schema, Document } from 'mongoose';

export interface ITicket extends Document {
    id:string|null
    ticketNumber: string
    screeningTime: string
    venueId: string
    movieId: string
    seatNumber: string
    buyerMobileNumber: string
}
const TicketSchema = new Schema({
    ticketNumber: String,
    screeningTime: String,
    venueId: String,
    movieId: String,
    seatNumber: String,
    buyerMobileNumber: String
}, {
    timestamps: true
});
export const Ticket = model<ITicket>('ticket', TicketSchema);