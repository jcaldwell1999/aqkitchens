import HeroSection from '../components/HeroSection';
import Gallery from '../components/Gallery';
import heroImg from '../assets/images/UtilityHero.jpg';
import iconChisel from '../assets/icons/craft-wood-chisel-cleaned.svg';
import iconWardrobe from '../assets/icons/wardrobe-cleaned0.5.svg';
import iconWasher from '../assets/icons/washing-machine-cleaned.svg';

// Auto-import images from the utility/boot rooms folder
const modules = import.meta.glob('../assets/utility-boot-rooms/*.{jpg,jpeg,png}', { eager: true, as: 'url' });

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
          logoShift="0px"
          logoUrl={null}
        />
      </div>

      {/* Main content - using padding instead of margin to avoid CSS conflicts */}
      <div className="w-full flex justify-center bg-[#28343D] py-20">
        <div className="max-w-[1200px] w-full px-6 !text-center flex flex-col !items-center">
        {/* Intro paragraph */}
        <div className="text-center mb-20 w-full">
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
            Whether you're extending your kitchen renovation or starting a new project, our utility and boot rooms are tailored to suit your space, lifestyle, and budget.
            A well-designed utility room frees up valuable space elsewhere in the home — especially the kitchen. Tall storage units can neatly hide mops, brushes, and ironing boards, while stacked washing machines and dryers help maximise your floor space.
            Functional and practical can also be beautiful and affordable. Whether you're after a casual chat about your ideas or full design expertise, AQ Kitchens is here to help — every step of the way.
          </p>
        </div>

        {/* Feature cards - centered with proper spacing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl w-full justify-items-center mx-auto mb-24">
          {/* Card 1 - Tall Storage */}
          <div className="flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:scale-105">
            <div className="mb-6 flex items-center justify-center">
              <img
                src={iconWardrobe}
                alt="Tall storage"
                className="w-16 h-16 object-contain"
              />
            </div>
            <h4 className="text-xl font-bold mb-3" style={{ color: '#A08D6A' }}>
              Tall Storage
            </h4>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: '#87AAB9' }}>
              Make the most of vertical space with custom tall cupboards.
            </p>
          </div>

          {/* Card 2 - Integrated Appliances */}
          <div className="flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:scale-105">
            <div className="mb-6 flex items-center justify-center">
              <img
                src={iconWasher}
                alt="Integrated appliances"
                className="w-16 h-16 object-contain"
              />
            </div>
            <h4 className="text-xl font-bold mb-3" style={{ color: '#A08D6A' }}>
              Integrated Appliances
            </h4>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: '#87AAB9' }}>
              Neatly stack and conceal appliances for a streamlined look.
            </p>
          </div>

          {/* Card 3 - Space Efficient */}
          <div className="flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:scale-105">
            <div className="mb-6 flex items-center justify-center">
              <img
                src={iconChisel}
                alt="Space efficient"
                className="w-16 h-16 object-contain"
              />
            </div>
            <h4 className="text-xl font-bold mb-3" style={{ color: '#A08D6A' }}>
              Space Efficient
            </h4>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: '#87AAB9' }}>
              Smart layouts that maximise storage while saving floor space.
            </p>
          </div>
        </div>

        {/* Gallery section */}
        <div className="w-full" style={{ paddingTop: '60px' }}>
          <div className="max-w-6xl w-full mx-auto">
            <h2 className="text-4xl font-bold text-center mb-3" style={{ color: '#e9ecee' }}>
              Our Boot Rooms
            </h2>
            <p className="text-center mb-12" style={{ color: '#bfc8ca' }}>
              Explore our recent utility and boot room installations
            </p>
            
            {images.length > 0 ? (
              <Gallery images={images} initialCount={9} increment={6} />
            ) : (
              <p className="text-center text-gray-400">
                Gallery images coming soon. Add images to <code className="bg-gray-700 px-2 py-1 rounded">src/assets/utility-boot-rooms/</code>
              </p>
            )}
          </div>
        </div>
        </div>
      </div>
    </main>
  );
}

export default UtilityBootRooms;
