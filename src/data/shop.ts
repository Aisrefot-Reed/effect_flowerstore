export const shop = {
  name: "Эффект",
  tagline: "Цветы и шары в Тольятти",
  description:
    "Цветочный магазин и магазин подарков на улице Мира. Свежие букеты, композиции, воздушные шары и оформление праздников.",
  phone: "+79967226262",
  phoneDisplay: "+7 (996) 722-62-62",
  telegram: "https://t.me/+79967226262",
  address: "ул. Мира, 95А",
  city: "Тольятти",
  region: "Самарская область",
  postal: "445054",
  district: "72-й квартал, Центральный район",
  landmark: "остановка «27-й квартал», 130 м",
  hoursLabel: "ежедневно 10:00–20:00",
  hoursShort: "10:00–20:00",
  openHour: 10,
  closeHour: 20,
  timezone: "Europe/Samara",
  lat: 53.509865,
  lon: 49.435465,
  yandexUrl: "https://yandex.ru/maps/org/effekt/217677326377",
  yandexWidget:
    "https://yandex.ru/map-widget/v1/?ll=49.435465%2C53.509865&z=17&pt=49.435465,53.509865,pm2rdm&l=map",
  rating: 4.5,
  ratingCount: 118,
  reviewCount: 26,
  award: "Хорошее место 2026",
  categories: ["Цветочный магазин", "Магазин подарков и сувениров"],
  pricesUpdated: "16 июня",
  pricesSource: "карточка организации на Яндекс Картах",
  logo: "photos/logo.jpg",
} as const;

export const features = [
  { id: "delivery", label: "Доставка" },
  { id: "pickup", label: "Самовывоз" },
  { id: "card", label: "Оплата картой" },
  { id: "cash", label: "Наличные" },
  { id: "prepay", label: "Предоплата" },
  { id: "cards", label: "Открытки" },
  { id: "sweets", label: "Сладкие подарки" },
  { id: "newyear", label: "Новогодние подарки" },
  { id: "parking", label: "Парковка" },
  { id: "disabled-parking", label: "Парковка для людей с инвалидностью" },
] as const;

export type ProductCategory = "bouquets" | "balloons" | "compositions" | "events";

export const categoryLabels: Record<ProductCategory | "all", string> = {
  all: "Все",
  bouquets: "Букеты",
  balloons: "Шары",
  compositions: "Композиции",
  events: "Праздник",
};

export type Product = {
  id: string;
  name: string;
  price: number;
  priceTo?: number;
  priceNote?: string;
  description: string;
  category: ProductCategory;
  image: string;
};

