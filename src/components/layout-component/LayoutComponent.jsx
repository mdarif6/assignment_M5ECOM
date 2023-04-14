import Footer from "../footer/Footer";
import Header from "../header/Header";
import "./LayoutComponent.css";
export default function LayoutComponent({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
