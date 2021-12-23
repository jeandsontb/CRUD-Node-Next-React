import styled from "styled-components";
import { theme } from "../../styles/global";

interface IPropsComponent {
  colorLine: boolean;
}

export default {
  Container: styled.section`
    margin: 20px 0 60px 0;
  `,
  BoxTitleList: styled.div`    
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
  `,
  TextTitleList: styled.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 26px;
    color: ${theme.colors.purpleActive};
  `,

  BoxProducts: styled.div`
    display: flex;
    width: 90%;
    margin-left: 10%;

    table {
      width: 90%;
      border-collapse: collapse;

      .titles-line {
        border: none;
        font-family: 'Nunito', sans-serif;
        font-weight: 700;
        font-size: 22px;
        color: ${theme.colors.purpleActive};
      }
      .data-line {
        border: none;
        font-family: 'Nunito', sans-serif;
        font-size: 20px;
        color: ${theme.colors.purpleStrong};
        background-color: bisque;
      }
    }
  `,
  LineTableInformation: styled.tr<IPropsComponent>`
    border: none;
    font-family: 'Nunito', sans-serif;
    font-size: 20px;
    color: ${theme.colors.textStrong};
    background-color: ${({colorLine}) => colorLine 
    ? theme.colors.purpleActiveOpacity 
    : theme.colors.purpleStrongOpacity };
    height: 50px;

    .buttons-action {
      height: 30px;
      width: 30px;
      color: ${theme.colors.grayActive};
      cursor: pointer;
      border: none;
      border-radius: 2px;

      :hover {
        box-shadow: -1px 2px 3px ${theme.colors.purpleActiveOpacity};
        color: ${theme.colors.purpleStrong};
      }
      
    }

    .item-value {
      padding: 0 5px;
      color: ${theme.colors.purpleStrong};
    }
  `

}