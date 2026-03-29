import { useState } from "react";
import Banner from "./components/Banner/Banner";
import Nav from "./components/Nav/Nav";
import ProductTitle from "./components/ProductTitle/ProductTitle";
import Stats from "./components/Stats/Stats";
import ProductTab from "./components/ProductTab/ProductTab";

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
    </>
  );
}

export default App;
