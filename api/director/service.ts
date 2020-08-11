import { Director, IDirector } from "./model";



export function directorService() {


    async function create(directorParam: IDirector) {
        if (await Director.findById(directorParam.id)) return;
        let director = new Director(directorParam);
        return director.save();
    }
    async function find(id: string) {
        return Director.findById(id);
    }
    async function findAll() {
        return Director.find({});
    }
    async function update(directorParam: IDirector, id: string) {
        let director = await Director.findById(id);
        if (!director) return;
        Object.assign(director, directorParam);
        return await director.save()
    }

    return {
        create, find, findAll, update
    }
}
