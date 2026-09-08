import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { gallery } from "@/data/shop";
import { cn } from "@/lib/utils";

export function SiteGallery() {
  const [index, setIndex] = useState<number | null>(null);

  useEffect(() => {
    if (index === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIndex(null);
      if (event.key === "ArrowRight") setIndex((i) => (i === null ? i : (i + 1) % gallery.length));
      if (event.key === "ArrowLeft")
        setIndex((i) => (i === null ? i : (i - 1 + gallery.length) % gallery.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index]);

  return (
    <section id="gallery" className="scroll-mt-24 bg-night px-4 py-16 text-accent-fg sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.2em] text-accent-fg/55">Галерея</p>
        <h2 className="mt-3 font-display text-4xl font-medium tracking-tight sm:text-5xl">
          Магазин в фотографиях
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-accent-fg/65">
          Снимки с карточки «Эффект» на Яндекс Картах: витрина, зал и готовые работы.
        </p>

        <div className="mt-10 columns-2 gap-3 sm:columns-3 sm:gap-4">
          {gallery.map((item, i) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setIndex(i)}
              className="mb-3 block w-full overflow-hidden rounded-xl sm:mb-4"
            >
              <img
                src={item.src}
                alt={item.alt}
                className={cn(
                  "w-full object-cover transition-transform duration-500 ease-out hover:scale-[1.03]",
                  item.tall ? "aspect-[3/4]" : "aspect-[4/5] sm:aspect-[5/4]",
                )}
              />
            </button>
          ))}
        </div>
      </div>

      {index !== null ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-night/92 p-4"
          onClick={() => setIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Просмотр фотографии"
        >
          <button
            type="button"
            className="absolute right-4 top-4 inline-flex size-11 items-center justify-center rounded-full bg-bg/10 text-accent-fg"
            aria-label="Закрыть"
            onClick={() => setIndex(null)}
          >
            <X className="size-5" />
          </button>
          <button
            type="button"
            className="absolute left-3 inline-flex size-11 items-center justify-center rounded-full bg-bg/10 text-accent-fg"
            aria-label="Предыдущее фото"
            onClick={(event) => {
              event.stopPropagation();
              setIndex((i) => (i === null ? 0 : (i - 1 + gallery.length) % gallery.length));
            }}
          >
            <ChevronLeft className="size-5" />
          </button>
          <img
            src={gallery[index].src}
            alt={gallery[index].alt}
            className="max-h-[86svh] max-w-full rounded-xl object-contain"
            onClick={(event) => event.stopPropagation()}
          />
          <button
            type="button"
            className="absolute right-3 inline-flex size-11 items-center justify-center rounded-full bg-bg/10 text-accent-fg"
            aria-label="Следующее фото"
            onClick={(event) => {
              event.stopPropagation();
              setIndex((i) => (i === null ? 0 : (i + 1) % gallery.length));
            }}
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      ) : null}
    </section>
  );
}
