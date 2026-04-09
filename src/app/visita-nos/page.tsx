import Navbar from "@/components/layout/Navbar";

export default function Visitanos() {
  return (
    <main>
      <Navbar />
      <section style={{ padding: '10rem 2rem', color: 'var(--text-light)' }}>
        <div className="container">
          <h1 style={{ fontSize: '4rem', color: 'var(--accent-gold)', textAlign: 'center' }}>¿Dónde estamos?</h1>
          <div style={{ marginTop: '4rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ marginBottom: '1.5rem' }}>Churrería La Fama</h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
                Calle Prudencio, 25, 50003 Zaragoza (Casco Antiguo)
              </p>
              <h3 style={{ color: 'var(--accent-gold)', marginBottom: '0.5rem' }}>Horario</h3>
              <p>Lunes a domingo, 08:00–13:00 y 17:00–21:30</p>
              
              <h3 style={{ color: 'var(--accent-gold)', marginTop: '2rem', marginBottom: '0.5rem' }}>Contacto</h3>
              <p>Teléfono: 976 39 37 54</p>
              <p>[DATO PENDIENTE: Email]</p>
            </div>
            <div style={{ background: '#2A1A14', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }}>
              <p style={{ opacity: 0.5 }}>[MAPA INTERACTIVO PENDIENTE]</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
