import { Router } from 'express';
import BilletsValidationController from '../controllers/BilletsValidationController';

const routes = Router();

routes.get('/:numeric_code', BilletsValidationController.verify);

export default routes;
