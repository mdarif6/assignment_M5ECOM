import { useState } from "react";
import { useCart } from "../../context/cart-context";
import Category from "../category/Category";
import "./Sidebar.css";
import { BiChevronDown, BiMinus, BiPlus } from "react-icons/bi";
export default function Sidebar() {
  const { state, dispatch } = useCart();
  const [isShow, setIsShow] = useState(false);
  const [categoryShow, setCategoryShow] = useState(false);

  function categoryUpdate(e) {
    if (e.target.checked) {
      dispatch({ type: "ADDING_TO_CATEGORY", payload: e.target.value });
    } else {
      dispatch({ type: "REMVOVING_FROM_CATEGORY", payload: e.target.value });
    }
  }

  return (
    <div className="ecom-sidebar">
      <div className="filter-wrapper">
        <p>Rfine By</p>
        <BiChevronDown onClick={() => setIsShow((prev) => !prev)} />
      </div>

      {isShow ? (
        <>
          <div className="ecom-category-wrapper">
            <div className="ecom-categories">
              {categoryShow ? (
                <>
                  <BiPlus onClick={() => setCategoryShow((prev) => !prev)} />
                </>
              ) : (
                <BiMinus onClick={() => setCategoryShow((prev) => !prev)} />
              )}

              <p>Category</p>
            </div>
            {categoryShow ? (
              <>
                {state.setCategory.map((category, index) => {
                  return (
                    <Category
                      category={category}
                      index={index}
                      categoryUpdate={categoryUpdate}
                    />
                  );
                })}
              </>
            ) : null}
          </div>
        </>
      ) : null}
    </div>
  );
}
