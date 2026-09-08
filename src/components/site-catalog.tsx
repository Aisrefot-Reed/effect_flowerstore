import { useMemo, useState } from "react";
import { Phone, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  categoryLabels,
  products,
  shop,
  telHref,
  type Product,
  type ProductCategory,
} from "@/data/shop";
import { cn, formatPrice } from "@/lib/utils";

const filters: Array<ProductCategory | "all"> = [
  "all",
  "bouquets",
  "balloons",
  "compositions",
  "events",
];

function priceLabel(product: Product) {
  if (product.priceTo) {
    return `от ${formatPrice(product.price)}`;
  }
  return formatPrice(product.price);
}

export function SiteCatalog() {
  const [filter, setFilter] = useState<ProductCategory | "all">("all");
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState<string | null>(null);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((item) => {
      const byCat = filter === "all" || item.category === filter;
      const byQuery =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q);
      return byCat && byQuery;
    });
  }, [filter, query]);

  return (
    <section id="catalog" className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.2em] text-muted">Прайс</p>
        <div className="mt-3 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-xl font-display text-4xl font-medium tracking-tight sm:text-5xl">
            Цены на букеты и шары
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-muted">
            Цены указаны из карточки магазина на Яндекс Картах. Обновлены
            представителем организации {shop.pricesUpdated}. Наличие и состав
            лучше уточнить по телефону.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {filters.map((id) => (
              <button
                key={id}
                type="button"
                onClick={() => setFilter(id)}
                className={cn(
                  "h-10 shrink-0 rounded-full px-4 text-sm transition-colors duration-150",
                  filter === id
                    ? "bg-night text-accent-fg"
                    : "bg-bg-elevated text-fg-soft hover:bg-surface",
                )}
              >
                {categoryLabels[id]}
              </button>
            ))}
          </div>
          <label className="relative block w-full sm:max-w-xs">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-subtle" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Найти букет или шар"
              className="h-11 w-full rounded-xl border border-line bg-surface pl-10 pr-3 text-sm text-fg outline-none placeholder:text-subtle focus:border-accent"
            />
          </label>
        </div>

        {visible.length === 0 ? (
          <p className="mt-12 text-muted">Ничего не нашлось. Попробуйте другой запрос.</p>
        ) : (
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((product) => {
              const expanded = openId === product.id;
              return (
                <article
                  key={product.id}
                  className="flex flex-col overflow-hidden rounded-2xl bg-surface shadow-[var(--shadow-border)]"
                >
                  <button
                    type="button"
                    className="relative aspect-4/5 overflow-hidden text-left"
                    onClick={() => setOpenId(expanded ? null : product.id)}
                    aria-expanded={expanded}
                    aria-label={`Подробнее: ${product.name}`}
                  >
                    <img
                      src={product.image}
                      alt=""
                      className="size-full object-cover transition-transform duration-500 ease-out hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-bg/92 px-3 py-1 text-xs text-fg-soft">
                      {categoryLabels[product.category]}
                    </span>
                  </button>
                  <div className="flex flex-1 flex-col p-4">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-2xl font-medium leading-tight tracking-tight">
                        {product.name}
                      </h3>
                      <p className="shrink-0 pt-1 text-sm font-medium text-accent">
                        {priceLabel(product)}
                      </p>
                    </div>
                    {product.priceNote ? (
                      <p className="mt-1 text-xs text-muted">{product.priceNote}</p>
                    ) : null}
                    <p
                      className={cn(
                        "mt-3 text-sm leading-relaxed text-muted",
                        !expanded && "line-clamp-3",
                      )}
                    >
                      {product.description}
                    </p>
                    <div className="mt-4 flex items-center gap-2">
                      <Button asChild size="sm" className="flex-1">
                        <a href={telHref()}>
                          <Phone />
                          Заказать
                        </a>
                      </Button>
                      <Button
                        type="button"
                        size="sm"
                        variant="outline"
                        onClick={() => setOpenId(expanded ? null : product.id)}
                      >
                        {expanded ? "Скрыть" : "Подробнее"}
                      </Button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        <p className="mt-8 text-xs leading-relaxed text-subtle">
          Источник цен: {shop.pricesSource}, {shop.pricesUpdated}. Это не
          интернет-магазин с онлайн-оплатой — заказ по телефону или в Telegram.
        </p>
      </div>
    </section>
  );
}
