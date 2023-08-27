import { useEffect } from "react";
import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

function App() {
  //this is call in ui-slice
  const showCart = useSelector((state) => state.ui.cartVisible);
  //this is call in cart-slice
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    fetch(
      "https://react-http-1a345-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
      {
        method: "PUT",
        body: JSON.stringify(cart),
      }
    );
  }, [cart]);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
