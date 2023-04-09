import "./HomePage.css";
import { useState } from "react";
import productsData from "../../fakeData.json";
export default function HomePage() {
  const [data, setData] = useState(productsData);

  return (
    <div>
      {productsData.map((item) => {
        return (
          <div key={item.id}>
            <img className="ecom-product-img" src={item.image} alt="" />
            <li>{item.category}</li>
            <li>{item.description}</li>
            <li>{item.price}</li>
            <li>{item.rating.count}</li>
            <li>{item.title}</li>
          </div>
        );
      })}
    </div>
  );
}
