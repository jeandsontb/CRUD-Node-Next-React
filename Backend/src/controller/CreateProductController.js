import { v4 as uuidV4 } from 'uuid';

import Product from "../models/product";

class CreateProductController {

  async handle(req, res) {

    const { nameProduct, priceProduct} = req.body;

    const response = await Product.create({
      codeProduct: uuidV4(),
      nameProduct,
      priceProduct,
    })

    const product = {
      codeProduct: response.codeProduct,
      nameProduct: response.nameProduct,
      priceProduct: response.priceProduct
    }

    return res.status(201).json(product);
  }
}

export default new CreateProductController();