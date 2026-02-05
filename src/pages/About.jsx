import logoImg from '../assets/images/LogoT.png';

function About() {
  return (
    <main className="about-page" style={{ minHeight: '100vh', background: '#28343D', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', paddingTop: '60px' }}>
      <img src={logoImg} alt="AQ Kitchens Logo" style={{ width: '320px', maxWidth: '90vw', marginBottom: '40px', display: 'block' }} />
      <div className="about-intro-content" style={{ maxWidth: '700px', color: '#e9ecee', fontSize: '1.18rem', textAlign: 'center', lineHeight: 1.7 }}>
        <p>
          AQ Kitchens is a family owned business who offer supply only or a complete service from design through to installation and everything in between including all trades. Our friendly and professional team ensure a smooth and professional installation for our high quality rigid built kitchens.
        </p>
        <p style={{ marginTop: '1.5em' }}>
          As a family run business we will design and guide you through your own renovation personally, ensuring our designs make the most of your space. Our one-on-one support, years of design and fitting experience, bespoke cabinetry and customisable options are why choosing AQ Kitchens as your independent retailer is the smarter move.
        </p>
      </div>
    </main>
  );
}

export default About;
