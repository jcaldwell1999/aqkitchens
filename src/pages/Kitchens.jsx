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

      <div className="kitchens-page-content">
        <div className="container">
          <section className="content">
            <p className="intro-paragraph" style={{ marginBottom: '60px', marginTop: '40px' }}>
              From sleek modern designs to timeless Shaker styles, our kitchens are crafted to match your taste and lifestyle.
            </p>

            <div className="kitchens-style-cards">
              <Link 
                to="/shaker-traditional" 
                className="style-card" 
                style={{ backgroundImage: `url(${shakerImg})` }} 
                aria-label="Shaker Traditional kitchens">
                <h4>SHAKER / TRADITIONAL</h4>
              </Link>
              <Link 
                to="/modern" 
                className="style-card" 
                style={{ backgroundImage: `url(${modernImg})` }} 
                aria-label="Modern kitchens">
                <h4>MODERN</h4>
              </Link>
            </div>
          </section>

          {/* Supply Only Section */}
          <section className="kitchens-supply-section">
            <div className="kitchens-supply-inner">
              <h3>Supply Only</h3>
              {`
                We offer supply-only kitchens to both trade customers and homeowners, combining quality craftmanship with an easy-fit design. 
                All of our kitchens are rigid built,  with all doors and drawers attached.  Any internal mechanisms such as pull out units and 
                waste bins are factory fitted along with any undermount sinks, ensuring a professional finish. This saves you both time and 
                money and makes our kitchens the perfect choice whether you are looking to install your own kitchen or use your own trusted 
                fitter.

                We will design your kitchen to make the most of your space and provide you with high quality images to help you visualise 
                your dream kitchen .  Our one-to-one service means you’ll receive personal design support and expert guidance, helping you 
                achieve a kitchen that looks great and works beautifully. 

                We deliver our kitchens to the majority of the UK and usually within 4 weeks of ordering.  We take care of all the details - 
                we will unpack your cabinetry and remove all packaging.  If your kitchen is ready we will also stand your cabinets in place 
                according to your plan, ready for installation. 
                
                From first contact to design and delivery we offer guidance and support throughout your kitchen journey that only a family 
                run business can offer to both homeowners and trade alike.  Whether you’re fitting a single kitchen or managing multiple 
                plots, we work with you to ensure efficiency, reliability and quality throughout. 
              `.split(/\n\s*\n/).map((para, idx) => (
                <p key={idx}>{para.replace(/\n/g, ' ').trim()}</p>
              ))}
              <Link to="/contact" className="kitchens-supply-btn">
                Enquire About Supply Only <span>→</span>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Kitchens;
