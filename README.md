# IVANOVSERVICE — сайт-портфолио

React + Vite + TypeScript. Без платных зависимостей и без библиотек анимаций (только CSS).
Заказы оформляются через **личный Telegram** — кнопка открывает чат с готовым текстом заказа.

## Структура

```
src/
  data/site.ts        ← username Telegram, соцсети, текст «Обо мне», фото
  data/pricing.ts     ← ВСЕ цены: подписки, уровни, разовый монтаж
  data/services.ts    ← 5 карточек услуг
  data/portfolio.ts   ← работы портфолио и категории фильтров
  lib/telegram.ts     ← тексты сообщений заказа и ссылка t.me
  components/         ← блоки страницы (Hero, Portfolio, Subscriptions…)
  styles/global.css   ← цвета, сетка, анимации
public/
  media/              ← видео и превью работ
  fonts/              ← шрифт Nunito
  _headers            ← заголовки безопасности для Cloudflare Pages
```

## 1. Установка и запуск

Нужен Node.js 20+.

```bash
npm install
npm run dev        # http://localhost:5173
```

## 2. Мой Telegram для заказов

`src/data/site.ts` → `telegramUsername: 'ivanovv50'` (без @). Поменяйте здесь — изменится на всём сайте.

Кнопки открывают ссылку вида `https://t.me/ivanovv50?text=...`. Текст заказа уже вставлен в поле ввода,
клиент только нажимает «Отправить». Если приложение не подставило текст, есть кнопка «Скопировать текст».
Сайт **не** пишет «заказ отправлен», потому что не может это проверить.

## 3. Цены

Только `src/data/pricing.ts`:
- `plans`: тарифы (роликов в месяц, длительность, `price.standard` и `price.advanced`);
- `levels`: описание STANDARD MOTION и ADVANCED 3D;
- `oneOff`: разовый монтаж «от …».

Карточки, сравнение и тексты сообщений берут цены отсюда.

## 4. Работы в портфолио

1. Положите превью (jpg) и короткое видео (mp4 H.264, без звука, до ~3 МБ) в `public/media/`.
2. Добавьте объект в массив `works` в `src/data/portfolio.ts`:

```ts
{
  id: 'new-work', title: 'Название', categories: ['sport'], label: 'Спорт · клуб',
  description: 'Коротко о работе',
  cover: '/media/new.jpg', video: '/media/new.mp4', url: 'https://www.instagram.com/reel/...'
},
```

Категории: `sport`, `reels`, `motion`, `3d`, `reportage`. `url` — ссылка на полный ролик (кнопка «Смотреть оригинал»), необязательна.
Карточка `slot-3d` — плейсхолдер. Удалите её, когда появится настоящая 3D-работа.

## 5. Фото и «Обо мне»

`src/data/site.ts`:
- `about` — абзацы текста, впишите свой;
- `aboutPhoto: '/media/me.jpg'` — путь к фото в `public/media/`. Пока пусто, показывается место для фото.

## 6. Соцсети

`src/data/site.ts` → `socials`. Ссылка с пустым `url` не показывается. **YouTube пока пустой** — вставьте ссылку на канал.

## 7. Сборка

```bash
npm run build      # результат в папке dist/
npm run preview    # проверить сборку локально
```

## 8. Бесплатная публикация на Cloudflare Pages

1. Загрузите проект в репозиторий GitHub (например `ivanovservice-site`).
2. Откройте dash.cloudflare.com → **Workers & Pages** → **Create** → **Pages** → **Connect to Git** и выберите репозиторий.
3. Настройки:
   - Framework preset: **Vite** (или None);
   - Build command: `npm run build`;
   - Build output directory: `dist`;
   - переменная окружения `NODE_VERSION` = `20` (необязательно, есть файл `.node-version`).
4. **Save and Deploy**. Сайт будет доступен по адресу `https://<имя>.pages.dev`.
5. После каждого push в GitHub сайт пересобирается сам.

Без GitHub: выполните `npm run build` и перетащите папку `dist` в **Upload assets** (Pages → Create → Direct Upload).

## Что проверено

Сайт проверен в Chromium на ширине 320, 375, 412, 820 и 1440 px:
- нет горизонтальной прокрутки и ошибок JS;
- работают меню, фильтры портфолио, переключение STANDARD/ADVANCED и цена;
- ссылки t.me содержат все поля заказа;
- работают клавиатура и размеры кнопок под палец.

Финальная команда `npm run build` (vite + tsc) в среде разработки не запускалась, потому что там закрыт доступ к npm.
Её выполнит Cloudflare. Если сборка упадёт, текст ошибки будет в логе деплоя.
