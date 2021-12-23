import Product from "../models/product";

class ListOneProductController {

  async handle(req, res) {
    const response = await Product.find();

    const product = response.map((prod) => {
      return {
        codeProduct: prod.codeProduct,
        nameProduct: prod.nameProduct,
        priceProduct: prod.priceProduct 
      }
    }); 
    
    return res.json(product);
  }
}

export default new ListOneProductController();