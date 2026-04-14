'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './Hero.module.css';
import WordReveal from '../ui/WordReveal';
import MagneticButton from '../ui/MagneticButton';

export default function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.imageWrapper}>
        <motion.img 
          src="/images/hero.png" 
          alt="Churros con Chocolate"
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.heroContent}>
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className={styles.title}>
            <WordReveal text="CHURRERÍA LA FAMA" />
          </h1>
          <p className={styles.subtitle}>Desde 1949, los reyes del desayuno en Zaragoza.</p>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <Link href="/carta">
              <MagneticButton className="btn-primary">
                Ver la Carta
              </MagneticButton>
            </Link>
            <Link href="/visita-nos">
              <MagneticButton className="btn-primary" style={{ backgroundColor: 'transparent', border: '1px solid var(--accent-gold)', color: 'var(--accent-gold)' }}>
                Cómo Llegar
              </MagneticButton>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
