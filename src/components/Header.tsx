import { useEffect, useState } from 'react';
import { site } from '../data/site';

const nav = [
  { href: '#works', label: 'Работы' },
  { href: '#services', label: 'Услуги' },
  { href: '#subscriptions', label: 'Подписки' },
  { href: '#about', label: 'Обо мне' },
  { href: '#contacts', label: 'Контакты' }
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on(); window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  useEffect(() => {
    const esc = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', esc); return () => window.removeEventListener('keydown', esc);
  }, []);
  return (
    <header className={'header' + (scrolled ? ' scrolled' : '') + (open ? ' open' : '')}>
      <a className="skip" href="#main">К содержанию</a>
      <div className="wrap header-in">
        <a href="#top" className="wordmark" aria-label={site.brand + ' — наверх'}>
          <span className="mark" aria-hidden="true"><i /><i /><b /></span>{site.brand}
        </a>
        <button className="burger" type="button" aria-expanded={open} aria-controls="nav" onClick={() => setOpen(o => !o)}>
          <span className="sr">{open ? 'Закрыть меню' : 'Открыть меню'}</span><i /><i />
        </button>
        <nav id="nav" aria-label="Основная навигация">
          <ul>{nav.map(n => <li key={n.href}><a href={n.href} onClick={() => setOpen(false)}>{n.label}</a></li>)}</ul>
        </nav>
      </div>
    </header>
  );
}
