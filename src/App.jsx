import DriftWall from './DriftWall';

const items = [
  { image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80', title: 'Person 1' },
  { image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80', title: 'Person 2' },
  { image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80', title: 'Person 3' },
  { image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80', title: 'Person 4' },
  { image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80', title: 'Person 5' },
  { image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80', title: 'Person 6' },
  { image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80', title: 'Person 7' },
  { image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=900&q=80', title: 'Person 8' },
  { image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=900&q=80', title: 'Person 9' },
  { image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80', title: 'Person 10' }
];

export default function App() {
  return (
    <main className="home">
      <div className="wall-bg" aria-hidden="true">
        <DriftWall
          items={items}
          columns={5}
          tileWidth={220}
          tileHeight={150}
          gap={18}
          tilt={16}
          turn={-14}
          perspective={1200}
          depth={120}
          speed={38}
          direction="up"
          variance={0.45}
          parallax={0.6}
          lift={64}
          fade={0.6}
          dim={0.48}
          overlayColor="#060010"
        />
      </div>

      <div className="scrim" />

      <header className="nav">
        <div className="brand">sellout.</div>
        <button className="ghost">How it works</button>
      </header>

      <section className="hero">
        <div className="eyebrow">ONE PERSON. THE WHOLE HOMEPAGE.</div>
        <h1>Be the face<br />of the internet.</h1>
        <p>Pay $1 to take over the homepage. You stay here until someone else takes your spot.</p>
        <button className="cta">Take the homepage — $1</button>
        <span className="micro">No auction. No queue. Whoever pays next replaces you.</span>
      </section>

      <div className="live-pill"><span /> LIVE NOW</div>
    </main>
  );
}
