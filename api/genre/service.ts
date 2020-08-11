import { Genre, IGenre } from "./model";



export function genreService() {
    

    async function create(genreParam: IGenre) {
        if (await Genre.findById(genreParam.id)) return;
        let genre = new Genre(genreParam);
        return genre.save();
    }
    async function find(id: string) {
        return Genre.findById(id);
    }
    async function findAll() {
        return Genre.find({});
    }
    async function update(genreParam: IGenre, id: string) {
        let genre = await Genre.findById(id);
        if (!genre) return;
        Object.assign(genre, genreParam);
        return await genre.save()
    }

    return {
        create, find, findAll, update
    }
}
