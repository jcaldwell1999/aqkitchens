import HeroSection from '../components/HeroSection';
import TeamPhoto from '../assets/images/aboutus/TeamPhoto.jpg';
import WorkshopPhoto from '../assets/images/aboutus/WorkshopImage.jpg';
import OwnersPhoto from '../assets/images/aboutus/couplestock.jpg';

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
      />

      {/* Intro Content Box */}
      <section className="about-intro-section">
        <div className="content-box">
          <p className="intro-text">
            AQ Kitchens is a family owned business who offer supply only or a complete service from design through to installation and everything in between including all trades. Our friendly and professional team ensure a smooth and professional installation for our high quality rigid built kitchens.
          </p>
          <p className="intro-text">
            As a family run business we will design and guide you through your own renovation personally, ensuring our designs make the most of your space. Our one-on-one support, years of design and fitting experience, bespoke cabinetry and customisable options are why choosing AQ Kitchens as your independent retailer is the smarter move.
          </p>
        </div>
      </section>

      {/* Checkerboard Image/Caption Section */}
      <section className="about-grid">
        <div className="grid-row">
          <div className="grid-text left">
            <p>Our kitchens, utility rooms, and cabinets are hand crafted - designed and produced to suit each customer's unique needs</p>
          </div>
          <div className="grid-image right">
            <img src={WorkshopPhoto} alt="Owner working in workshop" />
          </div>
        </div>

        <div className="grid-row">
          <div className="grid-image left">
            <img src={OwnersPhoto} alt="Family business owners" />
          </div>
          <div className="grid-text right">
            <p>A family ran business, who put their heart, soul, and personal touch into everything we do.</p>
          </div>
        </div>

        <div className="grid-row">
          <div className="grid-text left">
            <p>A team of specialists who pour dedication and attention to each and every aspect of their work</p>
          </div>
          <div className="grid-image right">
            <img src={TeamPhoto} alt="Team working together" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
