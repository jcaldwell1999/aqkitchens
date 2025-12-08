import img1 from '../assets/images/HomeHero.jpg';
import img2 from '../assets/images/ModernButton.jpg';
import img3 from '../assets/images/ShakerButton.jpg';
import img4 from '../assets/images/Logo.png';
import img5 from '../assets/images/LogoT.png';

function OurWork() {
  // Build an image array. In a real site you'd add your project images here
  const images = [
    { src: img1, title: 'Project 1' },
    { src: img2, title: 'Project 2' },
    { src: img3, title: 'Project 3' },
    { src: img4, title: 'Project 4' },
    { src: img5, title: 'Project 5' },
    { src: img1, title: 'Project 6' },
    { src: img2, title: 'Project 7' },
    { src: img3, title: 'Project 8' },
    { src: img4, title: 'Project 9' },
    { src: img5, title: 'Project 10' }
  ];

  return (
    <main>
      <div className="our-work-container">
        <div className="our-work-inner container">
          <header className="our-work-hero">
            <h2>Our Work</h2>
            <p>Selected projects — kitchens, cabinets & utility rooms.</p>
          </header>

          <div className="gallery" aria-live="polite">
            {images.map((img, i) => (
              <a key={i} href={img.src} className={`gallery-item ${i % 5 === 0 ? 'tall' : ''}`} aria-label={img.title}>
                <img src={img.src} alt={img.title} loading="lazy" />
                <div className="gallery-caption">{img.title}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default OurWork;
