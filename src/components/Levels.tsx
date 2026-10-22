import { levels } from '../data/pricing';

export function Levels() {
  return (
    <section className="section" id="levels" aria-labelledby="levels-title">
      <div className="wrap">
        <div className="sec-head reveal"><p className="eyebrow">05 · Уровни анимации</p><h2 id="levels-title">Standard Motion и Advanced 3D</h2>
          <p className="sec-sub">Это не «хуже» и «лучше». Уровни отличаются сложностью и трудоёмкостью: одним роликам нужна чистая 2D-графика и ритм, другим — объём и камера в пространстве.</p></div>
        <div className="compare">
          {levels.map((l, i) => (
            <div key={l.id} className={'level reveal ' + l.id} style={{ ['--d' as string]: i }}>
              <div className={'level-art ' + l.id} aria-hidden="true"><i /><i /><i /></div>
              <h3>{l.upper}</h3>
              <p className="level-short">{l.short}</p>
              <ul>{l.features.map(f => <li key={f}>{f}</li>)}</ul>
            </div>
          ))}
        </div>
        <p className="note reveal">Сложные 3D-сцены, необычные технические задачи и работа сверх согласованного объёма могут оцениваться отдельно.</p>
      </div>
    </section>
  );
}
