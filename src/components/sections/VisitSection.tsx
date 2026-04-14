'use client';

import { motion } from 'framer-motion';
import styles from './VisitSection.module.css';

export default function VisitSection() {
  return (
    <section className={styles.visitSection}>
      <div className="container">
        <header className={styles.header}>
          <h1 className={styles.title}>Estamos en el Corazón <br /> de Zaragoza</h1>
          <p className={styles.intro}>Un rincón histórico frente a las murallas romanas.</p>
        </header>

        <div className={styles.grid}>
          <motion.div 
            className={styles.info}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.card}>
              <h2 className={styles.cardTitle}>CHURRERÍA LA FAMA</h2>
              <div className={styles.block}>
                <h3>DIRECCIÓN</h3>
                <p>Calle Prudencio, 25</p>
                <p>50003 Zaragoza, España</p>
                <p className={styles.small}>(Casco Antiguo, junto a San Juan de los Panetes)</p>
              </div>
              
              <div className={styles.block}>
                <h3>HORARIO ININTERRUMPIDO</h3>
                <div className={styles.hoursRow}>
                  <span>Mañanas:</span>
                  <span>08:00 – 13:00</span>
                </div>
                <div className={styles.hoursRow}>
                  <span>Tardes:</span>
                  <span>17:00 – 21:30</span>
                </div>
                <p className={styles.small}>Abierto de Lunes a Domingo</p>
              </div>

              <div className={styles.block}>
                <h3>CONTACTO</h3>
                <p>Teléfono: 976 39 37 54</p>
                <p className={styles.small}>No aceptamos reservas. Recomendamos venir con tiempo los fines de semana.</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className={styles.mapContainer}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.mapPlaceholder}>
              <div className={styles.mapOverlay}>
                <p>UBICACIÓN PRIVILEGIADA</p>
                <span>Calle Prudencio, 25</span>
              </div>
              {/* Here we could put a real Google Maps iframe if we had the key, 
                  for now we'll use a stylized div */}
              <div className={styles.mapBackground}></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
