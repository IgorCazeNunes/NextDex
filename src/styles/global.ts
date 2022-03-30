import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local(''),
        url('/fonts/SF-Pro-Display-Regular.OTF') format('truetype'); /* Chrome 26+, Opera 23+, Firefox 39+ */
  }

  @font-face {
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local(''),
        url('/fonts/SF-Pro-Display-Medium.OTF') format('truetype'); /* Chrome 26+, Opera 23+, Firefox 39+ */
  }

  @font-face {
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local(''),
        url('/fonts/SF-Pro-Display-Bold.OTF') format('truetype'); /* Chrome 26+, Opera 23+, Firefox 39+ */
  }

  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: 0;
    }

    html {
      font-size: 62.5%;
    }

    body {
      background: ${theme.colors.background.white};
      color: ${theme.colors.text.black};

      -webkit-font-smoothing: antialiased;
    }

    body,
    input,
    button {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: ${theme.font.weight.regular};
    }

    button {
      cursor: pointer;
    }
  `}
`;

export default GlobalStyles;
