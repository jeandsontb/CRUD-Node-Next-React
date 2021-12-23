import App from '../infra/App';

const port = 3333;

App.listen(port, () => console.log(
  `Route for Documentation Swagger 
    
    http://localhost:3333/api-product 

Server running in http://localhost:${port} ` 
));