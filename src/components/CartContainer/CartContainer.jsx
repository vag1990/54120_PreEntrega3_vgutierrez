import { useContext } from "react";
import CartContext from "../../contexts/CartContext";
import CartItem from "../CartItem/CartItem";
import "./CartContainer.css";

export default function CartContainer() {
  const { cart, clearCart, cartTotal } = useContext(CartContext);

  return (

    <div className="pt-3">
      <h2 className="text-2xl tituloCarrito">MI CARRITO</h2>
      <div className="contenedorEnCart pt-3 flex flex-col gap-5">
        {cart.length === 0 ? (
          <h1>No hay productos en el carrito</h1>
        ) : (
          cart.map((item) => {
            return <CartItem key={item.product.id} item={item} />;
          })
        )}
      </div>
      <h3 className="text-xl font-semibold mt-3 importeTotal">Total: ${cartTotal}</h3>
      <div >
        <h2>Formulario de compra.</h2>
        <form className="formCart" action="">
          <label>Nombre</label>
          <input type="text" placeholder="Nombre del comprador"/>
          <label>Apellido</label>
          <input type="text" placeholder="Apellido del comprador" />
          <label>Mail</label>
          <input type="email" placeholder="Email del comprador" />
        </form>
      </div>

      <button
        className="mt-3 bg-red-400 text-white rounded-md px-2 py-1"
        onClick={clearCart}
      >
        Limpiar carrito
      </button>
      <button
        className="mt-3 bg-red-400 text-white rounded-md px-2 py-1"
        onClick={clearCart}
      >
        Comprar
      </button>
    </div>
  );
}
