import { Router } from 'express';

import { getProject, saveProject } from '../controllers/project.controller';

const router = Router();

const END_POINT = '/project';

router.get(`${END_POINT}/:id`, getProject);
router.post(`${END_POINT}`, saveProject);


export default router;