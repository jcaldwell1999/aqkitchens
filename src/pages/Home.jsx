import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import homeHeroImg from '../assets/images/HomeHero.jpg';


function Home() {
  return (
    <main>
      {/* Hero at top of page */}
      <HeroSection
        imageUrl={homeHeroImg}
        subtitle="Explore our kitchen range, available fully fitted or as supply."
      />
      <div className="container">
        <section className="hero">
          <h2>Welcome to AQ Kitchens</h2>
          <p>Creating beautiful, functional kitchens tailored to your needs.</p>
        </section>

        <section className="content">
          <h3>Quality Kitchen Design & Installation</h3>
          <p>At AQ Kitchens, we specialize in designing and installing stunning kitchens, cabinets, and utility rooms. With years of experience and a commitment to excellence, we bring your dream kitchen to life.</p>
        </section>
      </div>
    </main>
  );
}

export default Home;
