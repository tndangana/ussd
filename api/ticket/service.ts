import { ITicket, Ticket } from "./model";


export function ticketService() {


    async function create(ticketParam: ITicket) {
        if (await Ticket.findById(ticketParam.id)) return;
        let ticket = new Ticket(ticketParam);
        return ticket.save();
    }
    async function find(id: string) {
        return Ticket.findById(id);
    }
    async function findAll() {
        return Ticket.find({});
    }
    async function update(ticketParam: ITicket, id: string) {
        let ticket = await Ticket.findById(id);
        if (!ticket) return;
        Object.assign(ticket, ticketParam);
        return await ticket.save()
    }

    return {
        create, find, findAll, update
    }
}
