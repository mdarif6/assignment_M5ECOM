import "./HomePage.css";
import { useState } from "react";
import productsData from "../../fakeData.json";
import ProductCard from "../../components/product-card/ProductCard";
import Sidebar from "../../components/side-bar/Sidebar";
import { useCart } from "../../context/cart-context";
export default function HomePage() {
  // const [data, setData] = useState(productsData);
  const { state } = useCart();
  console.log(state);

  return (
    <>
      <div className="ecom-main-section">
        <Sidebar />
        <div className="ecom-prodcts-wrapper">
          {/* {data.map((proditem) => {
            return <ProductCard proditem={proditem} />;
          })} */}
        </div>
      </div>
    </>
  );
}
