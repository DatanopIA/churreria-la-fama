'use client';

import { motion } from 'framer-motion';
import styles from './GallerySection.module.css';

export default function GallerySection() {
  const images = [
    { src: "/images/hero.png", alt: "Tradición artesana - Churros recién hechos", size: "large" },
    { src: "/images/chocolate.png", alt: "Chocolate a la taza artesanal", size: "tall" },
    { src: "/images/history.png", alt: "El local histórico en Calle Prudencio", size: "wide" },
    { src: "/images/porras.png", alt: "Porras doradas y crujientes", size: "medium" },
    { src: "/images/hero.png", alt: "Detalle de los churros clásicos", size: "small" },
    { src: "/images/chocolate.png", alt: "Nuestro chocolate espeso", size: "medium" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className={styles.gallerySection}>
      <div className="container">
        <header className={styles.header}>
          <h1 className={styles.title}>El Arte de la <br /> Masa y el Cacao</h1>
          <p className={styles.intro}>Una mirada cercana a lo que nos hace únicos desde 1949.</p>
        </header>

        <motion.div 
          className={styles.masonry}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {images.map((img, i) => (
            <motion.div 
              key={i} 
              className={`${styles.item} ${styles[img.size]}`}
              variants={itemVariants}
            >
              <img src={img.src} alt={img.alt} />
              <div className={styles.overlay}>
                <p>{img.alt}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
