import { useContext } from "react";
import CartWidget from "../CartWidget/CartWidget";
import CategoryList from "../CategoryList/CategoryList";
import "./NavBar.css";
import CartContext from "../../contexts/CartContext";

export default function NavBar() {
  const { cart } = useContext(CartContext);




  return (
    <div className="navBar">
      <CategoryList />
      <div className={`${cart.length === 0 ? "hidden" : ""}`}>
        <CartWidget  />
      </div>
    </div>
  );
}
