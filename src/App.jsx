import "./App.css";
import "./App.css";
import Layout from "./components/Layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartProvider from "./contexts/CartProvider";
import CartContainer from "./components/CartContainer/CartContainer";
import CheckoutContainer from "./components/CheckoutContainer/CheckoutContainer";
import Home from "./views/Home";
import Contacto from "./views/Contacto"

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ItemListContainer />} />


            <Route
              path="/:categoryName"
              element={<ItemListContainer />}
            />
            <Route
              path="/product/:productId"
              element={<ItemDetailContainer />}
            />
            <Route
              path="/contacto"
              element={<Contacto />}
            />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/checkout" element={<CheckoutContainer />} />
            
          </Routes>
        </Layout>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
