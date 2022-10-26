import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`

  :root {
    --bg:        #F9F9F9;
    --black-900: #222222;
    --gray-700:  #797979;
    --gray-500:  #CFCFCF;
    --primary:   #285FEC;

    font-size: 10px;
  }

  body {
    font-family: 'Inter', sans-serif;
    background-color: var(--bg);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


`
