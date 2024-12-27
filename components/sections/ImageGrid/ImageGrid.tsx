import React from "react";
import styles from "./ImageGrid.module.scss";

interface ImageGridProps {
  images: string[];
}

const ImageGrid: React.FC<ImageGridProps> = ({ images = [] }) => {
  if (images.length < 1) {
    return null;
  }

  return (
    <section className={styles.container}>
      {images.slice(0, 4).map((image, index) => (
        <div key={index} className={styles.imageWrapper}>
          <img
            src={image}
            alt={`Image ${index + 1}`}
            className={styles.image}
          />
        </div>
      ))}
    </section>
  );
};

export default ImageGrid;
