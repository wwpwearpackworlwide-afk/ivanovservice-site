import { useState } from 'react';
import { telegramLink } from '../lib/telegram';

interface Props { message: string; label: string; className?: string; note?: boolean }

/**
 * Кнопка заказа: настоящая ссылка на личный Telegram с готовым текстом.
 * После нажатия НЕ показываем «заказ отправлен» — только подсказку, что сообщение нужно отправить в Telegram.
 * Если клиент Telegram не подставил текст (старые версии), текст можно скопировать.
 */
export function OrderLink({ message, label, className = 'btn btn-primary', note = true }: Props) {
  const [opened, setOpened] = useState(false);
  const [copied, setCopied] = useState<'idle' | 'ok' | 'fail'>('idle');

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(message);
      setCopied('ok');
    } catch {
      setCopied('fail');
    }
  };

  return (
    <div className="order-link">
      <a className={className} href={telegramLink(message)} target="_blank" rel="noopener noreferrer" onClick={() => setOpened(true)}>
        {label}
        <svg viewBox="0 0 24 24" aria-hidden="true" className="tg-ico"><path d="M21.5 4.2 2.8 11.4c-.9.4-.9 1.5 0 1.8l4.6 1.5 1.8 5.6c.2.7 1.1.9 1.6.4l2.6-2.4 4.7 3.5c.6.4 1.4.1 1.6-.6L22.8 5.6c.2-.9-.6-1.7-1.3-1.4z" fill="currentColor" /></svg>
      </a>
      {note && opened && (
        <div className="order-hint" role="status">
          <p>Откроется мой Telegram с готовым текстом — <b>нажмите «Отправить»</b>, чтобы заявка дошла.</p>
          <button type="button" className="link" onClick={copy}>
            {copied === 'ok' ? 'Текст скопирован' : copied === 'fail' ? 'Не удалось скопировать — выделите текст ниже' : 'Текст не подставился? Скопировать'}
          </button>
          {copied === 'fail' && <textarea readOnly className="copy-box" value={message} rows={6} onFocus={e => e.currentTarget.select()} />}
        </div>
      )}
    </div>
  );
}