export const products: Product[] = [
  {
    id: "nenozhnost-1",
    name: "Нежность 1",
    price: 1800,
    description:
      "Розы пионовидные 3 шт, диантусы 5 шт, гвоздика кустовая 1 шт, гипсофила 1 шт. Упаковка — плёнка.",
    category: "bouquets",
    image: "photos/bouquet-roses.jpg",
  },
  {
    id: "nenozhnost-2",
    name: "Нежность роз",
    price: 1650,
    description:
      "Пионовидная роза 3 шт, диантус 2 шт, гвоздика кустовая 1 шт, гипсофила 1 шт, зелень 0,5 ветки. Упаковка — плёнка с тесьмой.",
    category: "bouquets",
    image: "photos/flowers-pink.jpg",
  },
  {
    id: "gypsophila",
    name: "Букет из гипсофилы",
    price: 1600,
    description:
      "Гипсофила — долгостойкий цветок, переходящий в сухоцвет. 5 веток, ковыль 2 шт, бабочка 1 шт.",
    category: "bouquets",
    image: "photos/flowers-white.jpg",
  },
  {
    id: "peonies",
    name: "Пионы",
    price: 2150,
    description: "Пионы 7 штук, веточка гипсофилы, нежная упаковка.",
    category: "bouquets",
    image: "photos/interior-roses.jpg",
  },
  {
    id: "lilies",
    name: "Лилии",
    price: 900,
    description: "Веточка лилии и гипсофилы в светлой упаковке.",
    category: "bouquets",
    image: "photos/flowers-yellow.jpg",
  },
  {
    id: "summer",
    name: "Летнее настроение",
    price: 1600,
    description:
      "Сумочка среднего размера, хризантема кеннеди 3 ветки, танацетум 2 ветки, зелень.",
    category: "bouquets",
    image: "photos/interior-bloom.jpg",
  },
  {
    id: "ny-bouquet",
    name: "Букет в преддверии Нового года",
    price: 3200,
    description:
      "Букет из нобилиса, роз, декора хлопком и шишками в новогодней тематике.",
    category: "bouquets",
    image: "photos/interior-green.jpg",
  },
  {
    id: "round-balloon",
    name: "Букет круглый",
    price: 2800,
    description:
      "Окружность около 1 м, высота 80 см–1 м. Живая и сухоцветная гипсофила, латексные шары разного дизайна, хром-шары. Надпись может быть любой.",
    category: "balloons",
    image: "photos/balloon-round.jpg",
  },
  {
    id: "kraft-max",
    name: "Крафт-букет макси",
    price: 3000,
    description:
      "Высота 130 см. Изготовление с индивидуальной надписью. Шары можно заменить на любые.",
    category: "balloons",
    image: "photos/balloon-gold.jpg",
  },
  {
    id: "kraft",
    name: "Крафт-букеты из шаров",
    price: 750,
    priceTo: 1150,
    priceNote: "от 3 шаров — 750 ₽, 5 шаров — 1 150 ₽",
    description:
      "Крафт-букеты из воздушных шаров. Долго держат форму и напоминают о празднике.",
    category: "balloons",
    image: "photos/balloon-craft.jpg",
  },
  {
    id: "latex",
    name: "Шар латекс однотонный",
    price: 150,
    description: "В стоимость входит шар, обработка, гелий и лента.",
    category: "balloons",
    image: "photos/balloon-white.jpg",
  },
  {
    id: "chrome",
    name: "Хром-шары",
    price: 170,
    description:
      "Металлизированные шары: золото, серебро, тиффани, розовое золото, шампань.",
    category: "balloons",
    image: "photos/balloon-mix.jpg",
  },
  {
    id: "confetti",
    name: "Шар с конфетти",
    price: 190,
    description:
      "Шары с наполнением конфетти. Цвета: золото, серебро, розовое золото, тиффани, фуксия, фиолетовый, голубой, розовый и другие.",
    category: "balloons",
    image: "photos/balloon-stars.jpg",
  },
  {
    id: "numbers",
    name: "Цифры 66 см",
    price: 650,
    description:
      "Цифра 66 см, гелий и лента, декор. Цвета: золото, серебро, фуксия, синие, зелёные, чёрные.",
    category: "balloons",
    image: "photos/balloon-numbers.jpg",
  },
  {
    id: "bubbles",
    name: "Баблс с наполнением",
    price: 850,
    priceTo: 1100,
    priceNote: "50 см — 850 ₽, 65 см — 1 100 ₽",
    description:
      "Прозрачный шар-баблс. Можно наполнить конфетти, пенопластом, перьями, шарами или фатином.",
    category: "balloons",
    image: "photos/balloon-hearts.jpg",
  },
  {
    id: "foil",
    name: "Фольга с декором",
    price: 350,
    description:
      "Фольга 45 см однотонная: сердца, круги, звёзды. Можно украсить бантиками, горошком, бабочками.",
    category: "balloons",
    image: "photos/balloon-foil.jpg",
  },
  {
    id: "chamomile-foil",
    name: "Ромашка",
    price: 90,
    description: "Ромашка диаметром 15–17 см, разные цвета. Бант — отдельно 90 ₽.",
    category: "balloons",
    image: "photos/flower-single.jpg",
  },
  {
    id: "rose-foil",
    name: "Роза из шара",
    price: 120,
    description: "Роза диаметром 20–22 см, разные цвета. Бант — 90 ₽.",
    category: "balloons",
    image: "photos/bouquet-balloons.jpg",
  },
  {
    id: "soap-bubbles",
    name: "Мыльная композиция с баблс",
    price: 1950,
    description:
      "Композиция в шляпной коробке с мыльными розами люкс, хлопком, декоративными веточками и бабочкой. Шар-баблс с перьями и индивидуальной надписью.",
    category: "compositions",
    image: "photos/composition-box.jpg",
  },
  {
    id: "nobilis",
    name: "Свежий нобилис",
    price: 930,
    description:
      "Зимние композиции, букеты и штучные ветки нобилиса для праздника.",
    category: "compositions",
    image: "photos/interior-shelf.jpg",
  },
  {
    id: "kindergarten",
    name: "Оформление выпускного в детском саду",
    price: 15000,
    description: "Оформление мероприятий.",
    category: "events",
    image: "photos/balloon-blue.jpg",
  },
];

