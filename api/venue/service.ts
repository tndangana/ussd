import { IVenue, Venue } from "./model";


export function venueService () {


    async function create(venueParam: IVenue) {
        if (await Venue.findById(venueParam.id)) return;
        let venue = new Venue(venueParam);
       return  venue.save();
    }
    async function find(id: string) {
        return Venue.findById(id);
    }
    async function findAll() {
        return Venue.find({});
    }
    async function update(venueParam: IVenue, id: string) {
        let venue = await Venue.findById(id);
        if (!venue) return;
        Object.assign(venue, venueParam);
        return await venue.save()
    }

    return {
        create, find, findAll, update
    }
}
