import { useState } from 'react';
import { fmt, oneOff, styles } from '../data/pricing';
import { oneOffMessage } from '../lib/telegram';
import { OrderLink } from './OrderLink';

const kinds = ['Монтаж Reels / Shorts', 'Монтаж с Motion Design', 'Спортивный ролик', 'Рекламный ролик', 'Интервью или репортаж'];

export function OneOff() {
  const [dur, setDur] = useState(oneOff[0].id);
  const [kind, setKind] = useState(kinds[0]);
  const [style, setStyle] = useState(styles[0]);
  const [wishes, setWishes] = useState('');
  const d = oneOff.find(x => x.id === dur)!;
  const message = oneOffMessage({ service: kind, duration: d.duration, style, wishes });

  return (
    <section className="section" id="one-off" aria-labelledby="oneoff-title">
      <div className="wrap">
        <div className="sec-head reveal"><p className="eyebrow">03 · Без подписки</p><h2 id="oneoff-title">Разовый монтаж</h2>
          <p className="sec-sub">Для одного ролика или проекта. Окончательная цена зависит от сложности монтажа и объёма Motion Design. Сложная 3D-анимация в базовую стоимость не входит и оценивается отдельно.</p></div>
        <div className="oneoff">
          <div className="oneoff-prices reveal" role="radiogroup" aria-label="Длительность ролика">
            {oneOff.map(o => (
              <button key={o.id} type="button" role="radio" aria-checked={dur === o.id} className={'price-row' + (dur === o.id ? ' on' : '')} onClick={() => setDur(o.id)}>
                <span><b>{o.title}</b><small>{o.duration}</small></span>
                <span className="from">от {fmt(o.from)}</span>
              </button>
            ))}
          </div>
          <form className="oneoff-form reveal" onSubmit={e => e.preventDefault()} aria-label="Параметры разового заказа">
            <label>Услуга
              <select value={kind} onChange={e => setKind(e.target.value)}>{kinds.map(k => <option key={k}>{k}</option>)}</select>
            </label>
            <label>Желаемый стиль монтажа
              <select value={style} onChange={e => setStyle(e.target.value)}>{styles.map(s => <option key={s}>{s}</option>)}</select>
            </label>
            <label>Дополнительные пожелания
              <textarea value={wishes} maxLength={600} rows={3} placeholder="Площадка, референс, сроки — что важно" onChange={e => setWishes(e.target.value)} />
            </label>
            <div className="summary"><span>{kind} · {d.duration}</span><b>от {fmt(d.from)}</b></div>
            <OrderLink message={message} label="Заказать разовый монтаж" className="btn btn-primary btn-wide" />
          </form>
        </div>
      </div>
    </section>
  );
}
