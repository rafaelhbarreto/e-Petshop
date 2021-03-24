import styled from "styled-components";
import {lighten} from "polished"; 

export const Message = styled.span`
  background-color: var(--blue); 
  color: ${lighten(.03, '#ff9923')};
  padding: 8px 0 8px 35px;
  position: relative; 
  text-align: center;
  width: 100%; 
  display: block;
  font-weight: 500;
  font-size:  .937rem;

  button {
    border: none;
    background: transparent;
    display: block;  
    position: absolute; 
    right: 16px;
    top: 3px;
    cursor: pointer; 
    color: ${lighten(.03, '#ff9923')};
    font-size: 1rem;
  }

`;