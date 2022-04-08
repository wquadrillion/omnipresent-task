import { Router } from 'express';
import getEmployees from '../controllers/employeesController';

const routes = Router();

routes.post('/employees', getEmployees);

export default routes;
