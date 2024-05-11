import "./CategoryList.css"
import { NavLink } from "react-router-dom";

const MIS_RUTAS = [
    {
        path: "/inicio",
        label: "inicio",
    },
    {
        path: "/productos",
        label: "productos",
    },
    {
        path: "/blends",
        label: "blends",
    },
    {
        path: "/contacto",
        label: "contacto",
    },

];

export default function CategoryList() {
    return (
        <nav>
            <ul className="categoryList">
                {MIS_RUTAS.map((ruta) => (
                    <li>
                        <NavLink className={({ isActive }) => (isActive ? "activeLink" : "")}>
                            {ruta.label}
                            </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}