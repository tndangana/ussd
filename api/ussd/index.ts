import { Router } from 'express';
import { ussd } from './resource';

const router: Router = Router();

router.post('/', ussd);


export const ussdRouter: Router = router;

