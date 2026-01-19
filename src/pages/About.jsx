import logoImg from '../assets/images/LogoT.png';

function About() {
  return (
    <main className="about-page">
      {/* Hero Section with Logo and Slogan */}
      <section className="about-hero">
        <div className="logo-container">
          <img src={logoImg} className="aq-logo" alt="AQ Kitchens logo" />
          <p className="slogan">The Smarter Choice For Your Kitchen Journey</p>
        </div>
        
        {/* Main Content Box */}
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
            <img src="/images/workshop.jpg" alt="Owner working in workshop" />
          </div>
        </div>

        <div className="grid-row">
          <div className="grid-image left">
            <img src="/images/owners.jpg" alt="Family business owners" />
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
            <img src="/images/team.jpg" alt="Team working together" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
