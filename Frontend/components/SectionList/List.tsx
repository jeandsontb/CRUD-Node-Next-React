import React, {useEffect, useState} from "react";
import api from "../../services/api";
import { IconEdit, IconTrash } from "../Icons";

import S from './styles';

type TypeDataProducts = {
  codeProduct: string;
  nameProduct: string;
  priceProduct: number;
}

interface IPropsUpdate {
  updateList: boolean;
  updateListUpdate: boolean;
  openCardFormUpdate: (info: boolean) => void;
  dataUpdateProduct: (data: TypeDataProducts) => void
}

const List = ({
  updateList, 
  updateListUpdate, 
  openCardFormUpdate, 
  dataUpdateProduct
}: IPropsUpdate ) => {

  const [ data, setData ] = useState<TypeDataProducts[]>([]);

  useEffect(() => {
    getDataProject();
  }, [updateList, updateListUpdate]);

  const getDataProject = async () => {
    const {data} = await api.get('/product/list');

    setData(data);
  }

  const handleRemoveProduct = (item: string) => {
    const response = api.delete(`/product/delete/${item}`);

    if(response) {
      getDataProject();
    }
  }

  const handleOpenCardFormUpdateProduct = (item: TypeDataProducts) => {
    openCardFormUpdate(true);
    dataUpdateProduct(item);
  }

  return (
    <S.Container>
      <S.BoxTitleList>
        <S.TextTitleList>Lista de Produtos</S.TextTitleList>
        
      </S.BoxTitleList>

      <S.BoxProducts>
        <table>
          <tr className="titles-line">
            <td>Código</td>
            <td>Nome</td>
            <td>Valor</td>
          </tr>

          {data.length > 0 && data.map((item, index) => {

            let colorVerify = false;
            if(index % 2 === 0) {
              colorVerify = true;
            }

            return (
              <S.LineTableInformation colorLine={colorVerify} key={index}>
                <td className="item-value">{item.codeProduct.slice(0, 8)}</td>
                <td className="item-value">{item.nameProduct}</td>
                <td className="item-value">R$ {item.priceProduct.toFixed(2).replace('.', ',')}</td>
                <td>
                  <button 
                    className="buttons-action"
                    onClick={() => handleOpenCardFormUpdateProduct(item)}
                  >
                    <IconEdit />
                  </button>
                </td>
                <td>
                  <button 
                    className="buttons-action"
                    onClick={() => handleRemoveProduct(item.codeProduct)} 
                  >
                    <IconTrash />
                  </button>
                </td>
              </S.LineTableInformation>
            )
          })}
          
        </table>
      </S.BoxProducts>
    </S.Container>
  );
}

export { List };