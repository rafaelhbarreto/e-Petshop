import {createGlobalStyle} from 'styled-components'; 

export const GlobalStyles = createGlobalStyle`

  :root {
    --blue: #103178; 
    --yellow: #ff9923;
    --white: #fff; 
    --red: #f00000;

    --input-background: #f0f2f5;
    --input-placeholder: #d0d0d0; 
    --input-border: #f0f2f5;
    --input-color: #5b6c8f;

    --breadcrumb-text-color: #5b6c8f;


    --container-width: 1270px;
  }

  * {
    margin: 0;
    padding: 0; 
    box-sizing: border-box; 
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.50%; 
    }
  }

  body {
    background: var(--white); 
    -webkit-font-smoothing: antialiased;

  }
  
  body, input, textarea, button {
    font-family: 'Jost', sans-serif;
  }

  h1,h2,h3,h4,h5,h5, strong {
      font-weight: 600; 
  }

  [disabled] {
      opacity: 0.6;
      cursor: not-allowed;
  }

`; 