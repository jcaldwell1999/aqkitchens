import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import homeHeroImg from '../assets/images/HomeHero.jpg';

function Kitchens() {
  return (
    <main>
      {/* Hero at top of page */}
      <HeroSection
        imageUrl={homeHeroImg}
        subtitle="Explore our kitchen range, available fully fitted or as supply."
      />

      <div className="container">
        <section className="content">
          <h3>Your Dream Kitchen Awaits</h3>
          <p>At AQ Kitchens, we design and install stunning kitchens that are both beautiful and practical. Our expert team will guide you through every step of the process, from initial design to final installation.</p>
          <p>Explore our kitchen styles to find the perfect match for your home:</p>

          <div className="style-links">
            <Link to="/shaker-traditional" className="style-card">
              <h4>Shaker / Traditional</h4>
              <p>Timeless elegance with classic design elements</p>
            </Link>
            <Link to="/modern" className="style-card">
              <h4>Modern</h4>
              <p>Sleek, contemporary kitchens for modern living</p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Kitchens;
