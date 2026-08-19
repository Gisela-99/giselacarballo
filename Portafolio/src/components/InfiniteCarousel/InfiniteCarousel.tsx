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
  return (
    <div className={styles.slider}>
      <div
        className={styles.slideTrack}
        style={{ animationDuration: `${speed}s` }}
      >
        {[...items, ...items].map((item, i) => (
          <div key={i} className={styles.slide} style={{ fontSize: size }}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteIconCarousel;
