import { Router } from 'express';
import { CreateCategoryController } from '../modules/cars/useCases/createCategory/CreateCategoryController';

const specificationsRoutes = Router();

const createSpecificationController = new CreateCategoryController();

specificationsRoutes.post('/', createSpecificationController.handle);

// eslint-disable-next-line import/prefer-default-export
export { specificationsRoutes };
