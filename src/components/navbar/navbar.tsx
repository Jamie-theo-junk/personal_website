import { Link } from "react-router-dom";
import "./navbar.css"
function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> 
      <Link to="/Freelance" className="freelance">Freelance</Link>
      <Link to="/Contact">Contact Me</Link>
      <Link to="/Projects">Projects</Link>
      <Link to="/MyCv" className="myCv">My Cv</Link>
    </nav>
  );
}
export default Navbar;