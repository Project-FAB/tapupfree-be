import { Router } from 'express';

import users from './users/users.route';
import health from './health-check/health.route';
const router: Router = Router();

router.use('/users', users);
router.use('/health', health);
// router.use("/projects", projects);

export default router;
