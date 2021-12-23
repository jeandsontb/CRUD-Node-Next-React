import styled from "styled-components";

import { theme } from "../../styles/global";

interface IPropsInput {
  personWidth: string;
}

type IPropsContainer = {
  visible: boolean;
}

export default {
  Container: styled.section<IPropsContainer>`
    display: ${({visible}) => visible ? 'flex' : 'none'};
    flex: 1;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 300px;
    padding: 50px; 
    margin-bottom: 100px;
  `,
  BoxAddProduct: styled.div`
    width: 50%;
    height: auto;
    background-color: ${theme.colors.purpleStrongOpacity};
    padding: 10px 20px;
    border-radius: 10px;
  `,
  TextTitleAddProduct: styled.h1`
    font-family: 'Poppins', sans-serif;
    color: ${theme.colors.purpleStrong};
  `,
  BoxFormAddProduct: styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
  `,
  BoxLabelProduct: styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
  `,
  LabelTextInfo: styled.label`
    font-family: 'Nunito', sans-serif;
    font-size: 18px;
    color: ${theme.colors.purpleStrong};
  `,
  InputTextAddProduct: styled.input<IPropsInput>`
    padding: 10px;
    border: none;
    outline: none;
    border-radius: 4px;
    color: ${theme.colors.purpleStrong};
    font-size: 16px;
    width: ${({personWidth}) => personWidth === 'large' ? 'auto' : 160}px;

    ::placeholder {
      color: ${theme.colors.grayActive};
    }
  `,
  BoxButtonsFormProduct: styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
  `,
  ButtonsSendFormProduct: styled.button`
    padding: 10px 20px;
    margin-left: 10px;
    border-radius: 5px;
    background-color: ${theme.colors.purpleStrong};
    color: ${theme.colors.textClean};
    font-family: 'Nunito', sans-serif;
    font-size: 16px;
  `,
  TextInfo: styled.p`
    font-family: 'Nunito', sans-serif;
    font-size: 14px;
    color: ${theme.colors.purpleStrong};
    margin-top: 10px;
  `,

}