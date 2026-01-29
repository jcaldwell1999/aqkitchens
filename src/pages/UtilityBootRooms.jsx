import HeroSection from '../components/HeroSection';
import Gallery from '../components/Gallery';
import heroImg from '../assets/images/UtilityHero.jpg';
import iconChisel from '../assets/icons/craft-wood-chisel-cleaned.svg';
import iconWardrobe from '../assets/icons/wardrobe-cleaned0.5.svg';
import iconWasher from '../assets/icons/washing-machine-cleaned.svg';

// Auto-import images from the utility/boot rooms folder
const modules = import.meta.glob('../assets/utility-boot-rooms/*.{jpg,jpeg,png,JPG,JPEG,PNG}', { eager: true, query: '?url', import: 'default' });

const images = Object.entries(modules)
  .sort((a, b) => a[0].localeCompare(b[0]))
  .map(([path, url], index) => ({
    src: url,
    title: path.split('/').pop(),
    tall: index % 5 === 0,
  }));

function UtilityBootRooms() {
  return (
    <main className="bg-[#28343D]">
      {/* Hero section */}
      <div className="utility-hero">
        <HeroSection
          imageUrl={heroImg}
          title={<>Utility &<br />Boot Rooms</>}
          subtitle="Built to fit your space, lifestyle & budget"
          buttons={(
            <div className="hero-ctas">
              <a href="/our-work" className="btn-primary btn-utility">VIEW OUR WORK</a>
            </div>
          )}
          height="h-[100vh]"
          showLogo={false}
          alignLeft={true}
        />
      </div>

      {/* Main content section */}
      <section className="utility-content-section">
        {/* Intro paragraph */}
        <div className="utility-intro">
          <p>
            Whether you're extending your kitchen renovation or starting a new project, our utility and boot rooms are tailored to suit your space, lifestyle, and budget.
            A well-designed utility room frees up valuable space elsewhere in the home — especially the kitchen. Tall storage units can neatly hide mops, brushes, and ironing boards, while stacked washing machines and dryers help maximise your floor space.
            Functional and practical can also be beautiful and affordable. Whether you're after a casual chat about your ideas or full design expertise, AQ Kitchens is here to help — every step of the way.
          </p>
        </div>

        {/* Feature cards */}
        <div className="utility-features">
          {/* Card 1 - Tall Storage */}
          <div className="utility-feature-card">
            <div className="utility-feature-icon">
              <img src={iconWardrobe} alt="Tall storage" />
            </div>
            <h4>Tall Storage</h4>
            <p>Make the most of vertical space with custom tall cupboards.</p>
          </div>

          {/* Card 2 - Integrated Appliances */}
          <div className="utility-feature-card">
            <div className="utility-feature-icon">
              <img src={iconWasher} alt="Integrated appliances" />
            </div>
            <h4>Integrated Appliances</h4>
            <p>Neatly stack and conceal appliances for a streamlined look.</p>
          </div>

          {/* Card 3 - Space Efficient */}
          <div className="utility-feature-card">
            <div className="utility-feature-icon">
              <img src={iconChisel} alt="Space efficient" />
            </div>
            <h4>Space Efficient</h4>
            <p>Smart layouts that maximise storage while saving floor space.</p>
          </div>
        </div>

        {/* Gallery section */}
        <div className="utility-gallery-section">
          <h2>Our Boot Rooms</h2>
          <p className="utility-gallery-subtitle">Explore our recent utility and boot room installations</p>
          
          {images.length > 0 ? (
            <Gallery images={images} initialCount={9} increment={6} />
          ) : (
            <p className="utility-no-images">
              Gallery images coming soon. Add images to <code>src/assets/utility-boot-rooms/</code>
            </p>
          )}
        </div>
      </section>
    </main>
  );
}

export default UtilityBootRooms;
