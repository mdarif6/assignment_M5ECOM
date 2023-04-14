import "./ProductCard.css";
export default function ProductCard({ proditem }) {
  return (
    <div className="ecom-product-card-wrapper">
      <img className="ecom-prod-img" src={proditem.image} alt="" />
      <p>Title : {proditem.title}</p>
      <p>
        Rating : {proditem.rating.rate} ({proditem.rating.count})
      </p>
      <p>Price: {proditem.price}</p>
    </div>
  );
}
