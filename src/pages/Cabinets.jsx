import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Auto-import carousel images from a cabinets folder (you can add images here)
// For now, we'll use placeholder logic - add images to src/assets/cabinets/carousel/
const carouselModules = import.meta.glob('../assets/cabinets/carousel/*.{jpg,jpeg,png}', { eager: true, as: 'url' });
const carouselImages = Object.values(carouselModules);

// Auto-import cabinet option images from folders
// Each folder in src/assets/cabinets/options/ becomes a cabinet category
const optionModules = import.meta.glob('../assets/cabinets/options/*/*.{jpg,jpeg,png}', { eager: true, as: 'url' });

// Group images by folder
const cabinetOptions = Object.entries(optionModules).reduce((acc, [path, url]) => {
  const parts = path.split('/');
  const folderName = parts[parts.length - 2]; // Get folder name
  if (!acc[folderName]) {
    acc[folderName] = {
      name: folderName.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
      images: [],
      slug: folderName
    };
  }
  acc[folderName].images.push(url);
  return acc;
}, {});

// Default cabinet options (shown if no images found)
const defaultCabinetOptions = [
  {
    name: "Shaker Style",
    description: "Classic framed doors with timeless appeal",
    slug: "shaker-style"
  },
  {
    name: "Modern Handleless",
    description: "Sleek, contemporary design with clean lines",
    slug: "modern-handleless"
  },
  {
    name: "Traditional",
    description: "Elegant details with ornate craftsmanship",
    slug: "traditional"
  },
  {
    name: "High Gloss",
    description: "Reflective finishes for a luxury feel",
    slug: "high-gloss"
  },
  {
    name: "Natural Wood",
    description: "Warm timber tones and wood grain textures",
    slug: "natural-wood"
  },
  {
    name: "Painted Finishes",
    description: "Custom colours to match your vision",
    slug: "painted-finishes"
  }
];

// Use dynamic options if available, otherwise use defaults
const displayOptions = Object.keys(cabinetOptions).length > 0 
  ? Object.values(cabinetOptions).map(opt => ({
      ...opt,
      image: opt.images[0],
      description: `Explore our ${opt.name.toLowerCase()} collection`
    }))
  : defaultCabinetOptions;

function Cabinets() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    if (carouselImages.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="bg-[#28343D]">
      {/* Hero Carousel Section */}
      <div className="cabinets-hero">
        <div className="cabinets-hero-carousel">
          {carouselImages.length > 0 ? (
            carouselImages.map((img, index) => (
              <div 
                key={index} 
                className={`cabinets-hero-slide ${index === currentSlide ? 'active' : ''}`}
              >
                <img src={img} alt={`Cabinet showcase ${index + 1}`} />
              </div>
            ))
          ) : (
            /* Placeholder gradient if no carousel images */
            <div 
              className="cabinets-hero-slide active"
              style={{ 
                background: 'linear-gradient(135deg, #3a4a54 0%, #28343D 50%, #1e2930 100%)'
              }}
            />
          )}
          
          <div className="cabinets-hero-overlay" />
          
          <div className="cabinets-hero-content">
            <h1>Custom Cabinet Solutions</h1>
            <p>
              Bespoke cabinetry designed and crafted to complement your space. 
              From kitchen cupboards to wardrobes, we create storage solutions 
              that combine beauty with functionality.
            </p>
          </div>
          
          {/* Carousel dots */}
          {carouselImages.length > 1 && (
            <div className="cabinets-carousel-dots">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  className={`cabinets-carousel-dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Main Content Section */}
      <section className="cabinets-content-section">
        {/* Intro text */}
        <div className="cabinets-intro">
          <h2>Crafted to Your Specification</h2>
          <p>
            At AQ Kitchens, we understand that every home is unique. Our cabinet solutions 
            are designed from the ground up to fit your exact requirements – whether you're 
            looking for a full kitchen refit, bedroom wardrobes, or bespoke utility storage. 
            Each piece is handcrafted using premium materials, ensuring durability and a 
            finish that stands the test of time.
          </p>
        </div>

        {/* Cabinet Options Grid */}
        <div className="cabinets-gallery-section">
          <h2>Explore Our Range</h2>
          <p className="cabinets-gallery-subtitle">
            Click on any style to view our collection
          </p>

          <div className="cabinets-grid">
            {displayOptions.map((option, index) => (
              <Link 
                key={index}
                to={`/cabinets/${option.slug}`}
                className="cabinet-card"
                style={option.image ? {} : { background: `linear-gradient(135deg, hsl(${200 + index * 20}, 15%, ${25 + index * 3}%) 0%, #28343D 100%)` }}
              >
                {option.image && (
                  <img src={option.image} alt={option.name} />
                )}
                <div className="cabinet-card-overlay">
                  <h3>{option.name}</h3>
                  <p>{option.description}</p>
                  <span className="cabinet-card-link">
                    View Collection <span>→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Cabinets;
