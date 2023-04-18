import "./App.css";
import Category from "./components/category/Category";
import LayoutComponent from "./components/layout-component/LayoutComponent";
import HomePage from "./pages/home-page/HomePage";

const arryOb = [
  { name: "cloth", category: "men" },
  { name: "cloth", category: "women" },
  { name: "cloth", category: "kids" },
];

const selectedArr = ["women", "kids"];

const newArray = arryOb.filter((item) => {
  if (selectedArr.indexOf(item.category) === -1) {
    return false;
  } else {
    return true;
  }
});
console.log(newArray);

function App() {
  return (
    <div className="App">
      <LayoutComponent>
        <HomePage />
        <Category />
      </LayoutComponent>
    </div>
  );
}

export default App;
