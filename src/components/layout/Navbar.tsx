'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          CHURRERÍA LA FAMA
        </div>
        <div className={styles.links}>
          <a href="/">Inicio</a>
          <a href="/historia">Historia</a>
          <a href="/carta">Carta</a>
          <a href="/galeria">Galería</a>
          <a href="/visita-nos">Visítanos</a>
        </div>
      </div>
    </nav>
  );
}