export type Review = {
  author: string;
  date: string;
  text: string;
};

export const reviews: Review[] = [
  {
    author: "sekerin03",
    date: "20 августа",
    text: "Отличное место, все упаковали быстро и качественно, персонал приветливый, много цветов и приемлемые цены.",
  },
  {
    author: "Диана",
    date: "6 марта 2024",
    text: "Мой любимый магазин цветов. Не первый год мои родные получают самые красивые, свежие, а порой и очень экзотические цветы на праздничные дни. Спасибо большое грамотным флористам.",
  },
  {
    author: "Анна Чернова",
    date: "15 июля 2023",
    text: "Цветок свежий, красивый. Работают отличные флористы, составят вам роскошный букет или композицию, если вы ограничены во времени — есть уже готовые букеты.",
  },
  {
    author: "Аделя",
    date: "12 сентября 2023",
    text: "Давно не встречала таких вежливых и добрых сотрудников. Девушка очень меня выручила, оперативно помогла к подарку приобрести шампанское, всё отправила, сориентировала. Делала заказ дистанционно, так как проживаю в Москве. Очень удобно, без лишних разговоров, по делу. Букет очень красивый.",
  },
  {
    author: "Наталья",
    date: "31 июля 2025",
    text: "Сегодня обратилась за помощью в этот магазин. Очень довольна тем, что мне помогли сделать выбор. Спасибо огромное продавцу.",
  },
  {
    author: "Сергей Жемчугов",
    date: "28 сентября 2023",
    text: "Большой выбор красивых цветов, красиво всё завернут и упакуют.",
  },
  {
    author: "Татьяна Абрамчук",
    date: "15 сентября 2022",
    text: "Симпатичное место, и букеты с демократичными ценами.",
  },
  {
    author: "Инкогнито 6461",
    date: "7 июня 2024",
    text: "Прекрасный выбор свежих цветов.",
  },
];

export type GalleryItem = {
  src: string;
  alt: string;
  tall?: boolean;
};

export const gallery: GalleryItem[] = [
  { src: "photos/hero-storefront.jpg", alt: "Витрина магазина Эффект вечером" },
  { src: "photos/interior-fridge.jpg", alt: "Холодильник со свежими цветами" },
  { src: "photos/bouquet-roses.jpg", alt: "Букет розовых роз", tall: true },
  { src: "photos/balloon-round.jpg", alt: "Круглый букет из шаров" },
  { src: "photos/interior-wide.jpg", alt: "Торговый зал цветочного магазина" },
  { src: "photos/balloon-craft.jpg", alt: "Крафт-букет из шаров", tall: true },
  { src: "photos/interior-shop.jpg", alt: "Интерьер магазина Эффект" },
  { src: "photos/balloon-numbers.jpg", alt: "Цифры и фольгированные шары" },
  { src: "photos/interior-bloom.jpg", alt: "Букеты в витрине" },
  { src: "photos/composition-box.jpg", alt: "Цветочная композиция" },
  { src: "photos/balloon-foil.jpg", alt: "Фольгированные шары" },
  { src: "photos/flowers-pink.jpg", alt: "Розовые цветы", tall: true },
  { src: "photos/interior-counter.jpg", alt: "Прилавок магазина" },
  { src: "photos/balloon-mix.jpg", alt: "Букет из шаров с надписью", tall: true },
  { src: "photos/interior-pink.jpg", alt: "Ассортимент свежих цветов" },
  { src: "photos/storefront-day.jpg", alt: "Вывеска Эффект на улице Мира" },
];

export function telHref() {
  return `tel:${shop.phone}`;
}

export function shopOpenState(now = new Date()) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: shop.timezone,
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(now);
  const hour = Number(parts.find((part) => part.type === "hour")?.value ?? 0);
  const minute = Number(parts.find((part) => part.type === "minute")?.value ?? 0);
  const minutes = hour * 60 + minute;
  const open = shop.openHour * 60;
  const close = shop.closeHour * 60;
  return {
    isOpen: minutes >= open && minutes < close,
    nowMinutes: minutes,
  };
}
