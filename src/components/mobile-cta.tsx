import { Phone, Send } from "lucide-react";
import { shop, telHref } from "@/data/shop";

export function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-bg/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md sm:hidden">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={telHref()}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-accent text-sm font-medium text-accent-fg active:scale-[0.96]"
        >
          <Phone className="size-4" />
          Позвонить
        </a>
        <a
          href={shop.telegram}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-night text-sm font-medium text-accent-fg active:scale-[0.96]"
        >
          <Send className="size-4" />
          Telegram
        </a>
      </div>
    </div>
  );
}
