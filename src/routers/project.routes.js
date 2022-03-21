import { Router } from 'express';

import { getProject, saveProject, updateProject, getAllProjects } from '../controllers/project.controller';

const router = Router();

const END_POINT = '/project';

router.get(`${END_POINT}`, getAllProjects);
router.get(`${END_POINT}/:id`, getProject);
router.post(`${END_POINT}`, saveProject);
router.put(`${END_POINT}/:id`, updateProject);

export default router;