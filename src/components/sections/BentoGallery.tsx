'use client';

import { motion } from 'framer-motion';
import styles from './BentoGallery.module.css';

export default function BentoGallery() {
  const items = [
    { title: "El Arte del Churro", img: "/images/hero.png", size: "large" },
    { title: "Tradición Familiar", img: "/images/history.png", size: "medium" },
    { title: "Las Porras de Siempre", img: "/images/porras.png", size: "small" },
    { title: "El Chocolate Perfecto", img: "/images/chocolate.png", size: "small" },
  ];

  return (
    <section className={styles.gallery}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Nuestra Maestría</h2>
        <div className={styles.grid}>
          {items.map((item, index) => (
            <motion.div
              key={index}
              className={`${styles.item} ${styles[item.size]}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img src={item.img} alt={item.title} />
              <div className={styles.overlay}>
                <h3>{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
