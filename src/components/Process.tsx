const steps = [
  ['Заявка', 'Вы пишете мне в Telegram: что за ролик, для какой площадки, есть ли исходники.'],
  ['Согласование', 'Обсуждаем задачу и визуальное направление: стиль, референсы, сроки и стоимость.'],
  ['Монтаж и Motion Design', 'Собираю ролик: ритм, типографика, графика, звук. Показываю, вношу правки.'],
  ['Готовый результат', 'Вы получаете финальный файл в нужном формате для публикации.']
];

export function Process() {
  return (
    <section className="section" id="process" aria-labelledby="process-title">
      <div className="wrap">
        <div className="sec-head reveal"><p className="eyebrow">06 · Процесс</p><h2 id="process-title">Как проходит работа</h2>
          <p className="sec-sub">Срок зависит от объёма и сложности — называю его до начала работы.</p></div>
        <ol className="steps">
          {steps.map(([t, d], i) => (
            <li key={t} className="step reveal" style={{ ['--d' as string]: i }}><span className="step-n">{i + 1}</span><h3>{t}</h3><p>{d}</p></li>
          ))}
        </ol>
      </div>
    </section>
  );
}
