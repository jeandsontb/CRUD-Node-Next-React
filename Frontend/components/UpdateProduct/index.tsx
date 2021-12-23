import React, {useEffect, useState} from 'react';

import S from './styles';
import api from '../../services/api';

interface IDataUpdateProduct {
  codeProduct: string;
  nameProduct: string;
  priceProduct: number;
}

interface IPropsIndex {
  openFormProduct: boolean;
  closeFormProduct: (info: boolean) => void;
  dataUpdateProduct: IDataUpdateProduct;
}

const UpdateProduct = ({ openFormProduct, closeFormProduct, dataUpdateProduct }: IPropsIndex) => {

  const [ visible, setVisible ] = useState(false);
  const [ codeProduct, setCodeProduct ] = useState('');
  const [ nameProduct, setNameProduct ] = useState('');
  const [ priceProduct, setPriceProduct ] = useState<number>();
  const [ messageForm, setMessageForm ] = useState('');

  useEffect(() => {
      setVisible(openFormProduct);

      if(dataUpdateProduct) {
        setCodeProduct(dataUpdateProduct.codeProduct);
        setNameProduct(dataUpdateProduct.nameProduct);
        setPriceProduct(dataUpdateProduct.priceProduct);
      }
  }, [openFormProduct]);

  const handleCloseFormProduct = () => {
    setVisible(false);
    closeFormProduct(false);
    setMessageForm('');
  }

  const handleSubmitProduct = async () => {

    const data = {
      nameProduct,
      priceProduct
    }

    if(nameProduct && priceProduct) {
      const response = await api.put(`/product/update/${codeProduct}`, data);

      if(response) {
        closeFormProduct(false);
        setMessageForm('');
        setNameProduct('');
        setPriceProduct(0);
      }
    }

    setMessageForm('Todos os campos são obrigatório.');
  }

  return (
    <S.Container visible={visible}>
      <S.BoxAddProduct>
        <S.TextTitleAddProduct>
          Altere o Produto
        </S.TextTitleAddProduct>

        <S.BoxFormAddProduct>
          <S.BoxLabelProduct>
            <S.LabelTextInfo>Produto.</S.LabelTextInfo>
            <S.InputTextAddProduct 
              type="text" 
              value={nameProduct}
              onChange={e => setNameProduct(e.target.value)}
              placeholder='Digite o nome do produto' 
              personWidth="large"
              required
            />
          </S.BoxLabelProduct>
          <S.BoxLabelProduct>
            <S.LabelTextInfo>Valor.</S.LabelTextInfo>
            {dataUpdateProduct && dataUpdateProduct.priceProduct && 
              <S.InputTextAddProduct 
                type="number" 
                value={priceProduct}
                onChange={e => setPriceProduct(e.target.valueAsNumber)}
                placeholder='Apenas Números'
                personWidth="small" 
                required
              />
            }
            
            {messageForm.length > 2 &&
              <S.TextInfo>* {messageForm}</S.TextInfo>
            }
          </S.BoxLabelProduct>

          <S.BoxButtonsFormProduct>
            <S.ButtonsSendFormProduct onClick={handleSubmitProduct}>
              Adicionar na Tabela
            </S.ButtonsSendFormProduct>
            <S.ButtonsSendFormProduct onClick={handleCloseFormProduct}>
              Cancelar
            </S.ButtonsSendFormProduct>
          </S.BoxButtonsFormProduct>
        </S.BoxFormAddProduct>
      </S.BoxAddProduct>
    </S.Container>
  );
}

export { UpdateProduct };