'use client';

import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.logoAndInfo}>
            <h2 className={styles.logo}>CHURRERÍA LA FAMA</h2>
            <p className={styles.tagline}>TRADICIÓN MAÑA DESDE 1949</p>
          </div>
          <div className={styles.contact}>
            <div className={styles.contactBlock}>
              <h3>VISÍTANOS</h3>
              <p>Calle Prudencio, 25</p>
              <p>50003 Zaragoza (Casco Antiguo)</p>
            </div>
            <div className={styles.contactBlock}>
              <h3>HORARIO</h3>
              <p>L-D: 08:00–13:00</p>
              <p>L-D: 17:00–21:30</p>
            </div>
            <div className={styles.contactBlock}>
              <h3>CONTACTO</h3>
              <p>T: 976 39 37 54</p>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Churrería La Fama. Todos los derechos reservados.</p>
          <p className={styles.credit}>Hecho con pasión en Zaragoza</p>
        </div>
      </div>
    </footer>
  );
}
