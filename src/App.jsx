import "./App.css";
import Layout from "./components/Layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartProvider from "./contexts/CartProvider";
import CartContainer from "./components/CartContainer/CartContainer";
import Home from "../src/views/Home";
import Contacto from "../src/views/Contacto";

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
            <Route path="/checkout" element={<h1>Proximamente...</h1>} />
          </Routes>
        </Layout>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
