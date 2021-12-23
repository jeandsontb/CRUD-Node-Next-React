import Product from "../models/product";

class DeleteProductController {

  async handle(req, res) {
    const { id } = req.params;

    const product = await Product.findOneAndDelete({ codeProduct: id });

    if(product) {
      return res.json({message: 'Produto excluído com sucesso!'});
    }

    return res.json({message: 'Não foi possível excluir o produto, tente novamente mais tarde!'});

  }
}

export default new DeleteProductController();