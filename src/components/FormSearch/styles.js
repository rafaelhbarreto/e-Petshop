import styled from 'styled-components'; 
import {lighten} from 'polished'; 

export const Form = styled.form`

  display: flex; 
  align-items: center; 
  justify-content: center;

  input[type="text"] {
    width: 100%;
    max-width: 700px;
    height: 2.87rem;
    background-color: var(--input-background);
    border: 1px solid var(--input-boder);
    border-radius: 20px;
    color: var(--input-color);
    font-size: 1rem; 
    padding: 10px 25px;  

    &::placeholder {
      color: rgba(91,108,143,1);
    }

    &:focus-visible {
      outline: none;
    }

  }
`;