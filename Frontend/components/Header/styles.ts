import styled from "styled-components";
import { theme } from "../../styles/global";

export default {
  BoxContainer: styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 90px;
    background-color: ${theme.colors.purpleStrong};
  `,
  BoxLogoIncludes: styled.div`
    display: flex;
    width: 90%;
    height: 90px;
  `,
  BoxHeader: styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 5%;
  `,
  BoxLogoHeader: styled.div`
    width: 80px;
    height: 80px;
    color: ${theme.colors.textClean};
  `,
  TextHeader: styled.p`  
    color: ${theme.colors.textClean};
    font-family: 'Moo Lah Lah', cursive;
    font-size: 38px;
  `,
  ButtonAddProduct: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 50px;
    background-color: ${theme.colors.textClean};
    color: ${theme.colors.purpleStrong};
    font-family: 'Nunito', sans-serif;
    font-size: 20px;
    margin-left: -150px;
    border-radius: 5px;
    cursor: pointer;
  `,
  BoxIconButton: styled.div`
    width: 20px;
    height: 20px;
    margin-left: 10px;
  `,
}