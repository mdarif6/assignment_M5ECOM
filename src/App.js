import "./App.css";
import LayoutComponent from "./components/layout-component/LayoutComponent";
import HomePage from "./pages/home-page/HomePage";

function App() {
  return (
    <div className="App">
      <LayoutComponent>
        <HomePage />
      </LayoutComponent>
    </div>
  );
}

export default App;
