import { Router } from 'express';

import CreateProductController from '../controller/CreateProductController';
import DeleteProductController from '../controller/DeleteProductController';
import ListAllProductController from '../controller/ListAllProductController';
import ListOneProductController from '../controller/ListOneProductController';
import UpdateProductController from '../controller/UpdateProductController';

const routes = Router();

routes.post('/product/insert', CreateProductController.handle);
routes.get('/product/list/:id', ListOneProductController.handle);
routes.get('/product/list', ListAllProductController.handle);
routes.put('/product/update/:id', UpdateProductController.handle);
routes.delete('/product/delete/:id', DeleteProductController.handle);

export default routes;