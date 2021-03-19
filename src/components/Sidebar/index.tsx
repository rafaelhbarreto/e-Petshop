import axios from "axios";
import { useEffect, useState } from "react";
import { SidebarWrap } from "./styles";
import {api} from '../../services/api';


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
            <li key={cat.id}><a href="/">{cat.title}</a></li>
          ))}
        </ul>
      </nav>
    </SidebarWrap>
  );
}