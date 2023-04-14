import "./App.css";
import Category from "./components/category/Category";
import LayoutComponent from "./components/layout-component/LayoutComponent";
import HomePage from "./pages/home-page/HomePage";

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
