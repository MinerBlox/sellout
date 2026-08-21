import DriftWall from './DriftWall';

const items = [
  { name: 'Maya', amount: 42 },
  { name: 'Noah', amount: 118 },
  { name: 'Ava', amount: 7 },
  { name: 'Leo', amount: 250 },
  { name: 'Sofia', amount: 63 },
  { name: 'Ethan', amount: 19 },
  { name: 'Isla', amount: 500 },
  { name: 'Jack', amount: 84 },
  { name: 'Mia', amount: 31 },
  { name: 'Theo', amount: 145 },
  { name: 'Lily', amount: 12 },
  { name: 'Oscar', amount: 320 },
  { name: 'Ruby', amount: 76 },
  { name: 'Finn', amount: 205 },
  { name: 'Ella', amount: 99 }
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
