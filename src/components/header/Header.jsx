import "./Header.css";
import { BiSearch, BiShoppingBag, BiHeart } from "react-icons/bi";
export default function Header() {
  return (
    <div className="ecom-header-wrapper">
      <div className="ecom-nave-logo">AGEO</div>
      <div className="ecom-nav-icons">
        <div className="search-wrapper">
          <input className="search-input" type="text" />
          <button className="search-btn">
            <BiSearch />
          </button>
        </div>
        <div className="wishlist">
          <BiHeart />
        </div>
        <div className="cart">
          <BiShoppingBag />
        </div>
      </div>
    </div>
  );
}
