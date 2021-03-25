import { Link } from "react-router-dom";
import { BreadList, Container} from "./styles";

export function Breadcrumb({links}) {
  
  return (
    <>
      <Container>
        {links.length > 0 && 
          <BreadList>
            {links.map((link) => (
              <li><Link to={link.link}>{link.label}</Link></li>
              ))}
          </BreadList>
        }
      </Container>
    </>
  )
}