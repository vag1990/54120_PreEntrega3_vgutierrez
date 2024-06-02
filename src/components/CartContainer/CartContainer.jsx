import { useContext, useState } from "react";
import CartContext from "../../contexts/CartContext";
import CartItem from "../CartItem/CartItem";
import "./CartContainer.css";
import { collection, getFirestore, addDoc } from "firebase/firestore";

export default function CartContainer() {
  const { cart, clearCart, cartTotal } = useContext(CartContext);
const [idOrderGuardada, setIdOrderGuardada] = useState ("")

  const [buyer,setBuyer]=useState ({
    name:"" ,
    apellido:"" ,
    email:"" ,
  })

  const handleInputChange =(e) => {
    setBuyer ({
      ...buyer,
      [e.target.name]:e.target.value,
    });
  }

  const handleSubmit = (e) => {
    e.prevent.default ();
    
   const order = {
      buyer,
      cart,
      cartTotal,
    }
    const db = getFirestore ();
    const orderCollection = collection(db, "orders")
addDoc (orderCollection,order).then (({id}) => setIdOrderGuardada(id));

  };

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
      <button
        className="buttonClearCart"
        onClick={clearCart}
      >
        Limpiar carrito
      </button>
      <div className="contenedorForm" >
        <form className="formCart" action=""  onSubmit={handleSubmit} >
        <h2>FORMULARIO DE COMPRA.</h2>
          <label>NOMBRE</label>
          <input className="inputFormCart" type="text" placeholder="Nombre del comprador" name="name" value={buyer.name} onChange={handleInputChange}/>
          <label>APELLIDO</label>
          <input className="inputFormCart" type="text" placeholder="Apellido del comprador" name="apellido" value={buyer.apellido} onChange={handleInputChange}/>
          <label>MAIL</label>
          <input className="inputFormCart" type="email" placeholder="Email del comprador" name="email" value={buyer.email} onChange={handleInputChange}/>
        </form>


      <button
        className="buttonComprarCart" type="submit"
      >
        Comprar
      </button>
      {idOrderGuardada && (
        <p>Compra realizada con exito, tu nro de orden es: {idOrderGuardada}</p>
      )}
      </div>

    </div>
  );
}
