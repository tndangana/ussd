import { Price, IPrice } from "./model";


export function priceService() {


    async function create(priceParam: IPrice) {
        if (await Price.findById(priceParam.id)) return;
        let movie = new Price(priceParam);
        return  movie.save();
    }
    async function find(id: string) {
        return Price.findById(id);
    }
    async function findAll() {
        return Price.find({});
    }
    async function update(priceParam: IPrice, id: string) {
        let price = await Price.findById(id);
        if (!price) return;
        Object.assign(price, priceParam);
        return await price.save()
    }

    return {
        create, find, findAll, update
    }
}
