import { BreadList, Container} from "./styles";

interface Link {
  label: string;
  link: string; 
}

interface BreadcrumbProps {
  links: Array<Link>;
}

export function Breadcrumb({links}: BreadcrumbProps) {
  
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