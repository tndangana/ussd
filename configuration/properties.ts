export class Config {
    static readonly MONGO_URL = process.env.DB_HOST as string;
    static readonly PORT: number = parseInt(process.env.PORT as string, 10)
}
