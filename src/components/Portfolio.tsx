import { useEffect, useRef, useState } from 'react';
import { categories, works, type Work } from '../data/portfolio';

export function Portfolio() {
  const [filter, setFilter] = useState<(typeof categories)[number]['id']>('all');
  const [open, setOpen] = useState<Work | null>(null);
  const list = works.filter(w => filter === 'all' || w.categories.includes(filter));

  return (
    <section className="section" id="works" aria-labelledby="works-title">
      <div className="wrap">
        <div className="sec-head reveal">
          <p className="eyebrow">01 · Работы</p>
          <h2 id="works-title">Портфолио</h2>
        </div>
        <div className="filters reveal" role="group" aria-label="Фильтр работ">
          {categories.map(c => (
            <button key={c.id} type="button" className={'chip' + (filter === c.id ? ' on' : '')} aria-pressed={filter === c.id} onClick={() => setFilter(c.id)}>
              {c.title}
            </button>
          ))}
        </div>
        <ul className="grid-works" aria-live="polite">
          {list.map(w => <li key={w.id}><WorkCard w={w} onOpen={() => setOpen(w)} /></li>)}
          {list.length === 0 && <li className="empty">В этой категории пока нет работ.</li>}
        </ul>
      </div>
      {open && <VideoModal w={open} onClose={() => setOpen(null)} />}
    </section>
  );
}

function WorkCard({ w, onOpen }: { w: Work; onOpen: () => void }) {
  const vid = useRef<HTMLVideoElement>(null);
  if (w.placeholder) {
    return (
      <article className="work placeholder">
        <div className="work-media ph"><span>3D</span></div>
        <div className="work-body"><span className="work-cat">{w.label}</span><h3>{w.title}</h3><p>{w.description}</p></div>
      </article>
    );
  }
  const play = () => { const v = vid.current; if (v && !matchMedia('(prefers-reduced-motion: reduce)').matches) v.play().catch(() => {}); };
  const stop = () => { const v = vid.current; if (v) { v.pause(); } };
  return (
    <article className="work" onMouseEnter={play} onMouseLeave={stop}>
      <button type="button" className="work-media" onClick={onOpen} aria-label={'Смотреть: ' + w.title}>
        <img src={w.cover} alt="" loading="lazy" width={540} height={960} />
        {w.video && <video ref={vid} src={w.video} muted loop playsInline preload="none" aria-hidden="true" />}
        <span className="play" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 5.5v13l11-6.5z" fill="currentColor" /></svg></span>
      </button>
      <div className="work-body">
        <span className="work-cat">{w.label}</span>
        <h3>{w.title}</h3>
        <p>{w.description}</p>
      </div>
    </article>
  );
}

function VideoModal({ w, onClose }: { w: Work; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  const [err, setErr] = useState(false);
  useEffect(() => {
    const d = ref.current; if (!d) return;
    if (!d.open) d.showModal();
    const close = () => onClose();
    d.addEventListener('close', close);
    return () => d.removeEventListener('close', close);
  }, [onClose]);
  return (
    <dialog ref={ref} className="modal" aria-labelledby="modal-title" onClick={e => { if (e.target === ref.current) ref.current?.close(); }}>
      <div className="modal-in">
        <div className="modal-head">
          <div><span className="work-cat">{w.label}</span><h3 id="modal-title">{w.title}</h3></div>
          <button type="button" className="icon-btn" onClick={() => ref.current?.close()} aria-label="Закрыть">✕</button>
        </div>
        {w.video && !err
          ? <video className="modal-video" src={w.video} poster={w.cover} controls autoPlay muted loop playsInline onError={() => setErr(true)} />
          : <div className="modal-fallback">{err ? 'Видео не загрузилось. Откройте оригинал по ссылке ниже.' : 'Превью-видео пока нет.'}</div>}
        <p className="modal-desc">{w.description} <small>Это короткое превью без звука.</small></p>
        {w.url && <a className="btn btn-primary" href={w.url} target="_blank" rel="noopener noreferrer">Смотреть оригинал</a>}
      </div>
    </dialog>
  );
}
