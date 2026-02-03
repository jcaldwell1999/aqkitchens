import HeroSection from '../components/HeroSection';
import TeamPhoto from '../assets/images/aboutus/TeamPhoto.jpg';
import WorkshopPhoto from '../assets/images/aboutus/WorkshopImage.jpg';
import OwnersPhoto from '../assets/images/aboutus/couplestock.jpg';
import logoImg from '../assets/images/LogoT.png';

function About() {
  return (
    <main className="about-page">
      {/* Hero Section - consistent with other pages */}
      <HeroSection
        imageUrl={WorkshopPhoto}
        title="About Us"
        subtitle="The Smarter Choice For Your Kitchen Journey"
        height="h-[50vh]"
        centerContent={true}
        showLogo={false}
      />

      {/* Intro Content Section */}
      <section className="about-intro-section">
        <div className="about-intro-content">
          <p>
            AQ Kitchens is a family owned business who offer supply only or a complete service from design through to installation and everything in between including all trades. Our friendly and professional team ensure a smooth and professional installation for our high quality rigid built kitchens.
          </p>
          <p>
            As a family run business we will design and guide you through your own renovation personally, ensuring our designs make the most of your space. Our one-on-one support, years of design and fitting experience, bespoke cabinetry and customisable options are why choosing AQ Kitchens as your independent retailer is the smarter move.
          </p>
        </div>
      </section>

      {/* Logo and blurb only, per client request */}
      <section className="about-logo-blurb" style={{ textAlign: 'center', marginTop: '40px' }}>
        <img src={logoImg} alt="AQ Kitchens Logo" style={{ width: '220px', marginBottom: '24px' }} />
      </section>
    </main>
  );
}

export default About;
