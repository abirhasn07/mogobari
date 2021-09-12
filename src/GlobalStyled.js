import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`


:root{
  --maxWidth:1280px;
  --transition: 0.7s ease-in-out;
  --green:#207567;
  --red:#ed2939;
  --shade:#ecf0f1;
  --white:#fff;
  --blueWhite:#f2f3f8;
  --fontBig:2rem;
  --fontMed:1.5rem;
  --fontSmall:1rem;
  --transition:all 0.3s ;

}
*{margin: 0;
padding: 0;}


  body {
    font-family: 'Open Sans', sans-serif;
    font-weight: 500;
    overflow-x: hidden;

    li{
      list-style: none;
    }
    a{
      text-decoration: none;
    }
  }


  .row{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }
`