import { Suspense, useState } from "react";
import Banner from "./components/Banner/Banner";
import Nav from "./components/Nav/Nav";
import ProductTitle from "./components/ProductTitle/ProductTitle";
import Stats from "./components/Stats/Stats";
import ProductTab from "./components/ProductTab/ProductTab";
import CardParent from "./components/CardParent/CardParent";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import CartParent from "./components/CartParent/CartParent";

const productData = axios.get("/src/assets/tools.json");

function App() {
  const [currentTab, setCurrentTab] = useState("products");
  const [cart, setCart] = useState([]);

  return (
    <>
      <Nav cart={cart}></Nav>
      <Banner></Banner>
      <Stats></Stats>
      <ProductTitle></ProductTitle>
      <ProductTab
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        cart={cart}
      ></ProductTab>
      {currentTab === "products" ? (
        <Suspense
          fallback={
            <div className="col-span-full justify-items-center">
              {" "}
              <span className="loading loading-ring loading-xl"></span>{" "}
            </div>
          }
        >
          <CardParent
            productData={productData}
            cart={cart}
            setCart={setCart}
          ></CardParent>
        </Suspense>
      ) : (
        <CartParent setCart={setCart} cart={cart}></CartParent>
      )}

      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
