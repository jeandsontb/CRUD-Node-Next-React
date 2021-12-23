import Product from "../models/product";

class ListOneProductController {

  async handle(req, res) {

    const { id } = req.params;
    const { nameProduct, priceProduct} = req.body;

    const { modifiedCount } = await Product.updateOne({codeProduct: id}, {
      nameProduct,
      priceProduct,
    });

    const product = {
      nameProduct,
      priceProduct,
    }

    if(modifiedCount > 0) {
      return res.json(product)
    }

    return res.json({message: 'Não foi possível atualizar o produto'});
  }
}

export default new ListOneProductController();