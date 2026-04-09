import Navbar from "@/components/layout/Navbar";

export default function Historia() {
  return (
    <main>
      <Navbar />
      <section style={{ padding: '10rem 2rem', textAlign: 'center', color: 'var(--text-light)' }}>
        <div className="container">
          <h1 style={{ fontSize: '4rem', color: 'var(--accent-gold)' }}>Nuestra Historia</h1>
          <p style={{ marginTop: '2rem', fontSize: '1.2rem', maxWidth: '800px', margin: '2rem auto' }}>
            Fundada en 1949 por [DATO PENDIENTE: Nombre del fundador], la Churrería La Fama ha sido testigo de la evolución de Zaragoza...
          </p>
          <img src="/images/history.png" alt="Historia" style={{ width: '100%', maxWidth: '900px', marginTop: '4rem', borderRadius: '8px' }} />
        </div>
      </section>
    </main>
  );
}
