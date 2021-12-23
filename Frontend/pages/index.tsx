import React, {useState} from 'react';
import styled from 'styled-components';
import { CreateProduct } from '../components/CreateProduct';

import Header from '../components/Header';
import { Footer } from '../components/Footer';
import { List } from '../components/SectionList/List';
import { UpdateProduct } from '../components/UpdateProduct';
import { theme } from '../styles/global';

const Container = styled.body`
  background-color: ${theme.colors.pinkOpacity};
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
`

type TypeDataProducts = {
  codeProduct: string;
  nameProduct: string;
  priceProduct: number;
}

const Home = () => {

  const [ openCardFormProduct, setOpenCardFormProduct ] = useState(false);
  const [ openCardFromProductUpdate, setOpenCardFromProductUpdate ] = useState(false);
  const [ dataUpdateProduct, setDataUpdateProduct ] = useState<TypeDataProducts>();

  return (
    <Container> 
      <Header 
        openFormProduct={setOpenCardFormProduct} 
        closeFormProduct={openCardFormProduct}
      />

      <CreateProduct 
        openFormProduct={openCardFormProduct} 
        closeFormProduct={setOpenCardFormProduct}
      />

      <UpdateProduct 
        openFormProduct={openCardFromProductUpdate} 
        closeFormProduct={setOpenCardFromProductUpdate}
        dataUpdateProduct={dataUpdateProduct}
      />

      <List 
        updateList={openCardFormProduct} 
        updateListUpdate={openCardFromProductUpdate}
        openCardFormUpdate={setOpenCardFromProductUpdate} 
        dataUpdateProduct={setDataUpdateProduct}  
      />

      <Footer />
    </Container>
  )
}

export default Home;