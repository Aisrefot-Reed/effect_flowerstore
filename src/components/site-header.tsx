import { useState } from "react";
import { Menu, Phone, Send, X } from "lucide-react";
import { shop, telHref } from "@/data/shop";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "#catalog", label: "Цены" },
  { href: "#gallery", label: "Фото" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#contacts", label: "Контакты" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-bg/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:h-18 sm:px-6">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <img
            src={shop.logo}
            alt="Логотип Эффект"
            className="size-10 rounded-md object-cover sm:size-11"
          />
          <span className="min-w-0">
            <span className="block font-display text-xl leading-none tracking-tight text-fg sm:text-2xl">
              {shop.name}
            </span>
            <span className="mt-0.5 block truncate text-xs uppercase tracking-widest text-muted">
              Тольятти · Мира, 95А
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-fg-soft transition-colors duration-150 hover:text-fg"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" variant="ghost" className="hidden sm:inline-flex">
            <a href={shop.telegram} target="_blank" rel="noreferrer">
              <Send />
              Telegram
            </a>
          </Button>
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href={telHref()}>
              <Phone />
              {shop.phoneDisplay}
            </a>
          </Button>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-lg text-fg lg:hidden"
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-line bg-bg-elevated transition-[max-height,opacity] duration-200 ease-out lg:hidden",
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base text-fg"
            >
              {link.label}
            </a>
          ))}
          <a
            href={telHref()}
            className="rounded-lg px-3 py-3 text-base text-accent"
          >
            Позвонить {shop.phoneDisplay}
          </a>
        </nav>
      </div>
    </header>
  );
}
