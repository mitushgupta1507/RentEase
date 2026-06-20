import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div
        style={{
          background: "#111827",
          color: "white",
          textAlign: "center",
          padding: "100px 20px",
        }}
      >
        <h1 style={{ fontSize: "60px" }}>🏠 Welcome to RentEase</h1>

        <h2>Furniture & Appliance Rental Platform</h2>

        <p style={{ marginTop: "20px" }}>
          Affordable furniture and appliance rentals for students and
          working professionals.
        </p>

        <button
          style={{
            marginTop: "30px",
            padding: "15px 30px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          Explore Products
        </button>
      </div>

      {/* Categories */}
      <div
        style={{
          padding: "60px",
          textAlign: "center",
          background: "#1f2937",
          color: "white",
        }}
      >
        <h1>Featured Categories</h1>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            marginTop: "40px",
          }}
        >
          <div>🛋 Sofa</div>
          <div>🛏 Bed</div>
          <div>❄ Refrigerator</div>
          <div>🧺 Washing Machine</div>
        </div>
      </div>

      {/* Why Choose */}
      <div
        style={{
          background: "#111827",
          color: "white",
          textAlign: "center",
          padding: "80px",
        }}
      >
        <h1>Why Choose RentEase?</h1>

        <h3>✅ Affordable Monthly Rentals</h3>
        <h3>✅ Flexible Plans</h3>
        <h3>✅ Free Delivery & Pickup</h3>
        <h3>✅ Maintenance Support</h3>
      </div>

      <Footer />
    </>
  );
}

export default Home;