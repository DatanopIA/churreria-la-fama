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
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!1m3!1d2983.3323!2d-0.8807!3d41.6565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5914ed00000001%3A0x6d5c64c23f2f2e2e!2sChurrer%C3%ADa%20La%20Fama!5e0!3m2!1ses!2ses!4v1713088000000!5m2!1ses!2ses" 
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: '450px' }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
