import "./HomePage.css";
import ProductCard from "../../components/product-card/ProductCard";
import Sidebar from "../../components/side-bar/Sidebar";
import { useCart } from "../../context/cart-context";
export default function HomePage() {
  const { state } = useCart();
  console.log(state);

  return (
    <>
      <div className="ecom-main-section">
        <Sidebar />
        <div className="ecom-prodcts-wrapper">
          {state.productsData.map((proditem) => {
            return <ProductCard proditem={proditem} />;
          })}
        </div>
      </div>
    </>
  );
}
