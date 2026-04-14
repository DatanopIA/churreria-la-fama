'use client';

import { motion } from 'framer-motion';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    name: "Raquel S.",
    rating: 5,
    text: "El chocolate está increíble y los churros... de los mejores que he probado. Una parada obligatoria en el centro.",
    date: "Marzo 2024"
  },
  {
    name: "Marcos P.",
    rating: 5,
    text: "Un clásico de Zaragoza que nunca falla. Tradición en estado puro y trato muy cercano. Los churros siempre crujientes.",
    date: "Febrero 2024"
  },
  {
    name: "Elena B.",
    rating: 5,
    text: "Sitio con solera, trato inmejorable y calidad garantizada. Ver cómo los hacen al momento es un espectáculo.",
    date: "Enero 2024"
  },
  {
    name: "Javier M.",
    rating: 5,
    text: "Los mejores churros artesanos de la ciudad sin duda. El chocolate espeso, como debe ser. Volveremos siempre.",
    date: "Diciembre 2023"
  },
  {
    name: "Carmen T.",
    rating: 5,
    text: "Un viaje en el tiempo a través del sabor. Imprescindible si visitas Zaragoza. Un local de toda la vida con alma.",
    date: "Noviembre 2023"
  }
];

export default function Testimonials() {
  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>Social Proof</span>
        <h2 className={styles.title}>Lo que dicen nuestros clientes</h2>
      </div>

      <div className={styles.marqueeContainer}>
        <motion.div 
          className={styles.marquee}
          animate={{ x: [0, -1000] }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.rating}>
                {"★".repeat(t.rating)}
              </div>
              <p className={styles.text}>"{t.text}"</p>
              <div className={styles.footer}>
                <span className={styles.name}>{t.name}</span>
                <span className={styles.date}>{t.date}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
