import { useContext } from "react";
import CartContext from "../../contexts/CartContext";
import "./CartItem.css"

export default function CartItem({ item }) {
  const { removeFromCart, addToCart } = useContext(CartContext);

  return (
    <div
      key={item}
      className=" contenedorCart
               flex items-center justify-between
              "
    >
      <div className="contenedorCartItem flex gap-5 items-center ">
        <div className="max-w-[50px]">
          <img className="imgCartItem" src={item.product.image} alt={item.product.title} />
        </div>
        <div>
          <p>{item.product.title}</p>
        </div>
        <div><p>Cantidad: {item.quantity}</p></div>
        <div><p>Precio: ${item.product.price}</p>
        </div>
        <div className="counterCart flex gap-5">
          <button
            className="buttonCounterCart px-1 rounded-full bg-slate-300"
            onClick={() => removeFromCart(item.product.id, 1)}
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button
            className="buttonCounterCart px-1 rounded-full bg-slate-300"
            onClick={() => addToCart(item.product, 1)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
