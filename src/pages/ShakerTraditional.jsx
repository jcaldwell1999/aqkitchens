import { Link } from 'react-router-dom';

function ShakerTraditional() {
  return (
    <main>
      <div className="container">
        <section className="hero">
          <h2>Shaker / Traditional Kitchens</h2>
          <p>Timeless elegance with classic design elements.</p>
        </section>

        <section className="content">
          <h3>Classic Style, Modern Functionality</h3>
          <p>Our Shaker and traditional kitchen designs combine timeless aesthetics with modern functionality. Featuring clean lines, quality craftsmanship, and attention to detail, these kitchens offer enduring beauty that never goes out of style.</p>
          <p>The Shaker style is characterized by simple, recessed panel doors and drawers, creating a refined and elegant look that works beautifully in both period properties and contemporary homes.</p>
          <p><Link to="/kitchens">← Back to Kitchens</Link></p>
        </section>
      </div>
    </main>
  );
}

export default ShakerTraditional;
