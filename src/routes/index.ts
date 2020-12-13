import { Router } from 'express';
import BilletsValidationController from '../controllers/BilletsValidationController';

const routes = Router();

routes.post('/boleto', BilletsValidationController);

export default routes;
