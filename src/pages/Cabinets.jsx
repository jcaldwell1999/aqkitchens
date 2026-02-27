import { Link } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import logoImg from '../assets/images/LogoT.png';

// Cabinet style definitions - add/edit styles here
// Images should be placed in: assets/cabinets/[folder]/[color].jpg
const cabinetStyles = [
  {
    id: 'mornington-shaker',
    name: 'Mornington Shaker',
    folder: 'mornington-shaker',
    featuredColor: 'Porcelain',
    colors: ['Porcelain', 'Dove Grey', 'Graphite', 'Sage', 'Navy']
  },
  {
    id: 'clarendon',
    name: 'Clarendon',
    folder: 'clarendon',
    featuredColor: 'Stone',
    colors: ['Stone', 'Dust Grey', 'Hartforth Blue', 'Porcelain']
  },
  {
    id: 'hunton',
    name: 'Hunton',
    folder: 'hunton',
    featuredColor: 'Porcelain',
    colors: ['Porcelain', 'Regiment', 'Graphite', 'Sage Green']
  }
];

// Dynamic import of all cabinet images
const allCabinetImages = import.meta.glob(
  '../assets/cabinets/**/*.{jpg,jpeg,png,JPG,JPEG,PNG}',
  { eager: true, query: '?url', import: 'default' }
);

// Helper to get image path for a style and color
const getImagePath = (folder, color) => {
  const colorSlug = color.toLowerCase().replace(/\s+/g, '-');
  const possiblePaths = [
    `../assets/cabinets/${folder}/${colorSlug}.jpg`,
    `../assets/cabinets/${folder}/${colorSlug}.jpeg`,
    `../assets/cabinets/${folder}/${colorSlug}.png`,
    `../assets/cabinets/${folder}/${colorSlug}.JPG`,
    `../assets/cabinets/${folder}/${colorSlug}.JPEG`,
    `../assets/cabinets/${folder}/${colorSlug}.PNG`,
  ];
  
  for (const path of possiblePaths) {
    if (allCabinetImages[path]) {
      return allCabinetImages[path];
    }
  }
  return null;
};

// Get all images for a style folder
const getStyleImages = (folder) => {
  const images = [];
  for (const [path, src] of Object.entries(allCabinetImages)) {
    if (path.includes(`/${folder}/`)) {
      // Extract color name from filename
      const filename = path.split('/').pop();
      const colorName = filename
        .replace(/\.(jpg|jpeg|png)$/i, '')
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      images.push({ src, color: colorName });
    }
  }
  return images;
};

function Cabinets() {
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (style) => {
    setSelectedStyle(style);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = useCallback(() => {
    setModalOpen(false);
    setSelectedStyle(null);
    document.body.style.overflow = '';
  }, []);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && modalOpen) {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [modalOpen, closeModal]);

  // Get images for modal
  const modalImages = selectedStyle ? getStyleImages(selectedStyle.folder) : [];

  return (
    <main className="cabinets-page">
      {/* Header Section */}
      <div className="cabinets-header">
        <img src={logoImg} alt="AQ Kitchens Logo" className="cabinets-logo" />
        
        <div className="cabinets-intro">
          <h1>Cabinet Colours & Finishes</h1>
          <p>
            At AQ Kitchens, we offer a wide selection of colours and finishes to complement 
            any interior style. From timeless neutrals to bold statement colours, each finish 
            is available across our full range of cabinetry.
          </p>
          <p>
            Our cabinets are edged in the same colour as the door, creating a seamless and 
            co-ordinated look. This attention to detail ensures that your kitchen has a 
            professional and polished finish.
          </p>
        </div>
      </div>

      {/* Popular Cabinet Styles - 3 Card Layout */}
      <section className="cabinets-styles-section">
        <h2>Popular Cabinet Styles</h2>
        
        <div className="cabinets-styles-grid">
          {cabinetStyles.map((style) => {
            const featuredImage = getImagePath(style.folder, style.featuredColor);
            const styleImages = getStyleImages(style.folder);
            const hasImages = styleImages.length > 0;
            
            return (
              <button
                key={style.id}
                className="cabinet-style-card"
                onClick={() => hasImages && openModal(style)}
                disabled={!hasImages}
                aria-label={`View ${style.name} colour options`}
              >
                <div className="cabinet-style-image">
                  {featuredImage ? (
                    <img src={featuredImage} alt={`${style.name} in ${style.featuredColor}`} />
                  ) : (
                    <div className="cabinet-style-placeholder">
                      <span>Image coming soon</span>
                    </div>
                  )}
                </div>
                
                <div className="cabinet-style-info">
                  <h3>{style.name}</h3>
                  <p className="cabinet-style-colors">
                    {style.colors.join(' • ')}
                  </p>
                  <span className="cabinet-style-link">
                    View full colour range <span>›</span>
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Brochure & CTA Section */}
      <div className="cabinets-cta">
        <p>View our complete range of colours and finishes in the brochure.</p>
        <a 
          href="/TheKitchenBook.pdf"
          target="_blank" 
          rel="noopener noreferrer" 
          className="cabinets-brochure-btn"
        >
          Download Brochure <span>›</span>
        </a>
        <p className="cabinets-cta-subtext">
          Can't find the colour you're looking for? We offer custom colour matching.
        </p>
        <Link to="/contact" className="cabinets-contact-btn">
          Get in Touch <span>→</span>
        </Link>
      </div>

      {/* Colour Options Modal */}
      {modalOpen && selectedStyle && (
        <div className="cabinet-modal-overlay" onClick={closeModal}>
          <div className="cabinet-modal" onClick={(e) => e.stopPropagation()}>
            <button className="cabinet-modal-close" onClick={closeModal} aria-label="Close modal">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            
            <div className="cabinet-modal-header">
              <h2>{selectedStyle.name}</h2>
              <p>Available in {modalImages.length} colour{modalImages.length !== 1 ? 's' : ''}</p>
            </div>
            
            <div className="cabinet-modal-grid">
              {modalImages.map((img, index) => (
                <div key={index} className="cabinet-modal-item">
                  <div className="cabinet-modal-image">
                    <img src={img.src} alt={`${selectedStyle.name} in ${img.color}`} />
                  </div>
                  <span className="cabinet-modal-color">{img.color}</span>
                </div>
              ))}
            </div>
            
            <div className="cabinet-modal-footer">
              <Link to="/contact" className="cabinet-modal-enquire" onClick={closeModal}>
                Enquire About This Style <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Cabinets;
