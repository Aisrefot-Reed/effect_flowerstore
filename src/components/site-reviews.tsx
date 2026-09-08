import { reviews, shop } from "@/data/shop";

export function SiteReviews() {
  return (
    <section id="reviews" className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.2em] text-muted">Отзывы</p>
        <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-display text-4xl font-medium tracking-tight sm:text-5xl">
            Что пишут гости
          </h2>
          <p className="text-sm text-muted">
            {shop.rating} из 5 · {shop.ratingCount} оценок · {shop.reviewCount} отзывов
            на Яндекс Картах
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {reviews.map((review) => (
            <article
              key={`${review.author}-${review.date}`}
              className="rounded-2xl border border-line bg-bg-elevated p-5 sm:p-6"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="font-medium text-fg">{review.author}</p>
                <p className="text-xs text-subtle">{review.date}</p>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-fg-soft">{review.text}</p>
            </article>
          ))}
        </div>

        <a
          href={shop.yandexUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-block text-sm text-accent hover:text-accent-deep"
        >
          Все отзывы на Яндекс Картах
        </a>
      </div>
    </section>
  );
}
