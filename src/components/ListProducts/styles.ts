import styled from "styled-components";
import {darken} from "polished";

export const ProductList = styled.div`
  h3 {
    color: var(--blue);
    font-size: 1.6rem;
    font-weight: bold; 
    display: block;
    margin-bottom: 20px;
  }


  section {
    width: 25%;
    float: left;
    border: 1px solid var(--input-border);
    padding: 1rem;

    img {
      width: 100%; 
    }

    > p {
      font-size: 1rem;
      display: block;
      font-weight: 500;
      color: #424242;
    }

    > span {
      font-size: 1.2rem;
      display: block;
      font-weight: 500;
      color: var(--blue);
      margin-bottom: 15px
    }

    > button {
      background: var(--blue);
      color: var(--white);
      border: none;
      border-radius: 4px;
      display: block; 
      width: 100%;
      display: flex; 
      cursor: pointer; 

      > div {
        padding: .7rem;
        background: ${darken(.1, '#103178')};  
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
        margin-right: 16px;
        display: flex;
        align-items: center;

        > svg {
          margin-right: 5px;
        }
      }

      > span {
        display: flex;
        font-size: .7rem;
        text-transform: uppercase;
        align-items: center;
      }
    }
    
  }
`;