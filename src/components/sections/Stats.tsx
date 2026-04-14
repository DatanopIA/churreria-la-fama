'use client';

import { motion } from 'framer-motion';
import CounterUp from '../ui/CounterUp';
import styles from './Stats.module.css';

export default function Stats() {
  const statsData = [
    { label: "AÑOS DE TRADICIÓN", value: 75, suffix: "+" },
    { label: "RESEÑAS EN GOOGLE", value: 3500, suffix: "+" },
    { label: "ABIERTOS CADA DÍA", value: 365, suffix: "" },
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
