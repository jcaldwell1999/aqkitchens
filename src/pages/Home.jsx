import { Link } from 'react-router-dom';
import { useState } from 'react';
import HeroSection from '../components/HeroSection';
import homeHeroImg from '../assets/images/HomeHero.jpg';
import iconChisel from '../assets/icons/craft-wood-chisel-cleaned.svg';
import iconRuler from '../assets/icons/measuring-ruler-cleaned-1.svg';
import iconWasher from '../assets/icons/house-repair-cleaned-1.svg';

// Google Reviews URL - update this with your actual Google Business reviews link
const GOOGLE_REVIEWS_URL = 'https://www.google.com/search?q=aqkitchens&oq=aqkitchens&gs_lcrp=EgRlZGdlKgYIABBFGDsyBggAEEUYOzIJCAEQABgNGIAEMgkIAhAAGA0YgAQyCAgDEAAYDRgeMggIBBAAGA0YHjIKCAUQABiABBiiBDIGCAYQRRg8MgYIBxBFGDwyBggIEEUYPNIBCDEzMjRqMGoxqAIAsAIA&sourceid=chrome&ie=UTF-8#lrd=0x4870f387b6d484a5:0x9c052dc3e9d311c,1,,,,';

// Testimonials data
const testimonials = [
  {
    title: "Great Result!",
    text: "Absolutely adore my new kitchen by AQ KITCHENS. John and his professional team updated me throughout the whole journey. Listened to what I wanted from my kitchen. Looks completely sleek and elegant. If anyone reading this review looking for a new kitchen that stands out, I promise you won't be disappointed.",
    author: "Claire"
  },
  {
    title: "Highly Recommend!",
    text: "John, Tony, Liam and the rest of the team were fantastic throughout our kitchen fit. They went above and beyond to get it fitted quickly and professionally with any queries sorted out promptly. I love our new kitchen and have had many compliments over it, would recommend AQ kitchens to anyone, thanks again team!",
    author: "Lucy"
  },
  {
    title: "Exceptional Service",
    text: "John and the team were fantastic from start to finish. From making us feel relaxed, to coming up with some fantastic ideas to delivering a beautiful kitchen. We’re absolutely delighted with the outcome. Highly recommended!",
    author: "Neil"
  },
  {
    title: "Fantastic Experience",
    text: "Well, what can I say, having had a utility done with a howdens product and comparing it to the amazing product from John at AQ kitchens, the difference was night and day, he did it for half the price that I was quoted by Magnet too! Amazing friendly service and fantastic value for money, with solid wood painted doors and quartz too! I went for the Windsor shaker style in Fjord, with white Carrera quartz. Wow, just Wow. Thanks AQ Kitchens for helping us see what was possible with a modest budget.",
    author: "Sean"
  }
  
];

function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [slideDirection, setSlideDirection] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    if (isAnimating) return;
    setSlideDirection('slide-left');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      setSlideDirection('slide-in-right');
      setTimeout(() => {
        setSlideDirection('');
        setIsAnimating(false);
      }, 300);
    }, 300);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setSlideDirection('slide-right');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setSlideDirection('slide-in-left');
      setTimeout(() => {
        setSlideDirection('');
        setIsAnimating(false);
      }, 300);
    }, 300);
  };

  return (
    <main className="bg-[#28343D]">
      {/* Hero at top of page */}
      <HeroSection
        imageUrl={homeHeroImg}
        title={<>The Smarter Choice<br />for Your Kitchen Journey</>}
        buttons={
          <div className="flex gap-3 flex-wrap justify-center">
            <Link to="/contact" className="home-btn-primary">
              CONTACT US <span className="ml-2">↗</span>
            </Link>
            <Link to="/about" className="home-btn-secondary">
              ABOUT US <span className="ml-2">↗</span>
            </Link>
          </div>
        }
        height="h-[100vh]"
        centerContent={true}
        logoOffsetY="20px"
      />

      {/* Feature Cards Section */}
      <section className="home-features-section">
        <div className="home-features-container">
          {/* Card 1 - Quality Cabinetry */}
          <div className="home-feature-card">
            <div className="home-feature-icon">
              <img src={iconChisel} alt="Quality cabinetry" />
            </div>
            <h4>Quality Cabinetry</h4>
            <p>High quality rigid kitchens that install easily, made simple from design to installation.</p>
          </div>

          {/* Card 2 - Tailored Design */}
          <div className="home-feature-card">
            <div className="home-feature-icon">
              <img src={iconRuler} alt="Tailored design" />
            </div>
            <h4>Tailored Design</h4>
            <p>Designed around your space and lifestyle with expert planning and layout advice.</p>
          </div>

          {/* Card 3 - Complete Service */}
          <div className="home-feature-card">
            <div className="home-feature-icon">
              <img src={iconWasher} alt="Complete service" />
            </div>
            <h4>Complete Service</h4>
            <p>From design to installation, we manage every step with trusted trades and expert fitters.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="home-testimonials-section">
        <div className="home-testimonials-container">
          <h2>What Our Clients Say...</h2>
          
          <div className="home-testimonial-carousel">
            <button 
              className="home-testimonial-nav home-testimonial-prev" 
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
              disabled={isAnimating}
            >
              ‹
            </button>
            
            <div className="home-testimonial-wrapper">
              <div className={`home-testimonial-content ${slideDirection}`}>
                <h3>{testimonials[currentTestimonial].title}</h3>
                <p className="home-testimonial-text">
                  {testimonials[currentTestimonial].text}
                </p>
                <span className="home-testimonial-author">
                  {testimonials[currentTestimonial].author}
                </span>
                <a 
                  href={GOOGLE_REVIEWS_URL} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="home-testimonial-google-link"
                >
                  Read more reviews on Google →
                </a>
              </div>
            </div>
            
            <button 
              className="home-testimonial-nav home-testimonial-next" 
              onClick={nextTestimonial}
              aria-label="Next testimonial"
              disabled={isAnimating}
            >
              ›
            </button>
          </div>
        </div>
      </section>

      {/* Social Media Icons */}
      <section className="home-social-section">
        <div className="home-social-icons">
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
            </svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
        </div>
      </section>
    </main>
  );
}

export default Home;
