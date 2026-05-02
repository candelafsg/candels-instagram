

import "./equalizer.css"

export const Equalizer = ({ isAnimating = true }) => {
  return (
    <div className={`equalizer ${isAnimating ? 'animating' : ''}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}></span>
      ))}
    </div>
  );
};