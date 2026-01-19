// src/components/Cards/Cards.tsx
import React from "react";
import styles from "./Cards.module.css";

export type PortfolioCardProps = {
  title: string;
  description?: string;
  tags?: string[];
  imageSrc?: string;
  videoSrc?: string;
  imageAlt?: string;
  href?: string;
  onClick?: () => void; 
  children?: React.ReactNode;
};

export const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  description,
  tags,
  imageSrc,
  videoSrc,
  imageAlt = title,
  href,
  onClick,
  children,
}) => {
  const Wrapper: any = href ? "a" : "div";

  return (
    <Wrapper
      className={styles.card}
      href={href}
      onClick={onClick}      
      aria-label={title}
    >
      {(imageSrc || videoSrc) && (
        <div className={styles.mediaContainer}>
          {imageSrc && (
            <img src={imageSrc} alt={imageAlt} className={styles.media} />
          )}

          {videoSrc && (
            <video
              src={videoSrc}
              className={styles.media}
              autoPlay
              loop
              muted
              playsInline
            />
          )}
        </div>
      )}

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>

        {description && <p className={styles.desc}>{description}</p>}

        {tags && (
          <div className={styles.tags}>
            {tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        )}

        {children && <div className={styles.body}>{children}</div>}
      </div>
    </Wrapper>
  );
};
