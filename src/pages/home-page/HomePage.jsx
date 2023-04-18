import "./HomePage.css";
import ProductCard from "../../components/product-card/ProductCard";
import Sidebar from "../../components/side-bar/Sidebar";
import { useCart } from "../../context/cart-context";

export default function HomePage() {
  const { state } = useCart();

  const filterFunction = (data, categoryArray) => {
    if (categoryArray) {
      let filterValue = data.filter(
        (item) => item.category === "men's clothing"
      );
      return filterValue;
    } else {
      return data;
    }
  };

  let filteredData =
    state.productsData && filterFunction(state.productsData, state.categories);

  console.log(state.productsData, state.categories, filteredData);

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
