"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Gallery4, type Gallery4Item } from "@/components/blocks/gallery4";

interface Segment {
  id: string;
  title: string;
  colorLabel: string;
  description: string;
  products: string[];
  image: string;
  headerBg: string;
  dotColor: string;
}

const segments: Segment[] = [
  {
    id: "verankeringen",
    title: "Verankeringen",
    colorLabel: "PAARS",
    description:
      "Heb je een doorsteekanker of slagplug nodig? Hier vind je alle lichte en zware verankeringen voor elke ondergrond.",
    products: [
      "Nylon pluggen",
      "Slagpluggen & spanhulzen",
      "Messing spreidpluggen",
      "Plafondverankeringen",
      "Betonkozijnschroeven",
    ],
    image: "/doos paars.png",
    headerBg: "bg-purple-700",
    dotColor: "bg-purple-700",
  },
  {
    id: "parkers",
    title: "Parkers & Gipsplaatschroeven",
    colorLabel: "BLAUW",
    description:
      "Parkers, zelftappers en gipsplaatschroeven — zowel los als op band — voor hout-op-staal en stalen onderconstructies.",
    products: [
      "Zelftappers & parkers",
      "Zelfborende plaatschroeven",
      "Vleugelteksschroeven",
      "Dak- & gevelschroeven (BZ)",
      "Gipsplaatschroeven op band",
    ],
    image: "/doos blauw.png",
    headerBg: "bg-blue-600",
    dotColor: "bg-blue-600",
  },
  {
    id: "houtdraad",
    title: "Houtdraad",
    colorLabel: "GEEL",
    description:
      "Alles voor toepassingen in houten onderconstructies of in combinatie met een plug. Van spaanplaatschroef tot houtdraadbout.",
    products: [
      "Spaanplaatschroeven",
      "Houtdraadbouten",
      "Inbusbouten houtdraad",
      "Zelftappende houtschroeven",
      "Kozijnschroeven hout",
    ],
    image: "/doos geel.png",
    headerBg: "bg-amber-500",
    dotColor: "bg-amber-500",
  },
  {
    id: "metrisch",
    title: "Metrisch Schroefdraad",
    colorLabel: "ROOD",
    description:
      "Alle producten volgens DIN met metrisch schroefdraad. De standaard voor staal-op-staal verbindingen.",
    products: [
      "Bouten (DIN-norm)",
      "Moeren & sluitringen",
      "Metaalschroeven",
      "Inbusbouten metrisch",
      "Borgmoeren & veerringen",
    ],
    image: "/doos rood.png",
    headerBg: "bg-red-600",
    dotColor: "bg-red-600",
  },
  {
    id: "nagels",
    title: "Nagels & Klein Ijzerwaren",
    colorLabel: "ORANJE",
    description:
      "Klein ijzerwaren en nagels voor dagelijks gebruik. Alles wat niet in de andere segmenten past maar onmisbaar is.",
    products: [
      "Nagels (diverse soorten)",
      "Schroefogen & schroefduimen",
      "S-haken",
      "Muurhaken",
      "Beugels & klemmen",
    ],
    image: "/oranje.png",
    headerBg: "bg-orange-500",
    dotColor: "bg-orange-500",
  },
];

const galleryItems: Gallery4Item[] = segments.map((s) => ({
  id: s.id,
  title: s.title,
  description: s.description,
  href: "#",
  image: s.image,
}));

export default function SegmentsSection() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = segments.find((s) => s.id === activeId) ?? null;

  return (
    <section id="segmenten" className="bg-white">
      <Gallery4
        title="Onze 5 Segmenten"
        description="Elk segment heeft een eigen kleurcode zodat u in de vakwinkel direct weet waar u moet zijn."
        items={galleryItems}
        onItemClick={setActiveId}
      />

      {/* Modal overlay */}
      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
          onClick={() => setActiveId(null)}
        >
          <div
            className="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Colored header */}
            <div className={`${active.headerBg} px-6 py-5`}>
              <div className="flex items-start justify-between">
                <div>
                  <span className="mb-1 inline-block rounded bg-white/20 px-2 py-0.5 text-xs font-bold uppercase tracking-widest text-white">
                    {active.colorLabel}
                  </span>
                  <h3 className="text-xl font-black uppercase tracking-wide text-white">
                    {active.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveId(null)}
                  className="ml-4 rounded-full p-1 text-white/80 transition-colors hover:bg-white/20 hover:text-white"
                  aria-label="Sluiten"
                >
                  <X className="size-5" />
                </button>
              </div>
              <p className="mt-2 text-sm text-white/80">{active.description}</p>
            </div>

            {/* Product list */}
            <div className="px-6 py-5">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-400">
                Producten in dit segment
              </p>
              <ul className="space-y-2">
                {active.products.map((product) => (
                  <li key={product} className="flex items-center gap-3 text-gray-700">
                    <span className={`size-2 shrink-0 rounded-full ${active.dotColor}`} />
                    {product}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
