import Navbar from "@/components/layout/Navbar";

export default function Carta() {
  const menuItems = [
    { name: "Churros Artesanos", price: "[DATO PENDIENTE]", desc: "Receta tradicional de 1949." },
    { name: "Porras de Zaragoza", price: "[DATO PENDIENTE]", desc: "Crujientes, esponjosas y doradas." },
    { name: "Chocolate a la Taza", price: "[DATO PENDIENTE]", desc: "Espeso, intenso y servido muy caliente." },
    { name: "Café de Especialidad", price: "[DATO PENDIENTE]", desc: "El acompañante perfecto." },
  ];

  return (
    <main>
      <Navbar />
      <section style={{ padding: '10rem 2rem', color: 'var(--text-light)' }}>
        <div className="container">
          <h1 style={{ fontSize: '4rem', color: 'var(--accent-gold)', textAlign: 'center' }}>Nuestra Carta</h1>
          <div style={{ marginTop: '4rem', display: 'grid', gap: '2rem', maxWidth: '700px', margin: '4rem auto' }}>
            {menuItems.map((item, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: '1px solid rgba(200, 140, 58, 0.3)', paddingBottom: '1rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.5rem' }}>{item.name}</h3>
                  <p style={{ opacity: 0.7, fontSize: '0.9rem' }}>{item.desc}</p>
                </div>
                <span style={{ color: 'var(--accent-gold)', fontWeight: 'bold' }}>{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
