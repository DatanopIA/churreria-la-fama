import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Churrería La Fama | Zaragoza — El Chocolate que enamora a National Geographic",
  description: "Tradicíon, pasión y el mejor chocolate con churros de Zaragoza desde 1949. National Geographic lo confirma: el mejor de la ciudad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        {/* Grainy Noise SVG Filter */}
        <svg style={{ display: 'none' }}>
          <filter id="grainy-noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
        </svg>
        <div className="grainy-overlay" style={{ filter: 'url(#grainy-noise)' }}></div>
        
        {children}
      </body>
    </html>
  );
}
