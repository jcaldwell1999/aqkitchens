import Gallery from '../components/Gallery';

// Auto-import images from the `src/assets/our-work/` folder.
// Drop images into that folder and they'll be included automatically.
const modules = import.meta.glob('../assets/our-work/*.{jpg,jpeg,png}', { eager: true, query: '?url', import: 'default' });

// Turn the modules object into a sorted array of { src, title }
const images = Object.entries(modules)
  .sort((a, b) => a[0].localeCompare(b[0]))
  .map(([path, url], index) => ({
    src: url,
    title: path.split('/').pop(),
    // make every 7th image a taller card for variety (adjust as needed)
    tall: index % 7 === 0,
  }));

function OurWork() {
  return (
    <main>
      <div className="our-work-container">
        <div className="our-work-inner container">
          <header className="our-work-hero">
            <h2>Our Work</h2>
            <p>Selected projects — kitchens, cabinets & utility rooms.</p>
          </header>

          <Gallery images={images} initialCount={12} increment={12} />
        </div>
      </div>
    </main>
  );
}

export default OurWork;
