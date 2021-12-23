import styled from "styled-components";

import { theme } from "../../styles/global";

export default {
  Container: styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80px;
    background-color: ${theme.colors.purpleStrong};
  `,
  TextFooter: styled.p`
    font-family: 'Nunito', sans-serif;
    font-size: 14px;
    color: ${theme.colors.textClean};
  `,
}