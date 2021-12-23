import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;

const theme = {
  colors: {
    purpleStrong: '#8C1B50',
    purpleStrongOpacity: 'rgba(140,27,80,0.2)',
    purpleActive: '#BF216B',
    purpleActiveOpacity: "rgba(191,33,107,0.3)",
    grayActive: '#516673',
    pinkOpacity: '#F2D1C9',
    textStrong: '#0D0D0D',
    textClean: '#FFFFFF'
  }
}

// font-family: 'Moo Lah Lah', cursive;
// font-family: 'Poppins', sans-serif;
// font-family: 'Nunito', sans-serif;

export { GlobalStyle, theme };