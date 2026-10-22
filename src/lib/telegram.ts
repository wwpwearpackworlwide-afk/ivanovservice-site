import { site } from '../data/site';
import { fmt, levelOf, type LevelId, type Plan } from '../data/pricing';

/**
 * Ссылка на личный профиль с готовым текстом.
 * Официальный формат Telegram: https://t.me/<username>?text=<текст>
 * (параметр text поддерживается для ссылок на пользователей — текст подставляется в поле ввода).
 * Текст кодируется encodeURIComponent: русские буквы, пробелы, переносы и эмодзи передаются корректно.
 */
export function telegramLink(text: string, username = site.telegramUsername): string {
  return `https://t.me/${encodeURIComponent(username)}?text=${encodeURIComponent(text)}`;
}

export function subscriptionMessage(plan: Plan, level: LevelId): string {
  const l = levelOf(level);
  return [
    'Здравствуйте! Хочу оформить подписку на монтаж.',
    '',
    `Тариф: ${plan.title}`,
    `Роликов в месяц: ${plan.videos}`,
    `Длительность ролика: до ${plan.maxSec} секунд`,
    `Уровень анимации: ${l.upper}`,
    `Стоимость: ${fmt(plan.price[level])} в месяц`,
    '',
    'Давайте обсудим детали заказа.'
  ].join('\n');
}

export interface OneOffChoice { service: string; duration: string; style: string; wishes: string }

export function oneOffMessage(c: OneOffChoice): string {
  return [
    'Здравствуйте! Хочу заказать разовый монтаж.',
    '',
    `Услуга: ${c.service}`,
    `Длительность ролика: ${c.duration}`,
    `Желаемый стиль монтажа: ${c.style}`,
    `Дополнительные пожелания: ${c.wishes.trim() || 'нет'}`,
    '',
    'Подскажите, пожалуйста, окончательную стоимость.'
  ].join('\n');
}

export function generalMessage(): string {
  return 'Здравствуйте! Хочу обсудить монтаж.';
}
