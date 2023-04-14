import "./Sidebar.css";
import { BiChevronDown } from "react-icons/bi";
export default function Sidebar() {
  return (
    <div className="ecom-sidebar">
      <div className="filter-wrapper">
        <p>Rfine By</p>
        <BiChevronDown />
      </div>

      <p>Category</p>
      <input type="checkbox" />
    </div>
  );
}
