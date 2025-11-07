import { Link } from 'react-router-dom';

function Modern() {
  return (
    <main>
      <div className="container">
        <section className="hero">
          <h2>Modern Kitchens</h2>
          <p>Sleek, contemporary kitchens for modern living.</p>
        </section>

        <section className="content">
          <h3>Contemporary Design Excellence</h3>
          <p>Our modern kitchen designs feature sleek lines, minimalist aesthetics, and cutting-edge functionality. With handleless doors, integrated appliances, and innovative storage solutions, these kitchens represent the pinnacle of contemporary design.</p>
          <p>Whether you prefer high-gloss finishes, matte textures, or natural materials, our modern kitchens are designed to create a striking focal point in your home while maximizing efficiency and usability.</p>
          <p><Link to="/kitchens">← Back to Kitchens</Link></p>
        </section>
      </div>
    </main>
  );
}

export default Modern;
