import { useEffect, useState } from 'react';
import DriftWall from './DriftWall';

const TILE_WIDTH = 200;
const GAP = 18;

const makeCard = (name, amount) => ({
  image: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400">
      <rect width="600" height="400" rx="28" fill="#111118"/>
      <text x="300" y="174" fill="white" font-family="Arial, Helvetica, sans-serif" font-size="46" font-weight="700" text-anchor="middle">${name}</text>
      <text x="300" y="238" fill="#b7b7c7" font-family="Arial, Helvetica, sans-serif" font-size="30" font-weight="500" text-anchor="middle">Received $${amount}</text>
    </svg>
  `)}`,
  title: `${name} — Received $${amount}`
});

const items = [
  makeCard('Maya', 42),
  makeCard('Noah', 118),
  makeCard('Ava', 7),
  makeCard('Leo', 250),
  makeCard('Sofia', 63),
  makeCard('Ethan', 19),
  makeCard('Isla', 500),
  makeCard('Jack', 84),
  makeCard('Mia', 31),
  makeCard('Theo', 145),
  makeCard('Lily', 12),
  makeCard('Oscar', 320),
  makeCard('Ruby', 76),
  makeCard('Finn', 205),
  makeCard('Ella', 99)
];

const getColumnCount = () => {
  if (typeof window === 'undefined') return 7;
  return Math.max(7, Math.ceil(window.innerWidth / ((TILE_WIDTH + GAP) * 1.05)) + 3);
};

export default function App() {
  const [columns, setColumns] = useState(getColumnCount);

  useEffect(() => {
    const updateColumns = () => setColumns(getColumnCount());
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative' }}>
      <DriftWall
        items={items}
        columns={columns}
        tileWidth={TILE_WIDTH}
        tileHeight={132}
        gap={GAP}
        tilt={16}
        turn={-14}
        perspective={1200}
        depth={120}
        speed={42}
        direction="up"
        variance={0.45}
        parallax={0.6}
        lift={0}
        fade={0.6}
        dim={0.55}
        overlayColor="#060010"
      />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none'
        }}
      >
        <div style={{ textAlign: 'center', color: '#fff', pointerEvents: 'auto' }}>
          <div
            style={{
              fontFamily: 'Arial, Helvetica, sans-serif',
              fontSize: 'clamp(56px, 10vw, 150px)',
              fontWeight: 900,
              letterSpacing: '-0.06em',
              lineHeight: 0.9
            }}
          >
            SELLOUT.
          </div>
          <a
            href={`${import.meta.env.BASE_URL}site.html`}
            style={{
              display: 'inline-block',
              marginTop: 28,
              color: '#fff',
              fontFamily: 'Arial, Helvetica, sans-serif',
              fontSize: 15,
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              textDecoration: 'none'
            }}
          >
            Enter site →
          </a>
        </div>
      </div>
    </div>
  );
}
