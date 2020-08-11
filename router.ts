import { Router } from "express";
import { actorRouter } from './api/actor/index';
import { directorRouter } from './api/director/';
import { genreRouter } from './api/genre/index';
import { movieRouter } from './api/movie';
import { priceRouter } from './api/price/index';
import { ticketRouter } from './api/ticket/index';
import { venueRouter } from './api/venue';
import { ussdRouter} from './api/ussd/index'


 const router: Router = Router();

router.use('/api/actor', actorRouter);
router.use('/api/director', directorRouter);
router.use('/api/genre', genreRouter);
router.use('/api/movie', movieRouter);
router.use('/api/price', priceRouter);
router.use('/api/venue', venueRouter);
router.use('/api/ticket', ticketRouter);
router.use('/api/ussd', ussdRouter);


export const MainRouter: Router = router;




