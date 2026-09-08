import { createFileRoute } from "@tanstack/react-router";
import { MobileCta } from "@/components/mobile-cta";
import { SiteCatalog } from "@/components/site-catalog";
import { SiteContacts } from "@/components/site-contacts";
import { SiteFooter } from "@/components/site-footer";
import { SiteGallery } from "@/components/site-gallery";
import { SiteHeader } from "@/components/site-header";
import { SiteHero } from "@/components/site-hero";
import { SiteHighlights } from "@/components/site-highlights";
import { SiteReviews } from "@/components/site-reviews";
import { shop } from "@/data/shop";

export const Route = createFileRoute("/")({ component: Home });

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
      addressCountry: "RU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: shop.lat,
      longitude: shop.lon,
    },
    url: shop.yandexUrl,
    openingHours: "Mo-Su 10:00-20:00",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: shop.rating,
      ratingCount: shop.ratingCount,
      reviewCount: shop.reviewCount,
    },
  };

  return (
    <div id="top" className="min-h-svh bg-bg pb-24 text-fg sm:pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main>
        <SiteHero />
        <SiteHighlights />
        <SiteCatalog />
        <SiteGallery />
        <SiteReviews />
        <SiteContacts />
      </main>
      <SiteFooter />
      <MobileCta />
    </div>
  );
}
