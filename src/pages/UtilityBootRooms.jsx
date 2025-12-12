import HeroSection from '../components/HeroSection';
import heroImg from '../assets/images/HomeHero.jpg';
import iconChisel from '../assets/icons/craft-wood-chisel-svgrepo-com.svg';
import iconWardrobe from '../assets/icons/wardrobe-svgrepo-com.svg';
import iconWasher from '../assets/icons/washing-machine-laundry-cleaning-housekeeping-washing-svgrepo-com.svg';

function UtilityBootRooms() {
  return (
    <main>
      <div className="utility-hero">
      <HeroSection
        imageUrl={heroImg}
        title={"Utility & Boot Rooms"}
        subtitle={"Built to fit your space, lifestyle & budget"}
        buttons={<a href="/our-work" className="btn-brochure">VIEW OUR WORK</a>}
        height={"h-[60vh]"}
      />
      </div>

      <div className="container">
        <section className="content content-fade">
          <div className="fade-inner container">
            <h3>Practical Utility & Boot Room Solutions</h3>
            <p>Transform your utility and boot rooms into efficient, organized spaces. Our designs maximise storage and functionality while maintaining aesthetic appeal.</p>

            <div className="feature-row-slim">
              <div className="feature-slim">
                <img src={iconWardrobe} alt="Tall storage" className="feature-icon" style={{ height: 36, width: 'auto' }} />
                <h4>Tall Storage</h4>
              </div>

              <div className="feature-slim">
                <img src={iconWasher} alt="Integrated appliances" className="feature-icon" style={{ height: 36, width: 'auto' }} />
                <h4>Integrated Appliances</h4>
              </div>

              <div className="feature-slim">
                <img src={iconChisel} alt="Space efficient" className="feature-icon" style={{ height: 36, width: 'auto' }} />
                <h4>Space Efficient</h4>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default UtilityBootRooms;
