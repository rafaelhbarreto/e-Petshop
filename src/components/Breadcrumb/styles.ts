import styled from 'styled-components';


export const Container = styled.div`
  width: 100%;
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 15px;
`;

export const BreadList = styled.ul`
  list-style: none;
  display: flex; 
  flex-direction: row; 
  margin: 15px 0;
  
  li {
    a {
      color: var(--breadcrumb-text-color); 
      font-size: .875rem;
      text-decoration: none; 
      display: inline-block;

      &:after {
        content: '>';
        display: inline-block;
        margin: 0 7px;
        font-weight: bold; 
      }

      &:hover {

      }
    }

    &:last-child > a::after{
      content: ' ';
    }
  }
`;