import { shop } from "@/data/shop";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-night px-4 py-10 text-accent-fg sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-2xl tracking-tight">{shop.name}</p>
          <p className="mt-2 max-w-sm text-sm text-accent-fg/65">
            {shop.city}, {shop.address} · {shop.hoursLabel}
          </p>
        </div>
        <div className="text-sm text-accent-fg/65">
          <p>
            Данные магазина — с{" "}
            <a
              href={shop.yandexUrl}
              className="underline decoration-accent-fg/30 underline-offset-4 hover:text-accent-fg"
              target="_blank"
              rel="noreferrer"
            >
              Яндекс Карт
            </a>
            . Цены обновлены {shop.pricesUpdated}.
          </p>
          <p className="mt-2">{shop.award}</p>
        </div>
      </div>
    </footer>
  );
}
