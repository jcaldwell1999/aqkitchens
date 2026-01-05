import HeroSection from '../components/HeroSection';
import heroImg from '../assets/images/UtilityHero.jpg';
import iconChisel from '../assets/icons/craft-wood-chisel-cleaned.svg';
import iconWardrobe from '../assets/icons/wardrobe-cleaned0.5.svg';
import iconWasher from '../assets/icons/washing-machine-cleaned.svg';

function UtilityBootRooms() {
  return (
    <main>
      <div className="utility-hero">
      <HeroSection
        imageUrl={heroImg}
        title={<>Utility &<br/>Boot Rooms</>}
        subtitle={"Built to fit your space, lifestyle & budget"}
        buttons={(
          <div className="hero-ctas">
            <a href="/our-work" className="btn-primary btn-utility">VIEW OUR WORK</a>
          </div>
        )}
        height={"h-[100vh]"}
        logoShift={"0px"}
        logoUrl={null}
      />
      </div>

      <div className="container">
        <section className="content content-fade">
          <div className="fade-inner container">
            <h3>Practical Utility & Boot Room Solutions</h3>
            <p>Whether you're extending your kitchen renovation or starting a new project, our utility and boot rooms are tailored to suit your space, lifestyle, and budget.
              A well-designed utility room frees up valuable space elsewhere in the home — especially the kitchen. Tall storage units can neatly hide mops, brushes, and ironing boards, while stacked washing machines and dryers help maximise your floor space.
              Functional and practical can also be beautiful and affordable. Whether you're after a casual chat about your ideas or full design expertise, AQ Kitchens is here to help — every step of the way.</p>

            <div className="feature-row-slim">
              <div className="feature-slim">
                <img src={iconWardrobe} alt="Tall storage" className="feature-icon" />
                <h4>Tall Storage</h4>
                <p className="feature-desc">Make the most of vertical space with custom tall cupboards.</p>
              </div>

              <div className="feature-slim">
                <img src={iconWasher} alt="Integrated appliances" className="feature-icon" />
                <h4>Integrated Appliances</h4>
                <p className="feature-desc">Neatly stack and conceal appliances for a streamlined look.</p>
              </div>

              <div className="feature-slim">
                <img src={iconChisel} alt="Space efficient" className="feature-icon" />
                <h4>Space Efficient</h4>
                <p className="feature-desc">Smart layouts that maximise storage while saving floor space.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default UtilityBootRooms;
