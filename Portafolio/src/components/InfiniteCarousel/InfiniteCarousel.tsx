import React from "react";
import styles from "./InfiniteIconCarousel.module.css";

interface Props {
  items: React.ReactNode[]; 
  speed?: number; 
  size?: number; 
}

const InfiniteIconCarousel: React.FC<Props> = ({
  items,
  speed = 18,
  size = 60,
}) => {
  // Duplicamos la lista para asegurar un bucle infinito continuo
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slider}>
        <div
          className={styles.slideTrack}
          style={{ animationDuration: `${speed}s` }}
        >
          {duplicatedItems.map((item, i) => (
            <div key={`tech-icon-${i}`} className={styles.slide} style={{ fontSize: size }}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteIconCarousel;