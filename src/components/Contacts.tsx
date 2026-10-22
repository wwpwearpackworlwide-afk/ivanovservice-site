import { site } from '../data/site';
import { generalMessage } from '../lib/telegram';
import { OrderLink } from './OrderLink';

export function Contacts() {
  const socials = site.socials.filter(s => s.url);
  return (
    <section className="section contacts" id="contacts" aria-labelledby="contacts-title">
      <div className="wrap">
        <p className="eyebrow reveal">08 · Контакты</p>
        <h2 id="contacts-title" className="contacts-title reveal">Обсудим ваш ролик?</h2>
        <p className="sec-sub reveal">Заказы принимаю в личном Telegram. Вопросы можно задать и боту.</p>
        <div className="contact-cta reveal">
          <OrderLink message={generalMessage()} label={'Написать @' + site.telegramUsername} />
          <a className="btn btn-ghost" href="#subscriptions">Выбрать тариф</a>
        </div>
        <ul className="socials reveal">
          {socials.map(s => <li key={s.id}><a href={s.url} target="_blank" rel="noopener noreferrer">{s.label}<span aria-hidden="true"> ↗</span></a></li>)}
        </ul>
      </div>
      <footer className="footer wrap"><span>© {new Date().getFullYear()} {site.brand}</span><span>Цены на сайте — не публичная оферта, итог согласуем лично.</span></footer>
    </section>
  );
}
