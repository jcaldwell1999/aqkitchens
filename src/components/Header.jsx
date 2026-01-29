import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import logo from '../assets/images/LogoT.png';

function Header() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);
  
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header className={`site-header z-50 ${scrolled ? 'scrolled' : ''} ${mobileMenuOpen ? 'menu-open' : ''}`}>
      <div className="nav-inner container">
        <Link to="/" className="logo-link" aria-label="AQ Kitchens">
          <img src={logo} alt="AQ Kitchens logo" className="nav-logo" />
        </Link>

        {/* Mobile menu button */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        <nav className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li><Link to="/" className={`nav-link ${isActive('/')}`}>Home</Link></li>
            <li><Link to="/cabinets" className={`nav-link ${isActive('/cabinets')}`}>Cabinets</Link></li>
            <li><Link to="/kitchens" className={`nav-link ${isActive('/kitchens')}`}>Kitchens</Link></li>
            <li><Link to="/utility-boot-rooms" className={`nav-link ${isActive('/utility-boot-rooms')}`}>Utility/Boot Rooms</Link></li>
            <li><Link to="/our-work" className={`nav-link ${isActive('/our-work')}`}>Our Work</Link></li>
            <li><Link to="/contact" className={`nav-link ${isActive('/contact')}`}>Contact Us</Link></li>
            <li><Link to="/about" className={`nav-link ${isActive('/about')}`}>About Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
