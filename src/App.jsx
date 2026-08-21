import DriftWall from './DriftWall';

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

export default function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <DriftWall
        items={items}
        columns={5}
        tileWidth={200}
        tileHeight={132}
        gap={18}
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
    </div>
  );
}
