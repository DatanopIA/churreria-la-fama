'use client';

import Navbar from "@/components/layout/Navbar";
import { motion } from "framer-motion";

export default function Galeria() {
  const images = [
    { src: "/images/hero.png", alt: "Tradición" },
    { src: "/images/history.png", alt: "Historia" },
    { src: "/images/porras.png", alt: "Porras crujientes" },
    { src: "/images/chocolate.png", alt: "Nuestro chocolate" },
  ];

  return (
    <main>
      <Navbar />
      <section style={{ padding: '10rem 2rem', color: 'var(--text-light)' }}>
        <div className="container">
          <h1 style={{ fontSize: '4rem', color: 'var(--accent-gold)', textAlign: 'center', marginBottom: '4rem' }}>
            El Arte en Imagen
          </h1>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                style={{ overflow: 'hidden', borderRadius: '8px', aspectRatio: '1/1' }}
              >
                <img src={img.src} alt={img.alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
