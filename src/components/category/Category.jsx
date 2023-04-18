import { useEffect } from "react";
import { useCart } from "../../context/cart-context";

export default function Category({ category, index, categoryUpdate }) {
  const { state, dispatch } = useCart();

  function getCategory(data) {
    let categoryData = [];
    data.filter((item) => categoryData.push(item.category));
    return categoryData;
  }

  let categoryArray = getCategory(state.productsData);

  function getRemovalDuplicateCategoryAndSetCategory(data) {
    let uniqueArray = [];
    return data.filter((item, index, array) => {
      if (array.indexOf(item) === index) {
        uniqueArray.push(item);
        dispatch({ type: "SET_CATEGORY", payload: uniqueArray });
      }
    });
  }
  useEffect(() => {
    getRemovalDuplicateCategoryAndSetCategory(categoryArray);
  }, []);

  return (
    <div>
      <label htmlFor="category">
        <input
          type="checkbox"
          name="categroy"
          value={category}
          id={index}
          onChange={categoryUpdate}
        />
        {category}
      </label>
    </div>
  );
}
