import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';


const GlobalStyle = createGlobalStyle`
  ${reset}
  :root {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  *,
  ::before,
  ::after {
    box-sizing: inherit;
  }
  html,
  body,
  #root {
    height: 100%;
  }
`;

export default GlobalStyle;
