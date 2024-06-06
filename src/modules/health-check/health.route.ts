import { Router } from 'express';
import Controller from './health.controller';

const health: Router = Router();
const controller = new Controller();

health.get('/', controller.checkHealth);

export default health;
