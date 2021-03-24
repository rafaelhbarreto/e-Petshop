import { BreadList, Container} from "./styles";

export function Breadcrumb({links}) {
  
  return (
    <>
      <Container>
        {links.length > 0 && 
          <BreadList>
            {links.map((link) => (
              <li><a href="#">{link.label}</a></li>
              ))}
          </BreadList>
        }
      </Container>
    </>
  )
}