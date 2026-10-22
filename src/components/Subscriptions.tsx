import { useState } from 'react';
import { plans, type LevelId } from '../data/pricing';
import { PlanCard } from './PlanCard';

export function Subscriptions() {
  // выбранный уровень для каждого тарифа хранится в состоянии интерфейса
  const [sel, setSel] = useState<Record<string, LevelId>>(() => Object.fromEntries(plans.map(p => [p.id, 'standard'])));
  return (
    <section className="section" id="subscriptions" aria-labelledby="subs-title">
      <div className="wrap">
        <div className="sec-head reveal"><p className="eyebrow">04 · Подписки</p><h2 id="subs-title">Ролики каждый месяц</h2>
          <p className="sec-sub">Для регулярного выпуска роликов с Motion Design. В каждом тарифе два уровня анимации — выберите нужный, цена обновится.</p></div>
        <div className="grid-plans">
          {plans.map(p => <PlanCard key={p.id} plan={p} level={sel[p.id]} onLevel={l => setSel(s => ({ ...s, [p.id]: l }))} />)}
        </div>
      </div>
    </section>
  );
}
