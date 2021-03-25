import styled from "styled-components";

export const Container = styled.div`
  padding: 0 15px; 
  width: 100%;
  max-width: var(--container-width); 
  margin: 0 auto; 
  margin-bottom: 50px;

  h2 {
    font-size: 3rem;
    color: var(--blue);
    display: block;
  }

`;

export const ContainerWrap = styled.div`
  display: grid; 
  grid-template-columns: 9fr 3fr;
  grid-gap: 5rem;

  table{
    margin: 0 -1px 24px 0;
    text-align: left;
    width: 100%;
    border-collapse: separate;
    margin: 0;
    border-width: 0;
    table-layout: auto;

    tbody tr {
      font-size: 1rem;
      color: var(--blue);
      text-align: left;
      width: 100%;
      border-radius: 5px;

      td:nth-child(4), 
      td:nth-child(6) {
        font-weight: bold;
      }

      td {
        
        border-top: 1px solid rgba(0,0,0,.1);
      }
    }

    td:first-child {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100px;
    } 

    button {
      background: transparent;
      border: none;
      display: flex;
      text-align: center;
      justify-content: center;  
      width: 30px;
      height: 30px;
      border-radius: 50%;
      font-size: 1rem; 
      color: var(--red);
      cursor: pointer; 

      transition: all .2s linear;

      &:hover {
        background: var(--red);
        color: white;
      }
    }

    th { 
      padding: 10px 20px;
      border-width: 0;
      color: var(--blue);
    }

    img {
      width: 100px;
    }
  }

  .number-button {
    background: rgba(240,242,245,1);
    width: 130px;
    height: 46px;
    position: relative;
    letter-spacing: 0;
    border-radius: 60px;
    

    input[type="text"] {
      width: 100%;
      margin: 0;
      padding: 13px 30px;
      border-width: 0;
      color: rgba(91,108,143,1);
      background: transparent;
      text-align: center;
    }

    input[type="button"] {
      width: 50px;
      height: 46px;
      position: absolute;
      right: 0;
      margin: 0;
      border-width: 0;
      cursor: pointer;
      font-size: 20px;
      background: transparent;
      color: var(--blue);

      &:focus-visible {
        border: none;
      }

      &.minus {
        left: 0;
        right: auto;
      }
      
      &.plus {
        left: auto;
        right: 0;
      }
    }


  }
`;

export const Resume = styled.div`
  background: rgba(240,242,245,1);
  padding: 1rem; 
  border-radius: 4px;
  max-height: 180px; 

  h4 {
    color: var(--blue);
    font-size: 1.2rem;
    display: block;
    margin-bottom: 1rem;
  }

  .resumo-produtos {
    display: flex; 
    justify-content: space-between;
    color: #666; 
  }

  hr {
    border: none;
    background-color: #dfdfdf; 
    height: 2px;
    margin: 1rem 0;
  }

  a {
    background-color: var(--blue);
    color: white;
    text-decoration: none; 
    padding: .5rem 1rem;
    border-radius: 4px;
    margin: 1rem 0 0;
    display: block;
    text-align: center;
  }
`;

export const Alert = styled.div`
  display: block;
  margin: 1rem 0;
  background: var(--blue); 
  color: white; 
  border-radius: 4px;
  padding: .8rem 1.2rem;

  a {
    color: white; 
  }
`;  