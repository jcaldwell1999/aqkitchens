import { useState } from 'react';

export default function Gallery({ images = [], initialCount = 12, increment = 12 }) {
  const [count, setCount] = useState(initialCount);
  const visible = images.slice(0, count);
  const hasMore = images.length > visible.length;

  return (
    <div>
      <div className="gallery" aria-live="polite">
        {visible.map((img, i) => (
          <a key={i} href={img.src} className={`gallery-item ${img.tall ? 'tall' : ''}`} aria-label={img.title || `Image ${i + 1}`}>
            <img src={img.src} alt={img.title || `Image ${i + 1}`} loading="lazy" />
            {img.title && <div className="gallery-caption">{img.title}</div>}
          </a>
        ))}
      </div>

      {hasMore && (
        <div className="gallery-actions" style={{ textAlign: 'center', marginTop: 18 }}>
          <button className="btn-load-more" onClick={() => setCount((c) => Math.min(c + increment, images.length))}>
            Load more
          </button>
        </div>
      )}
    </div>
  );
}
