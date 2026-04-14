'use client';

import { motion } from 'framer-motion';
import styles from './Menu.module.css';

export default function Menu() {
  const menuCategories = [
    {
      name: "Los Clásicos",
      items: [
        { name: "Churros Artesanos", price: "4,50€", desc: "Seis unidades de nuestra receta secreta de 1949." },
        { name: "Porras Maestras", price: "5,20€", desc: "Dos porras gigantes, crujientes por fuera y aireadas por dentro." },
        { name: "Chocolate a la Taza", price: "3,80€", desc: "Elaborado cada mañana con cacao de alta gama, espeso y tradicional." },
      ]
    },
    {
      name: "Combinados",
      items: [
        { name: "Combo La Fama", price: "7,50€", desc: "Chocolate con 4 churros y zumo de naranja natural." },
        { name: "Desayuno Maño", price: "6,90€", desc: "Café con leche con 3 churros y tostada de pan local." },
      ]
    },
    {
      name: "Para Acompañar",
      items: [
        { name: "Café de Especialidad", price: "2,20€", desc: "Tueste local para el maridaje perfecto." },
        { name: "Zumo de Naranja Natural", price: "3,00€", desc: "Naranjas de la huerta, recién exprimidas." },
        { name: "Té e Infusiones", price: "2,00€", desc: "Selección de hojas premium." },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="carta" className={styles.menuSection}>
      <div className="container">
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.eyebrow}>Desde 1949</span>
          <h1 className={styles.title}>Nuestra Carta</h1>
          <p className={styles.subtitle}>Selección artesanal preparada al momento</p>
        </motion.div>

        <div className={styles.grid}>
          {menuCategories.map((category, i) => (
            <motion.div 
              key={i} 
              className={styles.category}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className={styles.categoryName}>{category.name}</h2>
              <div className={styles.itemsList}>
                {category.items.map((item, j) => (
                  <motion.div key={j} className={styles.item} variants={itemVariants}>
                    <div className={styles.itemHeader}>
                      <h3 className={styles.itemName}>{item.name}</h3>
                      <span className={styles.itemPrice}>{item.price}</span>
                    </div>
                    <p className={styles.itemDesc}>{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className={styles.disclaimer}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p>* Precios sujetos a cambios según temporada y disponibilidad local.</p>
        </motion.div>
      </div>
    </section>
  );
}
