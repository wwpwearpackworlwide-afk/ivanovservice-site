import { site } from '../data/site';

export function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="wrap about">
        <div className="about-photo reveal">
          {site.aboutPhoto
            ? <img src={site.aboutPhoto} alt="Иван — монтажёр" loading="lazy" />
            : <div className="photo-ph"><span>Место для фото</span><small>Положите файл в public/media и укажите путь в src/data/site.ts → aboutPhoto</small></div>}
        </div>
        <div className="about-text">
          <p className="eyebrow reveal">07 · Обо мне</p>
          <h2 id="about-title" className="reveal">Монтаж — это решения, а не склейки</h2>
          {site.about.map((p, i) => <p key={i} className="reveal" style={{ ['--d' as string]: i + 1 }}>{p}</p>)}
        </div>
      </div>
    </section>
  );
}
