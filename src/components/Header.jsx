import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header>
      <div className="container">
        <h1>AQ Kitchens</h1>
        <nav>
          <ul>
            <li><Link to="/" className={isActive('/')}>Home</Link></li>
            <li><Link to="/cabinets" className={isActive('/cabinets')}>Cabinets</Link></li>
            <li><Link to="/kitchens" className={isActive('/kitchens')}>Kitchens</Link></li>
            <li><Link to="/utility-boot-rooms" className={isActive('/utility-boot-rooms')}>Utility/Boot Rooms</Link></li>
            <li><Link to="/our-work" className={isActive('/our-work')}>Our Work</Link></li>
            <li><Link to="/contact" className={isActive('/contact')}>Contact Us</Link></li>
            <li><Link to="/about" className={isActive('/about')}>About Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
