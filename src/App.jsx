import { Suspense, useState } from "react";
import Banner from "./components/Banner/Banner";
import Nav from "./components/Nav/Nav";
import ProductTitle from "./components/ProductTitle/ProductTitle";
import Stats from "./components/Stats/Stats";
import ProductTab from "./components/ProductTab/ProductTab";
import CardParent from "./components/CardParent/CardParent";
import axios from "axios";

const productData = axios.get("/src/assets/tools.json");

function App() {
  const [currentTab, setCurrentTab] = useState("products");
  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <Stats></Stats>
      <ProductTitle></ProductTitle>
      <ProductTab
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      ></ProductTab>
      <Suspense
        fallback={
          <div className="col-span-full justify-items-center">
            {" "}
            <span className="loading loading-ring loading-xl"></span>{" "}
          </div>
        }
      >
        <CardParent productData={productData}></CardParent>
      </Suspense>
    </>
  );
}

export default App;
