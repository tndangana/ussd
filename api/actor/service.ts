import { Actor, IActor } from './model';
import { ICRUD } from '../generics/IGenericService';


export function actorService() {

    async function create(actorParam: IActor) {
        console.log(JSON.stringify(actorParam))
        if (await Actor.findById(actorParam.id)) return;
        let actor = new Actor(actorParam);
        return actor.save();
    }
    async function find(id: string) {
        return Actor.findById(id);
    }
    async function findAll() {
        return Actor.find({});
    }
    async function update(actorParam: IActor, id: string) {
        let actor = await Actor.findById(id);
        if (!actor) return;
        Object.assign(actor, actorParam);
        return await actor.save()
    }

    return {
        create, find, findAll, update
    }
}

