/* ============================================================
   ЦЕНЫ — единственное место, где они хранятся.
   Все карточки и сообщения для заказа берут цифры отсюда.
   ============================================================ */

export type LevelId = 'standard' | 'advanced';

export interface Level {
  id: LevelId;
  title: string;      // как пишется в карточке
  upper: string;      // как пишется в сообщении заказа
  short: string;
  features: string[];
}

export interface Plan {
  id: string;
  title: string;
  videos: number;     // роликов в месяц
  maxSec: number;     // максимальная длина одного ролика, секунд
  price: Record<LevelId, number>; // ₽ в месяц
}

export const currency = '₽';

export const levels: Level[] = [
  {
    id: 'standard',
    title: 'Standard Motion',
    upper: 'STANDARD MOTION',
    short: '2D Motion Design',
    features: [
      '2D-анимация',
      'Анимированная типографика',
      'Динамичные переходы',
      'Графические элементы',
      'Анимированные субтитры',
      'Работа со звуком',
      'Продуманная композиция и ритм'
    ]
  },
  {
    id: 'advanced',
    title: 'Advanced 3D',
    upper: 'ADVANCED 3D',
    short: '3D + 2D Motion Design',
    features: [
      'Объёмная графика',
      '3D-текст и объекты',
      'Анимация камеры в трёхмерном пространстве',
      'Сложные сцены',
      'Сочетание 2D и 3D',
      'Более трудоёмкие визуальные решения'
    ]
  }
];

export const plans: Plan[] = [
  { id: 'basic',   title: 'BASIC',    videos: 8,  maxSec: 20, price: { standard: 9990,  advanced: 16990 } },
  { id: 'go',      title: 'GO',       videos: 12, maxSec: 25, price: { standard: 14990, advanced: 24990 } },
  { id: 'pro',     title: 'PRO',      videos: 16, maxSec: 30, price: { standard: 21990, advanced: 34990 } },
  { id: 'proplus', title: 'PRO PLUS', videos: 20, maxSec: 30, price: { standard: 27990, advanced: 44990 } },
  { id: 'max',     title: 'MAX',      videos: 30, maxSec: 35, price: { standard: 39990, advanced: 64990 } },
  { id: 'ultra',   title: 'ULTRA',    videos: 40, maxSec: 35, price: { standard: 49990, advanced: 79990 } }
];

/** Разовый монтаж: ориентиры «от». Окончательная цена — после обсуждения. */
export const oneOff = [
  { id: 'short',  title: 'Ролик до 30 секунд',   duration: 'до 30 секунд',     from: 800 },
  { id: 'medium', title: 'Ролик 30–60 секунд',   duration: '30–60 секунд',     from: 1300 },
  { id: 'long',   title: 'Видео 1–5 минут',      duration: 'от 1 до 5 минут',  from: 1700 }
];

/** Стили для формы разового заказа */
export const styles = ['Динамичный', 'Минималистичный', 'Спортивный', 'Кинематографичный', 'Рекламный', 'Пока не знаю — нужен совет'];

export const fmt = (n: number) => n.toLocaleString('ru-RU').replace(/ | /g, ' ') + ' ' + currency;
export const levelOf = (id: LevelId) => levels.find(l => l.id === id)!;
