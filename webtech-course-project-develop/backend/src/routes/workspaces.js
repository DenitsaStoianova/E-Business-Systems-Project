import express from 'express';
import workspace from '../controllers/workspace';

const router = express.Router();

router
    .get('/', workspace.getWorkspaces);

export default router;
