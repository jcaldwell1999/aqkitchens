import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import homeHeroImg from '../assets/images/HomeHero.jpg';
import shakerImg from '../assets/images/ShakerButton.jpg';
import modernImg from '../assets/images/ModernButton.jpg';

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
          <p className="intro-paragraph mb-16 mt-16">
            From sleek modern designs to timeless Shaker styles, our kitchens are crafted to match your taste and lifestyle.
          </p>

          <div className="style-links flex flex-col md:flex-row justify-center items-start gap-36">
            <Link 
              to="/shaker-traditional" 
              className="style-card w-full md:w-[48%] h-64 bg-cover bg-center" 
              style={{ backgroundImage: `url(${shakerImg})` }} 
              aria-label="Shaker Traditional kitchens">
              <h4 
                className="text-white text-xl font-bold text-center mt-auto mb-4 drop-shadow">
                SHAKER / TRADITIONAL
              </h4>
            </Link>
            <Link 
              to="/modern" 
              className="style-card w-full md:w-[48%] h-64 bg-cover bg-center" 
              style={{ backgroundImage: `url(${modernImg})` }} 
              aria-label="Modern kitchens">
              <h4 className="text-white text-xl font-bold text-center mt-auto mb-4 drop-shadow">
                MODERN
              </h4>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Kitchens;
