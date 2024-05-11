import "./CategoryList.css";
import { NavLink } from "react-router-dom";

const MIS_RUTAS = [
  {
    path: "/",
    label: "INICIO",
  },
  {
    path: "/products",
    label: "PRODUCTOS",
  },
  {
    path: "/mesas",
    label: "MESAS",
  },
  {
    path: "/revestimiento",
    label: "REVESTIMIENTO",
  },
  {
    path: "/contacto",
    label: "CONTACTO",
  },
];

function CategoryList() {
  return (
    <nav>
      <ul className="category--list">
        {MIS_RUTAS.map((ruta) => (
          <li key={ruta.path}>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "")}
              to={ruta.path}
            >
              {ruta.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default CategoryList;
