import axios from "axios";
import { useEffect, useState } from "react";
import { SidebarWrap } from "./styles";
import {api} from '../../services/api';
import { Link } from "react-router-dom";

interface Category {
  id: number;
  title: string;
}

export function Sidebar() {

  const [categories, setCategories] = useState<Category[]>([]); 

  useEffect(() => {
      api.get('/categories').then((response) => {
        setCategories(response.data.categories); 
      })
  }, []); 

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