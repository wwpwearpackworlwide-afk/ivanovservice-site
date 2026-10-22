/* ============================================================
   ПОРТФОЛИО. Чтобы добавить работу:
   1) положите превью (jpg) и короткое видео (mp4, без звука, до ~3 МБ) в public/media;
   2) добавьте объект в массив works ниже.
   url — ссылка на полный ролик (Instagram, YouTube…). Пустая строка = кнопки «Смотреть оригинал» не будет.
   ============================================================ */

export type CategoryId = 'sport' | 'reels' | 'motion' | '3d' | 'reportage';

export const categories: { id: 'all' | CategoryId; title: string }[] = [
  { id: 'all', title: 'Все работы' },
  { id: 'sport', title: 'Спорт' },
  { id: 'reels', title: 'Reels и Shorts' },
  { id: 'motion', title: 'Motion Design' },
  { id: '3d', title: '3D Motion' },
  { id: 'reportage', title: 'Репортажи' }
];

export interface Work {
  id: string;
  title: string;
  categories: CategoryId[];
  label: string;          // подпись категории на карточке
  description: string;
  cover: string;          // путь к превью
  video?: string;         // короткое превью-видео
  url?: string;           // ссылка на оригинал
  placeholder?: boolean;  // true = место под будущую работу
}

export const works: Work[] = [
  {
    id: 'klinika', title: 'История пациентки', categories: ['reportage'], label: 'Интервью · клиника',
    description: 'Ролик для Клиники современной флебологии: интервью врача и пациентки, motion-графика в цветах клиники, вставки УЗИ.',
    cover: '/media/prev-klinika.jpg', video: '/media/prev-klinika.mp4', url: 'https://www.instagram.com/reel/DeuL-7Jt-L3/'
  },
  {
    id: 'dzyudo', title: 'Клуб дзюдо «Чемпион»', categories: ['sport', 'motion'], label: 'Спорт · коллаборация',
    description: 'Анимация коллаборации для спортивного клуба.',
    cover: '/media/collab-dzyudo-chempion.jpg', video: '/media/collab-dzyudo-chempion.mp4'
  },
  {
    id: 'vizitka', title: 'Рилс-визитка', categories: ['reels', 'motion'], label: 'Reels · Motion',
    description: 'Стеклянная графика, анимированные субтитры по словам и анимация логотипа.',
    cover: '/media/prev-vizitka.jpg', video: '/media/prev-vizitka.mp4', url: 'https://www.instagram.com/reel/DemSsdIKEcW/'
  },
  {
    id: 'claude-code', title: '900 кадров кодом', categories: ['reels', 'motion'], label: 'Reels · Motion',
    description: 'Интерфейс, курсор и печатная машинка — каждый кадр отрисован кодом.',
    cover: '/media/prev-claude-code.jpg', video: '/media/prev-claude-code.mp4', url: 'https://www.instagram.com/reel/DetNfotqjdT/'
  },
  {
    id: '3sek', title: 'Первые 3 секунды', categories: ['reels'], label: 'Reels · с лицом',
    description: 'Сплит-экран, полноэкранная графика, субтитры по словам.',
    cover: '/media/prev-3-sekundy.jpg', video: '/media/prev-3-sekundy.mp4', url: 'https://www.instagram.com/reel/DerXC-BqPN2/'
  },
  {
    id: '3oshibki', title: '3 ошибки монтажа', categories: ['reels', 'motion'], label: 'Reels · разбор',
    description: 'Разбор с мультяшным персонажем, графикой и субтитрами.',
    cover: '/media/prev-3-oshibki.jpg', video: '/media/prev-3-oshibki.mp4', url: 'https://www.instagram.com/reel/DesvQGRqqrs/'
  },
  {
    id: 'petlya', title: '«Петля»', categories: ['reels', 'motion'], label: 'Reels · Motion',
    description: 'Полноэкранные motion-сцены и бесшовный переход конца в начало.',
    cover: '/media/prev-petlya.jpg', video: '/media/prev-petlya.mp4', url: 'https://www.instagram.com/reel/Deo6uy9KJne/'
  },
  {
    id: 'youtube-ii', title: 'Монтаж с ИИ — халтура?', categories: ['motion'], label: 'YouTube · 16:9',
    description: 'Горизонтальное видео: главы, полноэкранная графика, субтитры, конечная заставка.',
    cover: '/media/prev-youtube-ii.jpg', video: '/media/prev-youtube-ii.mp4', url: 'https://youtu.be/PX2HHpFY7kg'
  },
  {
    id: 'logo', title: 'Анимация логотипа', categories: ['motion'], label: 'Motion · логотип',
    description: 'Мой собственный знак: два клипа и плейхед.',
    cover: '/media/prev-logo.jpg', video: '/media/prev-logo.mp4'
  },
  {
    id: 'slot-3d', title: 'Место для 3D-проекта', categories: ['3d'], label: '3D Motion',
    description: 'Добавьте свою 3D-работу в src/data/portfolio.ts — превью и видео положите в public/media.',
    cover: '', placeholder: true
  }
];
