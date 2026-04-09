'use client';

import { motion } from 'framer-motion';
import CounterUp from '../ui/CounterUp';
import styles from './Stats.module.css';

export default function Stats() {
  const statsData = [
    { label: "Años de Tradición", value: 75, suffix: "+" },
    { label: "Reseñas en Google", value: 3500, suffix: "+" },
    { label: "Abiertos cada día", value: 365, suffix: "" },
  ];

  return (
    <section className={styles.statsSection}>
      <div className="container">
        <div className={styles.grid}>
          {statsData.map((stat, i) => (
            <div key={i} className={styles.statItem}>
              <span className={styles.value}>
                {stat.value === 365 ? (
                   "CADA DÍA"
                ) : (
                  <CounterUp end={stat.value} suffix={stat.suffix} />
                )}
              </span>
              <span className={styles.label}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
