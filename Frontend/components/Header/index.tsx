import React from 'react';
import { IconAdd, IconFire } from '../Icons';

import S from './styles';

interface IPropsHeader {
  openFormProduct: (info: boolean) => void;
  closeFormProduct: boolean;
}

const Header = ({ openFormProduct, closeFormProduct }: IPropsHeader ) => {

  const handleSendOpenCardForm = () => {
    if(closeFormProduct === false) {
      openFormProduct(!closeFormProduct);
    }
  }

  return (
    <S.BoxContainer>
      <S.BoxLogoIncludes>
      <S.BoxHeader>
        <S.BoxLogoHeader> 
            <IconFire />
          </S.BoxLogoHeader>
          <S.TextHeader>Products Quality</S.TextHeader> 
        </S.BoxHeader>
      </S.BoxLogoIncludes>

      <S.ButtonAddProduct onClick={handleSendOpenCardForm}>
        adicionar
        <S.BoxIconButton>
          <IconAdd />
        </S.BoxIconButton>
      </S.ButtonAddProduct>
    </S.BoxContainer>
  );
}

export default Header;