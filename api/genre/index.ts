import { Router } from 'express';
import { create, list, update, getOne } from './resource';

const router: Router = Router();

router.post('/', create);
router.get('/', list);
router.get('/:id', getOne);
router.put('/:id', update);

export const genreRouter: Router = router;

