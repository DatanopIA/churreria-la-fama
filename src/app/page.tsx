import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import BentoGallery from "@/components/sections/BentoGallery";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      
      <section style={{ padding: '8rem 2rem', textAlign: 'center', color: 'var(--text-light)' }}>
        <div className="container">
          <h2 style={{ fontSize: '3.5rem', marginBottom: '2rem', color: 'var(--accent-gold)' }}>
            Un Legado Crujiente
          </h2>
          <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.25rem', opacity: 0.9 }}>
            Desde que abrimos nuestras puertas en 1949, la Churrería La Fama se ha convertido en un punto de referencia cultural en Zaragoza. 
            Nuestra receta no ha cambiado: solo los mejores ingredientes, paciencia y un toque de historia en cada porra.
          </p>
        </div>
      </section>

      <BentoGallery />

      <footer style={{ padding: '4rem 2rem', backgroundColor: '#120A07', borderTop: '1px solid rgba(200, 140, 58, 0.2)', textAlign: 'center' }}>
        <div className="container">
          <p style={{ color: 'var(--accent-gold)', fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '1rem' }}>
            CHURRERÍA LA FAMA
          </p>
          <p>Calle Prudencio, 25, 50003 Zaragoza (Casco Antiguo)</p>
          <p>Teléfono: 976 39 37 54</p>
          <p>[DATO PENDIENTE: Email de contacto]</p>
          <div style={{ marginTop: '2rem', opacity: 0.5, fontSize: '0.8rem' }}>
            &copy; {new Date().getFullYear()} Churrería La Fama. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </main>
  );
}
