import Product from "../models/product";

class ListOneProductController {

  async handle(req, res) {
    const { id } = req.params;

    const response = await Product.findOne({ codeProduct: id });

    const product = {
      codeProduct: response.codeProduct,
      nameProduct: response.nameProduct,
      priceProduct: response.priceProduct
    }

    return res.json(product);
  }
}

export default new ListOneProductController();