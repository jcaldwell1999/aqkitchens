import { Link } from 'react-router-dom';

// Cabinet colour/style options for the grid gallery
const cabinetStyles = [
  { name: "Shaker White", color: "#F5F5F0" },
  { name: "Dove Grey", color: "#9CA3A8" },
  { name: "Sage Green", color: "#8A9A7B" },
  { name: "Navy Blue", color: "#2C3E50" },
  { name: "Charcoal", color: "#3A3A3A" },
  { name: "Cream", color: "#F5E6D3" },
  { name: "Dusty Pink", color: "#D4A5A5" },
  { name: "Forest Green", color: "#2D5A3D" },
  { name: "Slate Blue", color: "#6B8BA4" },
  { name: "Natural Oak", color: "#C4A35A" },
  { name: "Walnut", color: "#5D4037" },
  { name: "Black Matt", color: "#1A1A1A" },
];

function Cabinets() {
  return (
    <main className="bg-[#28343D]">
      {/* Hero Section */}
      <div className="cabinets-hero">
        <div className="cabinets-hero-overlay" />
        <div className="cabinets-hero-content">
          <h1>Cabinet Colours & Finishes</h1>
          <p>Explore our range of premium colours and finishes for your bespoke cabinetry</p>
        </div>
      </div>

      {/* Main Content Section */}
      <section className="cabinets-content-section">
        {/* Intro text */}
        <div className="cabinets-intro">
          <h2>Find Your Perfect Finish</h2>
          <p>
            At AQ Kitchens, we offer a wide selection of colours and finishes to complement 
            any interior style. From timeless neutrals to bold statement colours, each finish 
            is available across our full range of handcrafted cabinetry.
          </p>
        </div>

        {/* Colour Grid Gallery */}
        <div className="cabinets-gallery-section">
          <h2>Our Colour Range</h2>
          <p className="cabinets-gallery-subtitle">
            Click any colour to enquire or see examples
          </p>

          <div className="cabinets-color-grid">
            {cabinetStyles.map((style, index) => (
              <Link 
                key={index}
                to="/contact"
                className="cabinet-color-card"
              >
                <div 
                  className="cabinet-color-swatch"
                  style={{ backgroundColor: style.color }}
                />
                <span className="cabinet-color-name">{style.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="cabinets-cta">
          <p>Can't find the colour you're looking for? We offer custom colour matching.</p>
          <Link to="/contact" className="cabinets-cta-btn">
            Get in Touch <span>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Cabinets;
