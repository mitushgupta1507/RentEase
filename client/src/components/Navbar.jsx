import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#2563eb",
        color: "white",
        padding: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <h2>RentEase</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link style={{ color: "white" }} to="/">Home</Link>
        <Link style={{ color: "white" }} to="/products">Products</Link>
        <Link style={{ color: "white" }} to="/cart">Cart</Link>
        <Link style={{ color: "white" }} to="/login">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;