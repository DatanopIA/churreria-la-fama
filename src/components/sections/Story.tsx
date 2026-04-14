'use client';

import { motion } from 'framer-motion';
import styles from './Story.module.css';
import WordReveal from '../ui/WordReveal';

export default function Story() {
  return (
    <section className={styles.story}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className={styles.title}>
            <WordReveal text="UN LEGADO CRUJIENTE" />
          </h2>
          <p className={styles.description}>
            Desde que abrimos nuestras puertas en 1949, la <strong>Churrería La Fama</strong> se ha convertido en un punto de referencia cultural en Zaragoza. 
            Nuestra receta no ha cambiado: solo los mejores ingredientes, paciencia y un toque de historia en cada porra.
          </p>
          <div className={styles.divider}></div>
        </motion.div>
      </div>
    </section>
  );
}
