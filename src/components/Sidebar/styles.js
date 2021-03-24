import styled from "styled-components";

export const SidebarWrap = styled.aside`
  h3 {
    font-size: 1.6rem;
    color: var(--blue);
    font-weight: 600; 
    display: block;
    margin-bottom: 10px;
  }

  nav {
    padding: 0 .5rem; 
    ul {
      list-style: none;

      li {

        margin: 2.5px 0;

        a {
          color: var(--blue);
          font-size: 1rem;
          display: block;
          text-decoration: none; 
          transition: all linear .2s;

          &:hover {
            color: var(--yellow);
            text-decoration: underline; 
          }
        }
      }
    }
  }
`; 