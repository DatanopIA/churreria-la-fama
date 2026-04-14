'use client';

import { motion } from 'framer-motion';
import styles from './HistoryContent.module.css';

export default function HistoryContent() {
  const milestones = [
    {
      year: "1949",
      title: "El Comienzo del Aroma",
      description: "Abrimos nuestras puertas en la Calle Prudencio, con un fogón artesanal y la promesa de servir los mejores churros de la ciudad."
    },
    {
      year: "1972",
      title: "Consolidación Cultural",
      description: "La Fama se convierte en el punto de encuentro obligatorio para los zaragozanos tras las fiestas del Pilar y las mañanas de domingo."
    },
    {
      year: "2015",
      title: "Reconocimiento Nacional",
      description: "National Geographic nos destaca como una de las paradas gastronómicas imprescindibles en el Casco Antiguo de Zaragoza."
    },
    {
      year: "Hoy",
      title: "El Legado Continúa",
      description: "Seguimos usando la misma receta secreta, aceites de primera calidad y el mismo cariño que hace más de 70 años."
    }
  ];

  return (
    <section className={styles.historySection}>
      <div className="container">
        <header className={styles.header}>
          <h1 className={styles.title}>Tres Generaciones <br /> de Maestría</h1>
          <p className={styles.intro}>
            No solo hacemos churros; preservamos un pedazo de la historia de Zaragoza en cada taza de chocolate.
          </p>
        </header>

        <div className={styles.timeline}>
          {milestones.map((item, i) => (
            <motion.div 
              key={i} 
              className={styles.milestone}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className={styles.milestoneContent}>
                <span className={styles.year}>{item.year}</span>
                <h3 className={styles.milestoneTitle}>{item.title}</h3>
                <p className={styles.milestoneDesc}>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
