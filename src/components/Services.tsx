import { services } from '../data/services';
import { OrderLink } from './OrderLink';
import { generalMessage } from '../lib/telegram';

export function Services() {
  return (
    <section className="section" id="services" aria-labelledby="services-title">
      <div className="wrap">
        <div className="sec-head reveal"><p className="eyebrow">02 · Услуги</p><h2 id="services-title">Что я делаю</h2></div>
        <ul className="grid-services">
          {services.map((s, i) => (
            <li key={s.id} className="service reveal" style={{ ['--d' as string]: i % 3 }}>
              <span className="svc-n">{String(i + 1).padStart(2, '0')}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <a className="link-arrow" href={'#' + s.target}>{s.cta} <span aria-hidden="true">→</span></a>
            </li>
          ))}
          <li className="service service-cta reveal" style={{ ['--d' as string]: 2 }}>
            <h3>Не нашли свою задачу?</h3>
            <p>Опишите идею — подскажу, какой формат подойдёт.</p>
            <OrderLink message={generalMessage()} label="Написать в Telegram" />
          </li>
        </ul>
      </div>
    </section>
  );
}
