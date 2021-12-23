import express from 'express';
import mongoose from 'mongoose';
import routes from '../routes/routes';
import swaggerUi from 'swagger-ui-express';
import dotenv from 'dotenv';
import cors from 'cors';

import swaggerFile from '../doc/swagger.json';

class App {

  constructor() {
    this.server = express();
    
    this.middlewares();
    mongoose.connect(process.env.CLUSTER_OF_CONNECT_MONGODB, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    
    this.routes();
  }

  middlewares() {    
    dotenv.config();
    this.server.use(cors());
    this.server.use(express.json());
    this.server.use("/api-product", swaggerUi.serve, swaggerUi.setup(swaggerFile));
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;