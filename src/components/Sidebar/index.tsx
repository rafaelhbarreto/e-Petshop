import { SidebarWrap } from "./styles";
import { Link } from "react-router-dom";
import { useCategories } from "../../hooks/useCategories";

export function Sidebar() {

  const categories = useCategories();

  return (
    <SidebarWrap>
      <h3>Categorias</h3>
      <nav>
        <ul>
          {categories.map((cat) => (
            <li key={cat.id}><Link to={`/produtos/${cat.id}`}>{cat.title}</Link></li>
          ))}
        </ul>
      </nav>
    </SidebarWrap>
  );
}