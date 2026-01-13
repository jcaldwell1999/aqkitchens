import HeroSection from '../components/HeroSection';
import heroImg from '../assets/images/UtilityHero.jpg';
import iconChisel from '../assets/icons/craft-wood-chisel-cleaned.svg';
import iconWardrobe from '../assets/icons/wardrobe-cleaned0.5.svg';
import iconWasher from '../assets/icons/washing-machine-cleaned.svg';

function UtilityBootRooms() {
  return (
    <main>
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

      {/* Main content section */}
      <div className="container">
        <section className="content content-fade mt-32 mb-20"> {/* increased top margin for more space from hero */}
          <div className="fade-inner container max-w-4xl mx-auto text-center">
            <p className="text-gray-300 mb-0 utility-paragraph text-base leading-relaxed"> {/* matched bottom margin to match top spacing */}
              Whether you're extending your kitchen renovation or starting a new project, our utility and boot rooms are tailored to suit your space, lifestyle, and budget.
              A well-designed utility room frees up valuable space elsewhere in the home — especially the kitchen. Tall storage units can neatly hide mops, brushes, and ironing boards, while stacked washing machines and dryers help maximise your floor space.
              Functional and practical can also be beautiful and affordable. Whether you're after a casual chat about your ideas or full design expertise, AQ Kitchens is here to help — every step of the way.
            </p>

            <div className="feature-row-slim mt-32 flex flex-col md:flex-row justify-center items-start gap-16">
              {/* Card 1 */}
              <div className="feature-slim text-center transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.25)]">
                <img
                  src={iconWardrobe}
                  alt="Tall storage"
                  className="feature-icon mx-auto w-16 md:w-20 mb-6"
                />
                <h4 className="text-[#F5F5F5] text-lg font-semibold">Tall Storage</h4>
                <p className="feature-desc text-gray-300 mt-1 text-sm">
                  Make the most of vertical space with custom tall cupboards.
                </p>
              </div>

              {/* Card 2 */}
              <div className="feature-slim text-center transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.25)]">
                <img
                  src={iconWasher}
                  alt="Integrated appliances"
                  className="feature-icon mx-auto w-16 md:w-20 mb-6"
                />
                <h4 className="text-[#F5F5F5] text-lg font-semibold">Integrated Appliances</h4>
                <p className="feature-desc text-gray-300 mt-1 text-sm">
                  Neatly stack and conceal appliances for a streamlined look.
                </p>
              </div>

              {/* Card 3 */}
              <div className="feature-slim text-center transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.25)]">
                <img
                  src={iconChisel}
                  alt="Space efficient"
                  className="feature-icon mx-auto w-16 md:w-20 mb-6"
                />
                <h4 className="text-[#F5F5F5] text-lg font-semibold">Space Efficient</h4>
                <p className="feature-desc text-gray-300 mt-1 text-sm">
                  Smart layouts that maximise storage while saving floor space.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default UtilityBootRooms;
