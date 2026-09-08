import { useEffect, useState } from "react";
import {
  Clock,
  CreditCard,
  MapPin,
  ParkingCircle,
  Phone,
  Send,
  Truck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { features, shop, shopOpenState, telHref } from "@/data/shop";

const days = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];

export function SiteContacts() {
  const [isOpen, setIsOpen] = useState<boolean | null>(null);

  useEffect(() => {
    setIsOpen(shopOpenState().isOpen);
  }, []);

  return (
    <section id="contacts" className="scroll-mt-24 bg-bg-elevated px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Контакты</p>
          <h2 className="mt-3 font-display text-4xl font-medium tracking-tight sm:text-5xl">
            Приходите или звоните
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
            {shop.city}, {shop.district}. Рядом {shop.landmark}.
          </p>

          <a href={telHref()} className="mt-8 block">
            <p className="text-xs uppercase tracking-widest text-muted">Телефон</p>
            <p className="mt-1 font-display text-4xl tracking-tight text-fg">
              {shop.phoneDisplay}
            </p>
          </a>

          <dl className="mt-8 space-y-5">
            <div className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
              <div>
                <dt className="text-sm font-medium">Адрес</dt>
                <dd className="mt-1 text-sm text-muted">
                  {shop.city}, {shop.address}, {shop.postal}
                </dd>
              </div>
            </div>
            <div className="flex gap-3">
              <Clock className="mt-0.5 size-4 shrink-0 text-accent" />
              <div>
                <dt className="text-sm font-medium">
                  Часы работы
                  {isOpen === null ? null : (
                    <span className={isOpen ? "text-accent" : "text-muted"}>
                      {" "}
                      · {isOpen ? "открыто" : "закрыто"}
                    </span>
                  )}
                </dt>
                <dd className="mt-2 space-y-1 text-sm text-muted">
                  {days.map((day) => (
                    <div key={day} className="flex justify-between gap-6">
                      <span>{day}</span>
                      <span className="tabular-nums text-fg-soft">{shop.hoursShort}</span>
                    </div>
                  ))}
                </dd>
              </div>
            </div>
            <div className="flex gap-3">
              <Truck className="mt-0.5 size-4 shrink-0 text-accent" />
              <div>
                <dt className="text-sm font-medium">Доставка и самовывоз</dt>
                <dd className="mt-1 text-sm text-muted">
                  Есть доставка и пункт выдачи. Условия уточняйте при заказе.
                </dd>
              </div>
            </div>
            <div className="flex gap-3">
              <CreditCard className="mt-0.5 size-4 shrink-0 text-accent" />
              <div>
                <dt className="text-sm font-medium">Оплата</dt>
                <dd className="mt-1 text-sm text-muted">
                  Картой, наличными и по предоплате.
                </dd>
              </div>
            </div>
            <div className="flex gap-3">
              <ParkingCircle className="mt-0.5 size-4 shrink-0 text-accent" />
              <div>
                <dt className="text-sm font-medium">Парковка</dt>
                <dd className="mt-1 text-sm text-muted">
                  Есть парковка, в том числе для людей с инвалидностью. Вход не
                  приспособлен для инвалидных колясок.
                </dd>
              </div>
            </div>
          </dl>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href={telHref()}>
                <Phone />
                Позвонить
              </a>
            </Button>
            <Button asChild size="lg" variant="night">
              <a href={shop.telegram} target="_blank" rel="noreferrer">
                <Send />
                Telegram
              </a>
            </Button>
          </div>

          <ul className="mt-8 flex flex-wrap gap-2">
            {features.map((feature) => (
              <li
                key={feature.id}
                className="rounded-full bg-surface px-3 py-1.5 text-xs text-fg-soft shadow-[var(--shadow-border)]"
              >
                {feature.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="overflow-hidden rounded-2xl border border-line bg-surface">
          <iframe
            title="Магазин Эффект на карте"
            src={shop.yandexWidget}
            className="h-80 w-full border-0 lg:h-full lg:min-h-[36rem]"
            loading="lazy"
          />
          <div className="border-t border-line px-4 py-3">
            <a
              href={shop.yandexUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-accent hover:text-accent-deep"
            >
              Открыть карточку на Яндекс Картах
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
