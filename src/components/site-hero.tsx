import { useEffect, useState } from "react";
import { Clock, MapPin, Phone, Send, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { shop, shopOpenState, telHref } from "@/data/shop";

export function SiteHero() {
  const [isOpen, setIsOpen] = useState<boolean | null>(null);

  useEffect(() => {
    setIsOpen(shopOpenState().isOpen);
  }, []);

  return (
    <section className="relative min-h-[86svh] overflow-hidden bg-night text-accent-fg">
      <img
        src="photos/hero-storefront.jpg"
        alt="Витрина цветочного магазина Эффект на улице Мира"
        className="absolute inset-0 size-full object-cover object-[center_78%]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-night via-night/35 to-night/10" />

      <div className="relative mx-auto flex min-h-[86svh] max-w-6xl flex-col justify-end px-4 pb-10 pt-28 sm:px-6 sm:pb-14">
        <p className="text-xs uppercase tracking-[0.22em] text-accent-fg/80">
          Цветочный магазин · Тольятти
        </p>
        <h1 className="mt-3 max-w-xl font-display text-6xl font-medium leading-none tracking-tight sm:text-7xl">
          Эффект
        </h1>
        <p className="mt-4 max-w-md text-base leading-relaxed text-accent-fg/88 sm:text-lg">
          Свежие букеты, шары и подарки на улице Мира. Соберут композицию при вас
          или по звонку.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-accent-fg/85">
          <span className="inline-flex items-center gap-1.5">
            <span
              className={`size-2 rounded-full ${isOpen ? "bg-emerald-400" : "bg-subtle"}`}
              aria-hidden
            />
            {isOpen === null
              ? shop.hoursShort
              : isOpen
                ? `Сейчас открыто · ${shop.hoursShort}`
                : `Сейчас закрыто · ${shop.hoursShort}`}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="size-3.5" />
            {shop.address}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Star className="size-3.5 fill-current" />
            {shop.rating} · {shop.ratingCount} оценок на Яндекс Картах
          </span>
        </div>

        <div className="mt-8 flex w-full max-w-lg flex-col gap-3 sm:flex-row">
          <Button asChild size="xl" className="w-full sm:w-auto">
            <a href={telHref()}>
              <Phone />
              Позвонить
            </a>
          </Button>
          <Button asChild size="xl" variant="cream" className="w-full sm:w-auto">
            <a href={shop.telegram} target="_blank" rel="noreferrer">
              <Send />
              Написать в Telegram
            </a>
          </Button>
        </div>

        <div className="mt-8 hidden items-center gap-6 text-sm text-accent-fg/70 sm:flex">
          <span className="inline-flex items-center gap-2">
            <Clock className="size-4" />
            {shop.hoursLabel}
          </span>
          <span>{shop.award}</span>
        </div>
      </div>
    </section>
  );
}
