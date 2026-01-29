import { useState, useRef, useEffect } from 'react';
import Lightbox from './Lightbox';

export default function Gallery({ images = [], initialCount = 12, increment = 12 }) {
  const [count, setCount] = useState(initialCount);
  const [animatingItems, setAnimatingItems] = useState(new Set());
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const prevCountRef = useRef(initialCount);
  
  const visible = images.slice(0, count);
  const hasMore = images.length > visible.length;

  // Track newly added items for animation
  useEffect(() => {
    if (count > prevCountRef.current) {
      const newItems = new Set();
      for (let i = prevCountRef.current; i < count; i++) {
        newItems.add(i);
      }
      setAnimatingItems(newItems);
      
      // Clear animation class after animation completes
      const timer = setTimeout(() => {
        setAnimatingItems(new Set());
      }, 500);
      
      prevCountRef.current = count;
      return () => clearTimeout(timer);
    }
  }, [count]);

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const goToPrev = () => {
    setLightboxIndex((prev) => (prev - 1 + visible.length) % visible.length);
  };

  const goToNext = () => {
    setLightboxIndex((prev) => (prev + 1) % visible.length);
  };

  return (
    <div>
      <div className="gallery" aria-live="polite">
        {visible.map((img, i) => (
          <button 
            key={`${img.src}-${i}`} 
            type="button"
            onClick={() => openLightbox(i)}
            className={`gallery-item ${img.tall ? 'tall' : ''} ${animatingItems.has(i) ? 'gallery-item-enter' : ''}`} 
            aria-label={img.title || `View image ${i + 1}`}
          >
            <img src={img.src} alt={img.title || `Image ${i + 1}`} loading="lazy" />
          </button>
        ))}
      </div>

      {hasMore && (
        <div className="gallery-actions" style={{ textAlign: 'center', marginTop: 18 }}>
          <button className="btn-load-more" onClick={() => setCount((c) => Math.min(c + increment, images.length))}>
            Load more
          </button>
        </div>
      )}

      {lightboxIndex !== null && (
        <Lightbox
          images={visible}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={goToPrev}
          onNext={goToNext}
        />
      )}
    </div>
  );
}
