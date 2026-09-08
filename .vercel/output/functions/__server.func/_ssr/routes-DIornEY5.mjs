import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Send, c as Menu, d as Clock, f as CircleParking, i as Star, l as MapPin, m as ChevronLeft, n as Truck, o as Search, p as ChevronRight, s as Phone, t as X, u as CreditCard } from "../_libs/lucide-react.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DIornEY5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var shop = {
	name: "Эффект",
	tagline: "Цветы и шары в Тольятти",
	description: "Цветочный магазин и магазин подарков на улице Мира. Свежие букеты, композиции, воздушные шары и оформление праздников.",
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
	yandexWidget: "https://yandex.ru/map-widget/v1/?ll=49.435465%2C53.509865&z=17&pt=49.435465,53.509865,pm2rdm&l=map",
	rating: 4.5,
	ratingCount: 118,
	reviewCount: 26,
	award: "Хорошее место 2026",
	categories: ["Цветочный магазин", "Магазин подарков и сувениров"],
	pricesUpdated: "16 июня",
	pricesSource: "карточка организации на Яндекс Картах",
	logo: "/photos/logo.jpg"
};
var features = [
	{
		id: "delivery",
		label: "Доставка"
	},
	{
		id: "pickup",
		label: "Самовывоз"
	},
	{
		id: "card",
		label: "Оплата картой"
	},
	{
		id: "cash",
		label: "Наличные"
	},
	{
		id: "prepay",
		label: "Предоплата"
	},
	{
		id: "cards",
		label: "Открытки"
	},
	{
		id: "sweets",
		label: "Сладкие подарки"
	},
	{
		id: "newyear",
		label: "Новогодние подарки"
	},
	{
		id: "parking",
		label: "Парковка"
	},
	{
		id: "disabled-parking",
		label: "Парковка для людей с инвалидностью"
	}
];
var categoryLabels = {
	all: "Все",
	bouquets: "Букеты",
	balloons: "Шары",
	compositions: "Композиции",
	events: "Праздник"
};
var products = [
	{
		id: "nenozhnost-1",
		name: "Нежность 1",
		price: 1800,
		description: "Розы пионовидные 3 шт, диантусы 5 шт, гвоздика кустовая 1 шт, гипсофила 1 шт. Упаковка — плёнка.",
		category: "bouquets",
		image: "/photos/bouquet-roses.jpg"
	},
	{
		id: "nenozhnost-2",
		name: "Нежность роз",
		price: 1650,
		description: "Пионовидная роза 3 шт, диантус 2 шт, гвоздика кустовая 1 шт, гипсофила 1 шт, зелень 0,5 ветки. Упаковка — плёнка с тесьмой.",
		category: "bouquets",
		image: "/photos/flowers-pink.jpg"
	},
	{
		id: "gypsophila",
		name: "Букет из гипсофилы",
		price: 1600,
		description: "Гипсофила — долгостойкий цветок, переходящий в сухоцвет. 5 веток, ковыль 2 шт, бабочка 1 шт.",
		category: "bouquets",
		image: "/photos/flowers-white.jpg"
	},
	{
		id: "peonies",
		name: "Пионы",
		price: 2150,
		description: "Пионы 7 штук, веточка гипсофилы, нежная упаковка.",
		category: "bouquets",
		image: "/photos/interior-roses.jpg"
	},
	{
		id: "lilies",
		name: "Лилии",
		price: 900,
		description: "Веточка лилии и гипсофилы в светлой упаковке.",
		category: "bouquets",
		image: "/photos/flowers-yellow.jpg"
	},
	{
		id: "summer",
		name: "Летнее настроение",
		price: 1600,
		description: "Сумочка среднего размера, хризантема кеннеди 3 ветки, танацетум 2 ветки, зелень.",
		category: "bouquets",
		image: "/photos/interior-bloom.jpg"
	},
	{
		id: "ny-bouquet",
		name: "Букет в преддверии Нового года",
		price: 3200,
		description: "Букет из нобилиса, роз, декора хлопком и шишками в новогодней тематике.",
		category: "bouquets",
		image: "/photos/interior-green.jpg"
	},
	{
		id: "round-balloon",
		name: "Букет круглый",
		price: 2800,
		description: "Окружность около 1 м, высота 80 см–1 м. Живая и сухоцветная гипсофила, латексные шары разного дизайна, хром-шары. Надпись может быть любой.",
		category: "balloons",
		image: "/photos/balloon-round.jpg"
	},
	{
		id: "kraft-max",
		name: "Крафт-букет макси",
		price: 3e3,
		description: "Высота 130 см. Изготовление с индивидуальной надписью. Шары можно заменить на любые.",
		category: "balloons",
		image: "/photos/balloon-gold.jpg"
	},
	{
		id: "kraft",
		name: "Крафт-букеты из шаров",
		price: 750,
		priceTo: 1150,
		priceNote: "от 3 шаров — 750 ₽, 5 шаров — 1 150 ₽",
		description: "Крафт-букеты из воздушных шаров. Долго держат форму и напоминают о празднике.",
		category: "balloons",
		image: "/photos/balloon-craft.jpg"
	},
	{
		id: "latex",
		name: "Шар латекс однотонный",
		price: 150,
		description: "В стоимость входит шар, обработка, гелий и лента.",
		category: "balloons",
		image: "/photos/balloon-white.jpg"
	},
	{
		id: "chrome",
		name: "Хром-шары",
		price: 170,
		description: "Металлизированные шары: золото, серебро, тиффани, розовое золото, шампань.",
		category: "balloons",
		image: "/photos/balloon-mix.jpg"
	},
	{
		id: "confetti",
		name: "Шар с конфетти",
		price: 190,
		description: "Шары с наполнением конфетти. Цвета: золото, серебро, розовое золото, тиффани, фуксия, фиолетовый, голубой, розовый и другие.",
		category: "balloons",
		image: "/photos/balloon-stars.jpg"
	},
	{
		id: "numbers",
		name: "Цифры 66 см",
		price: 650,
		description: "Цифра 66 см, гелий и лента, декор. Цвета: золото, серебро, фуксия, синие, зелёные, чёрные.",
		category: "balloons",
		image: "/photos/balloon-numbers.jpg"
	},
	{
		id: "bubbles",
		name: "Баблс с наполнением",
		price: 850,
		priceTo: 1100,
		priceNote: "50 см — 850 ₽, 65 см — 1 100 ₽",
		description: "Прозрачный шар-баблс. Можно наполнить конфетти, пенопластом, перьями, шарами или фатином.",
		category: "balloons",
		image: "/photos/balloon-hearts.jpg"
	},
	{
		id: "foil",
		name: "Фольга с декором",
		price: 350,
		description: "Фольга 45 см однотонная: сердца, круги, звёзды. Можно украсить бантиками, горошком, бабочками.",
		category: "balloons",
		image: "/photos/balloon-foil.jpg"
	},
	{
		id: "chamomile-foil",
		name: "Ромашка",
		price: 90,
		description: "Ромашка диаметром 15–17 см, разные цвета. Бант — отдельно 90 ₽.",
		category: "balloons",
		image: "/photos/flower-single.jpg"
	},
	{
		id: "rose-foil",
		name: "Роза из шара",
		price: 120,
		description: "Роза диаметром 20–22 см, разные цвета. Бант — 90 ₽.",
		category: "balloons",
		image: "/photos/bouquet-balloons.jpg"
	},
	{
		id: "soap-bubbles",
		name: "Мыльная композиция с баблс",
		price: 1950,
		description: "Композиция в шляпной коробке с мыльными розами люкс, хлопком, декоративными веточками и бабочкой. Шар-баблс с перьями и индивидуальной надписью.",
		category: "compositions",
		image: "/photos/composition-box.jpg"
	},
	{
		id: "nobilis",
		name: "Свежий нобилис",
		price: 930,
		description: "Зимние композиции, букеты и штучные ветки нобилиса для праздника.",
		category: "compositions",
		image: "/photos/interior-shelf.jpg"
	},
	{
		id: "kindergarten",
		name: "Оформление выпускного в детском саду",
		price: 15e3,
		description: "Оформление мероприятий.",
		category: "events",
		image: "/photos/balloon-blue.jpg"
	}
];
var reviews = [
	{
		author: "sekerin03",
		date: "20 августа",
		text: "Отличное место, все упаковали быстро и качественно, персонал приветливый, много цветов и приемлемые цены."
	},
	{
		author: "Диана",
		date: "6 марта 2024",
		text: "Мой любимый магазин цветов. Не первый год мои родные получают самые красивые, свежие, а порой и очень экзотические цветы на праздничные дни. Спасибо большое грамотным флористам."
	},
	{
		author: "Анна Чернова",
		date: "15 июля 2023",
		text: "Цветок свежий, красивый. Работают отличные флористы, составят вам роскошный букет или композицию, если вы ограничены во времени — есть уже готовые букеты."
	},
	{
		author: "Аделя",
		date: "12 сентября 2023",
		text: "Давно не встречала таких вежливых и добрых сотрудников. Девушка очень меня выручила, оперативно помогла к подарку приобрести шампанское, всё отправила, сориентировала. Делала заказ дистанционно, так как проживаю в Москве. Очень удобно, без лишних разговоров, по делу. Букет очень красивый."
	},
	{
		author: "Наталья",
		date: "31 июля 2025",
		text: "Сегодня обратилась за помощью в этот магазин. Очень довольна тем, что мне помогли сделать выбор. Спасибо огромное продавцу."
	},
	{
		author: "Сергей Жемчугов",
		date: "28 сентября 2023",
		text: "Большой выбор красивых цветов, красиво всё завернут и упакуют."
	},
	{
		author: "Татьяна Абрамчук",
		date: "15 сентября 2022",
		text: "Симпатичное место, и букеты с демократичными ценами."
	},
	{
		author: "Инкогнито 6461",
		date: "7 июня 2024",
		text: "Прекрасный выбор свежих цветов."
	}
];
var gallery = [
	{
		src: "/photos/hero-storefront.jpg",
		alt: "Витрина магазина Эффект вечером"
	},
	{
		src: "/photos/interior-fridge.jpg",
		alt: "Холодильник со свежими цветами"
	},
	{
		src: "/photos/bouquet-roses.jpg",
		alt: "Букет розовых роз",
		tall: true
	},
	{
		src: "/photos/balloon-round.jpg",
		alt: "Круглый букет из шаров"
	},
	{
		src: "/photos/interior-wide.jpg",
		alt: "Торговый зал цветочного магазина"
	},
	{
		src: "/photos/balloon-craft.jpg",
		alt: "Крафт-букет из шаров",
		tall: true
	},
	{
		src: "/photos/interior-shop.jpg",
		alt: "Интерьер магазина Эффект"
	},
	{
		src: "/photos/balloon-numbers.jpg",
		alt: "Цифры и фольгированные шары"
	},
	{
		src: "/photos/interior-bloom.jpg",
		alt: "Букеты в витрине"
	},
	{
		src: "/photos/composition-box.jpg",
		alt: "Цветочная композиция"
	},
	{
		src: "/photos/balloon-foil.jpg",
		alt: "Фольгированные шары"
	},
	{
		src: "/photos/flowers-pink.jpg",
		alt: "Розовые цветы",
		tall: true
	},
	{
		src: "/photos/interior-counter.jpg",
		alt: "Прилавок магазина"
	},
	{
		src: "/photos/balloon-mix.jpg",
		alt: "Букет из шаров с надписью",
		tall: true
	},
	{
		src: "/photos/interior-pink.jpg",
		alt: "Ассортимент свежих цветов"
	},
	{
		src: "/photos/storefront-day.jpg",
		alt: "Вывеска Эффект на улице Мира"
	}
];
function telHref() {
	return `tel:${shop.phone}`;
}
function shopOpenState(now = /* @__PURE__ */ new Date()) {
	const parts = new Intl.DateTimeFormat("en-GB", {
		timeZone: shop.timezone,
		hour: "2-digit",
		minute: "2-digit",
		hourCycle: "h23"
	}).formatToParts(now);
	const hour = Number(parts.find((part) => part.type === "hour")?.value ?? 0);
	const minute = Number(parts.find((part) => part.type === "minute")?.value ?? 0);
	const minutes = hour * 60 + minute;
	const open = shop.openHour * 60;
	const close = shop.closeHour * 60;
	return {
		isOpen: minutes >= open && minutes < close,
		nowMinutes: minutes
	};
}
function MobileCta() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-x-0 bottom-0 z-40 border-t border-line bg-bg/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md sm:hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-2 gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: telHref(),
				className: "inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-accent text-sm font-medium text-accent-fg active:scale-[0.96]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }), "Позвонить"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: shop.telegram,
				target: "_blank",
				rel: "noreferrer",
				className: "inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-night text-sm font-medium text-accent-fg active:scale-[0.96]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-4" }), "Telegram"]
			})]
		})
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function formatPrice(value) {
	return `${value.toLocaleString("ru-RU")}\u00a0₽`;
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-[transform,background-color,color,opacity] duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-50 active:not-disabled:scale-[0.96] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			primary: "bg-accent text-accent-fg hover:bg-accent-deep",
			night: "bg-night text-accent-fg hover:bg-night-soft",
			outline: "bg-transparent text-fg shadow-[inset_0_0_0_1px_var(--color-line)] hover:bg-bg-elevated",
			ghost: "bg-transparent text-fg hover:bg-bg-elevated",
			cream: "bg-bg-elevated text-fg hover:bg-surface"
		},
		size: {
			sm: "h-10 rounded-md px-3.5 text-sm",
			md: "h-11 rounded-lg px-4 text-sm",
			lg: "h-12 rounded-xl px-5 text-base",
			xl: "h-14 rounded-xl px-6 text-base"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
var filters = [
	"all",
	"bouquets",
	"balloons",
	"compositions",
	"events"
];
function priceLabel(product) {
	if (product.priceTo) return `от ${formatPrice(product.price)}`;
	return formatPrice(product.price);
}
function SiteCatalog() {
	const [filter, setFilter] = (0, import_react.useState)("all");
	const [query, setQuery] = (0, import_react.useState)("");
	const [openId, setOpenId] = (0, import_react.useState)(null);
	const visible = (0, import_react.useMemo)(() => {
		const q = query.trim().toLowerCase();
		return products.filter((item) => {
			const byCat = filter === "all" || item.category === filter;
			const byQuery = !q || item.name.toLowerCase().includes(q) || item.description.toLowerCase().includes(q);
			return byCat && byQuery;
		});
	}, [filter, query]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "catalog",
		className: "scroll-mt-24 px-4 py-16 sm:px-6 sm:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.2em] text-muted",
					children: "Прайс"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "max-w-xl font-display text-4xl font-medium tracking-tight sm:text-5xl",
						children: "Цены на букеты и шары"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "max-w-md text-sm leading-relaxed text-muted",
						children: [
							"Цены указаны из карточки магазина на Яндекс Картах. Обновлены представителем организации ",
							shop.pricesUpdated,
							". Наличие и состав лучше уточнить по телефону."
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-2 overflow-x-auto pb-1",
						children: filters.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setFilter(id),
							className: cn("h-10 shrink-0 rounded-full px-4 text-sm transition-colors duration-150", filter === id ? "bg-night text-accent-fg" : "bg-bg-elevated text-fg-soft hover:bg-surface"),
							children: categoryLabels[id]
						}, id))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "relative block w-full sm:max-w-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-subtle" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: query,
							onChange: (event) => setQuery(event.target.value),
							placeholder: "Найти букет или шар",
							className: "h-11 w-full rounded-xl border border-line bg-surface pl-10 pr-3 text-sm text-fg outline-none placeholder:text-subtle focus:border-accent"
						})]
					})]
				}),
				visible.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-12 text-muted",
					children: "Ничего не нашлось. Попробуйте другой запрос."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
					children: visible.map((product) => {
						const expanded = openId === product.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "flex flex-col overflow-hidden rounded-2xl bg-surface shadow-[var(--shadow-border)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "relative aspect-4/5 overflow-hidden text-left",
								onClick: () => setOpenId(expanded ? null : product.id),
								"aria-expanded": expanded,
								"aria-label": `Подробнее: ${product.name}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: product.image,
									alt: "",
									className: "size-full object-cover transition-transform duration-500 ease-out hover:scale-105"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute left-3 top-3 rounded-full bg-bg/92 px-3 py-1 text-xs text-fg-soft",
									children: categoryLabels[product.category]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-1 flex-col p-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start justify-between gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display text-2xl font-medium leading-tight tracking-tight",
											children: product.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "shrink-0 pt-1 text-sm font-medium text-accent",
											children: priceLabel(product)
										})]
									}),
									product.priceNote ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-muted",
										children: product.priceNote
									}) : null,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: cn("mt-3 text-sm leading-relaxed text-muted", !expanded && "line-clamp-3"),
										children: product.description
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-4 flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											asChild: true,
											size: "sm",
											className: "flex-1",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: telHref(),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {}), "Заказать"]
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											type: "button",
											size: "sm",
											variant: "outline",
											onClick: () => setOpenId(expanded ? null : product.id),
											children: expanded ? "Скрыть" : "Подробнее"
										})]
									})
								]
							})]
						}, product.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-8 text-xs leading-relaxed text-subtle",
					children: [
						"Источник цен: ",
						shop.pricesSource,
						", ",
						shop.pricesUpdated,
						". Это не интернет-магазин с онлайн-оплатой — заказ по телефону или в Telegram."
					]
				})
			]
		})
	});
}
var days = [
	"Понедельник",
	"Вторник",
	"Среда",
	"Четверг",
	"Пятница",
	"Суббота",
	"Воскресенье"
];
function SiteContacts() {
	const [isOpen, setIsOpen] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		setIsOpen(shopOpenState().isOpen);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contacts",
		className: "scroll-mt-24 bg-bg-elevated px-4 py-16 sm:px-6 sm:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.2em] text-muted",
					children: "Контакты"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-4xl font-medium tracking-tight sm:text-5xl",
					children: "Приходите или звоните"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 max-w-md text-sm leading-relaxed text-muted",
					children: [
						shop.city,
						", ",
						shop.district,
						". Рядом ",
						shop.landmark,
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: telHref(),
					className: "mt-8 block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-widest text-muted",
						children: "Телефон"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-display text-4xl tracking-tight text-fg",
						children: shop.phoneDisplay
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-8 space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 size-4 shrink-0 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-sm font-medium",
								children: "Адрес"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
								className: "mt-1 text-sm text-muted",
								children: [
									shop.city,
									", ",
									shop.address,
									", ",
									shop.postal
								]
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "mt-0.5 size-4 shrink-0 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dt", {
								className: "text-sm font-medium",
								children: ["Часы работы", isOpen === null ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: isOpen ? "text-accent" : "text-muted",
									children: [
										" ",
										"· ",
										isOpen ? "открыто" : "закрыто"
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-2 space-y-1 text-sm text-muted",
								children: days.map((day) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between gap-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: day }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "tabular-nums text-fg-soft",
										children: shop.hoursShort
									})]
								}, day))
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "mt-0.5 size-4 shrink-0 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-sm font-medium",
								children: "Доставка и самовывоз"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 text-sm text-muted",
								children: "Есть доставка и пункт выдачи. Условия уточняйте при заказе."
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "mt-0.5 size-4 shrink-0 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-sm font-medium",
								children: "Оплата"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 text-sm text-muted",
								children: "Картой, наличными и по предоплате."
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleParking, { className: "mt-0.5 size-4 shrink-0 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-sm font-medium",
								children: "Парковка"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 text-sm text-muted",
								children: "Есть парковка, в том числе для людей с инвалидностью. Вход не приспособлен для инвалидных колясок."
							})] })]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-col gap-3 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: telHref(),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {}), "Позвонить"]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						variant: "night",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: shop.telegram,
							target: "_blank",
							rel: "noreferrer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, {}), "Telegram"]
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 flex flex-wrap gap-2",
					children: features.map((feature) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "rounded-full bg-surface px-3 py-1.5 text-xs text-fg-soft shadow-[var(--shadow-border)]",
						children: feature.label
					}, feature.id))
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "overflow-hidden rounded-2xl border border-line bg-surface",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
					title: "Магазин Эффект на карте",
					src: shop.yandexWidget,
					className: "h-80 w-full border-0 lg:h-full lg:min-h-[36rem]",
					loading: "lazy"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-t border-line px-4 py-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: shop.yandexUrl,
						target: "_blank",
						rel: "noreferrer",
						className: "text-sm text-accent hover:text-accent-deep",
						children: "Открыть карточку на Яндекс Картах"
					})
				})]
			})]
		})
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-line bg-night px-4 py-10 text-accent-fg sm:px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-2xl tracking-tight",
				children: shop.name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 max-w-sm text-sm text-accent-fg/65",
				children: [
					shop.city,
					", ",
					shop.address,
					" · ",
					shop.hoursLabel
				]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-sm text-accent-fg/65",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"Данные магазина — с",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: shop.yandexUrl,
						className: "underline decoration-accent-fg/30 underline-offset-4 hover:text-accent-fg",
						target: "_blank",
						rel: "noreferrer",
						children: "Яндекс Карт"
					}),
					". Цены обновлены ",
					shop.pricesUpdated,
					"."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2",
					children: shop.award
				})]
			})]
		})
	});
}
function SiteGallery() {
	const [index, setIndex] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (index === null) return;
		const onKey = (event) => {
			if (event.key === "Escape") setIndex(null);
			if (event.key === "ArrowRight") setIndex((i) => i === null ? i : (i + 1) % gallery.length);
			if (event.key === "ArrowLeft") setIndex((i) => i === null ? i : (i - 1 + gallery.length) % gallery.length);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [index]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "gallery",
		className: "scroll-mt-24 bg-night px-4 py-16 text-accent-fg sm:px-6 sm:py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.2em] text-accent-fg/55",
					children: "Галерея"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-4xl font-medium tracking-tight sm:text-5xl",
					children: "Магазин в фотографиях"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-xl text-sm leading-relaxed text-accent-fg/65",
					children: "Снимки с карточки «Эффект» на Яндекс Картах: витрина, зал и готовые работы."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 columns-2 gap-3 sm:columns-3 sm:gap-4",
					children: gallery.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setIndex(i),
						className: "mb-3 block w-full overflow-hidden rounded-xl sm:mb-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: item.src,
							alt: item.alt,
							className: cn("w-full object-cover transition-transform duration-500 ease-out hover:scale-[1.03]", item.tall ? "aspect-[3/4]" : "aspect-[4/5] sm:aspect-[5/4]")
						})
					}, item.src))
				})
			]
		}), index !== null ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "fixed inset-0 z-50 flex items-center justify-center bg-night/92 p-4",
			onClick: () => setIndex(null),
			role: "dialog",
			"aria-modal": "true",
			"aria-label": "Просмотр фотографии",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "absolute right-4 top-4 inline-flex size-11 items-center justify-center rounded-full bg-bg/10 text-accent-fg",
					"aria-label": "Закрыть",
					onClick: () => setIndex(null),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "absolute left-3 inline-flex size-11 items-center justify-center rounded-full bg-bg/10 text-accent-fg",
					"aria-label": "Предыдущее фото",
					onClick: (event) => {
						event.stopPropagation();
						setIndex((i) => i === null ? 0 : (i - 1 + gallery.length) % gallery.length);
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: gallery[index].src,
					alt: gallery[index].alt,
					className: "max-h-[86svh] max-w-full rounded-xl object-contain",
					onClick: (event) => event.stopPropagation()
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "absolute right-3 inline-flex size-11 items-center justify-center rounded-full bg-bg/10 text-accent-fg",
					"aria-label": "Следующее фото",
					onClick: (event) => {
						event.stopPropagation();
						setIndex((i) => i === null ? 0 : (i + 1) % gallery.length);
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-5" })
				})
			]
		}) : null]
	});
}
var links = [
	{
		href: "#catalog",
		label: "Цены"
	},
	{
		href: "#gallery",
		label: "Фото"
	},
	{
		href: "#reviews",
		label: "Отзывы"
	},
	{
		href: "#contacts",
		label: "Контакты"
	}
];
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-line/80 bg-bg/90 backdrop-blur-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:h-18 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "flex min-w-0 items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: shop.logo,
						alt: "Логотип Эффект",
						className: "size-10 rounded-md object-cover sm:size-11"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block font-display text-xl leading-none tracking-tight text-fg sm:text-2xl",
							children: shop.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-0.5 block truncate text-xs uppercase tracking-widest text-muted",
							children: "Тольятти · Мира, 95А"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-7 lg:flex",
					children: links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: link.href,
						className: "text-sm text-fg-soft transition-colors duration-150 hover:text-fg",
						children: link.label
					}, link.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "sm",
							variant: "ghost",
							className: "hidden sm:inline-flex",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: shop.telegram,
								target: "_blank",
								rel: "noreferrer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, {}), "Telegram"]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "sm",
							className: "hidden sm:inline-flex",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: telHref(),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {}), shop.phoneDisplay]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "inline-flex size-11 items-center justify-center rounded-lg text-fg lg:hidden",
							"aria-label": open ? "Закрыть меню" : "Открыть меню",
							onClick: () => setOpen((value) => !value),
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("overflow-hidden border-t border-line bg-bg-elevated transition-[max-height,opacity] duration-200 ease-out lg:hidden", open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3",
				children: [links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: link.href,
					onClick: () => setOpen(false),
					className: "rounded-lg px-3 py-3 text-base text-fg",
					children: link.label
				}, link.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: telHref(),
					className: "rounded-lg px-3 py-3 text-base text-accent",
					children: ["Позвонить ", shop.phoneDisplay]
				})]
			})
		})]
	});
}
function SiteHero() {
	const [isOpen, setIsOpen] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		setIsOpen(shopOpenState().isOpen);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative min-h-[86svh] overflow-hidden bg-night text-accent-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/photos/hero-storefront.jpg",
				alt: "Витрина цветочного магазина Эффект на улице Мира",
				className: "absolute inset-0 size-full object-cover object-[center_78%]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-night via-night/35 to-night/10" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto flex min-h-[86svh] max-w-6xl flex-col justify-end px-4 pb-10 pt-28 sm:px-6 sm:pb-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.22em] text-accent-fg/80",
						children: "Цветочный магазин · Тольятти"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 max-w-xl font-display text-6xl font-medium leading-none tracking-tight sm:text-7xl",
						children: "Эффект"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-md text-base leading-relaxed text-accent-fg/88 sm:text-lg",
						children: "Свежие букеты, шары и подарки на улице Мира. Соберут композицию при вас или по звонку."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-accent-fg/85",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `size-2 rounded-full ${isOpen ? "bg-emerald-400" : "bg-subtle"}`,
									"aria-hidden": true
								}), isOpen === null ? shop.hoursShort : isOpen ? `Сейчас открыто · ${shop.hoursShort}` : `Сейчас закрыто · ${shop.hoursShort}`]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3.5" }), shop.address]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-3.5 fill-current" }),
									shop.rating,
									" · ",
									shop.ratingCount,
									" оценок на Яндекс Картах"
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex w-full max-w-lg flex-col gap-3 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "xl",
							className: "w-full sm:w-auto",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: telHref(),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {}), "Позвонить"]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "xl",
							variant: "cream",
							className: "w-full sm:w-auto",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: shop.telegram,
								target: "_blank",
								rel: "noreferrer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, {}), "Написать в Telegram"]
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 hidden items-center gap-6 text-sm text-accent-fg/70 sm:flex",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-4" }), shop.hoursLabel]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: shop.award })]
					})
				]
			})
		]
	});
}
var items = [
	{
		icon: Star,
		title: `${shop.rating} на Яндекс Картах`,
		text: `${shop.ratingCount} оценок · ${shop.award}`
	},
	{
		icon: Clock,
		title: shop.hoursLabel,
		text: "Без выходных, удобно заехать после работы"
	},
	{
		icon: Truck,
		title: "Доставка и самовывоз",
		text: "Заказ по телефону или в Telegram"
	},
	{
		icon: MapPin,
		title: `${shop.address}, ${shop.city}`,
		text: shop.landmark
	}
];
function SiteHighlights() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-b border-line bg-bg-elevated px-4 py-10 sm:px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-4",
			children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "mt-0.5 size-4 shrink-0 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-medium leading-snug text-fg",
					children: item.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm leading-relaxed text-muted",
					children: item.text
				})] })]
			}, item.title))
		})
	});
}
function SiteReviews() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "reviews",
		className: "scroll-mt-24 px-4 py-16 sm:px-6 sm:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.2em] text-muted",
					children: "Отзывы"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-4xl font-medium tracking-tight sm:text-5xl",
						children: "Что пишут гости"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted",
						children: [
							shop.rating,
							" из 5 · ",
							shop.ratingCount,
							" оценок · ",
							shop.reviewCount,
							" отзывов на Яндекс Картах"
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-4 md:grid-cols-2",
					children: reviews.map((review) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-2xl border border-line bg-bg-elevated p-5 sm:p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium text-fg",
								children: review.author
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-subtle",
								children: review.date
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-fg-soft",
							children: review.text
						})]
					}, `${review.author}-${review.date}`))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: shop.yandexUrl,
					target: "_blank",
					rel: "noreferrer",
					className: "mt-8 inline-block text-sm text-accent hover:text-accent-deep",
					children: "Все отзывы на Яндекс Картах"
				})
			]
		})
	});
}
function Home() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "Florist",
		name: shop.name,
		image: shop.logo,
		telephone: shop.phone,
		address: {
			"@type": "PostalAddress",
			streetAddress: shop.address,
			addressLocality: shop.city,
			addressRegion: shop.region,
			postalCode: shop.postal,
			addressCountry: "RU"
		},
		geo: {
			"@type": "GeoCoordinates",
			latitude: shop.lat,
			longitude: shop.lon
		},
		url: shop.yandexUrl,
		openingHours: "Mo-Su 10:00-20:00",
		aggregateRating: {
			"@type": "AggregateRating",
			ratingValue: shop.rating,
			ratingCount: shop.ratingCount,
			reviewCount: shop.reviewCount
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "top",
		className: "min-h-svh bg-bg pb-24 text-fg sm:pb-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
				type: "application/ld+json",
				dangerouslySetInnerHTML: { __html: JSON.stringify(jsonLd) }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHighlights, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteCatalog, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteGallery, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteReviews, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteContacts, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileCta, {})
		]
	});
}
//#endregion
export { Home as component };
