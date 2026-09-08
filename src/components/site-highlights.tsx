import { Clock, MapPin, Star, Truck } from "lucide-react";
import { shop } from "@/data/shop";

const items = [
  {
    icon: Star,
    title: `${shop.rating} на Яндекс Картах`,
    text: `${shop.ratingCount} оценок · ${shop.award}`,
  },
  {
    icon: Clock,
    title: shop.hoursLabel,
    text: "Без выходных, удобно заехать после работы",
  },
  {
    icon: Truck,
    title: "Доставка и самовывоз",
    text: "Заказ по телефону или в Telegram",
  },
  {
    icon: MapPin,
    title: `${shop.address}, ${shop.city}`,
    text: shop.landmark,
  },
];

export function SiteHighlights() {
  return (
    <section className="border-b border-line bg-bg-elevated px-4 py-10 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item.title} className="flex gap-3">
            <item.icon className="mt-0.5 size-4 shrink-0 text-accent" />
            <div>
              <p className="font-medium leading-snug text-fg">{item.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
