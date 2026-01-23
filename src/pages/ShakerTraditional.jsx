import { Link } from 'react-router-dom';
import Gallery from '../components/Gallery';

// Auto-import images from the shaker kitchens folder
const modules = import.meta.glob('../assets/kitchens-shaker/*.{jpg,jpeg,png}', { eager: true, as: 'url' });

// Turn the modules object into a sorted array of { src, title }
const images = Object.entries(modules)
  .sort((a, b) => a[0].localeCompare(b[0]))
  .map(([path, url], index) => ({
    src: url,
    title: path.split('/').pop(),
    tall: index % 7 === 0,
  }));

function ShakerTraditional() {
  return (
    <main>
      <div className="kitchen-gallery-container">
        <div className="kitchen-gallery-inner container">
          <header className="kitchen-gallery-hero">
            <Link to="/kitchens" className="back-link">← Back to Kitchens</Link>
            <h2>Shaker & Traditional</h2>
            <p>Timeless elegance with classic design elements and quality craftsmanship.</p>
          </header>

          {images.length > 0 ? (
            <Gallery images={images} initialCount={12} increment={12} />
          ) : (
            <p className="no-images-message">Gallery coming soon — check back for our latest Shaker & Traditional kitchen projects.</p>
          )}
        </div>
      </div>
    </main>
  );
}

export default ShakerTraditional;
