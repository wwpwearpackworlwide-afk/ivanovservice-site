export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="eyebrow reveal">Reels · Shorts · Motion Design · 3D</p>
          <h1 id="hero-title" className="hero-title reveal" style={{ ['--d' as string]: 1 }}>
            Видеомонтаж<br /><span className="accent">с характером</span>
          </h1>
          <p className="hero-sub reveal" style={{ ['--d' as string]: 2 }}>От динамичного монтажа до сложного Motion Design и 3D-анимации.</p>
          <div className="hero-cta reveal" style={{ ['--d' as string]: 3 }}>
            <a className="btn btn-primary" href="#works">Смотреть работы</a>
            <a className="btn btn-ghost" href="#subscriptions">Выбрать тариф</a>
          </div>
        </div>
        {/* Анимированная заставка бренда (не проект): таймлайн, клипы и плейхед */}
        <div className="hero-visual reveal" style={{ ['--d' as string]: 2 }} aria-hidden="true">
          <div className="tl">
            <div className="tl-track t1"><i /><i /><i /><i /></div>
            <div className="tl-track t2"><i /><i /><i /></div>
            <div className="tl-track t3"><i /><i /><i /><i /><i /></div>
            <div className="playhead"><b /></div>
          </div>
          <div className="type-stack">
            <span>РИТМ</span><span>ТИПОГРАФИКА</span><span>3D</span><span>ЗВУК</span>
          </div>
          <div className="orb" />
          <p className="visual-cap">Анимированная заставка бренда</p>
        </div>
      </div>
    </section>
  );
}
