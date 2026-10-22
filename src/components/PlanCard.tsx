import { fmt, levels, type LevelId, type Plan } from '../data/pricing';
import { subscriptionMessage } from '../lib/telegram';
import { OrderLink } from './OrderLink';

interface Props { plan: Plan; level: LevelId; onLevel: (l: LevelId) => void; featured?: boolean }

/** Переиспользуемая карточка тарифа: все цифры — из plan, выбранный уровень — из состояния родителя */
export function PlanCard({ plan, level, onLevel, featured }: Props) {
  return (
    <article className={'plan reveal' + (level === 'advanced' ? ' adv' : '') + (featured ? ' featured' : '')} aria-labelledby={'plan-' + plan.id}>
      <header className="plan-head">
        <h3 id={'plan-' + plan.id}>{plan.title}</h3>
        {featured && <span className="tag">Часто выбирают</span>}
      </header>
      <dl className="plan-meta">
        <div><dt>Роликов</dt><dd>{plan.videos}<small>/мес</small></dd></div>
        <div><dt>Длина</dt><dd>до {plan.maxSec}<small> с</small></dd></div>
      </dl>
      <div className="lvl" role="radiogroup" aria-label={'Уровень анимации для ' + plan.title}>
        {levels.map(l => (
          <button key={l.id} type="button" role="radio" aria-checked={level === l.id} className={level === l.id ? 'on' : ''} onClick={() => onLevel(l.id)}>
            {l.upper}
          </button>
        ))}
      </div>
      <p className="plan-price"><b>{fmt(plan.price[level])}</b><span>в месяц</span></p>
      <p className="plan-terms">{plan.videos} роликов до {plan.maxSec} с · {levels.find(l => l.id === level)!.short}</p>
      <OrderLink message={subscriptionMessage(plan, level)} label="Оформить заказ" className="btn btn-primary btn-wide" />
    </article>
  );
}
