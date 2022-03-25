import { Router } from 'express';

import { login } from '../controllers/user.controller';

const router = Router();

const END_POINT = '/auth';

router.post(`${END_POINT}/login`, login)

export default router;