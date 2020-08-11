import { IMovie, Movie } from "./model";


export function movieService() {


    async function create(movieParam: IMovie) {
        console.log(`ssssssssssss`)
        if (await Movie.findById(movieParam.id)) return;
        console.log(`>>>???>>>`,movieParam)
        let movie = new Movie(movieParam);
         return movie.save();
    }
    async function find(id: string) {
        return Movie.findById(id);
    }
    async function findAll() {
        return Movie.find({});
    }
    async function update(movieParam: IMovie, id: string) {
        let movie = await Movie.findById(id);
        if (!movie) return;
        Object.assign(movie, movieParam);
        return await movie.save()
    }

    return {
        create, find, findAll, update
    }
}
