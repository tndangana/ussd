import * as dotenv from "dotenv";
dotenv.config();
import express, { Request, Response, Application, Errback, NextFunction, Router } from 'express';
import connect from './configuration/connect';
import * as properties from './configuration/properties';
import bodyParser from 'body-parser';
import { MainRouter } from './router'

// Create a new express app instance
const app: Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: "happy holidays !!" })
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,HEAD');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(MainRouter);
app.use((err: Errback, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.name });
});
app.listen(properties.Config.PORT, () =>
  console.log(`Application started successfully on port ${properties.Config.PORT}.`)
);
const db = properties.Config.MONGO_URL
connect({ db });
