import { Gallery4, type Gallery4Item } from "@/components/blocks/gallery4";

const segmentItems: Gallery4Item[] = [
  {
    id: "verankeringen",
    title: "Verankeringen",
    description:
      "Heb je een doorsteekanker of slagplug nodig? Hier vind je alle lichte en zware verankeringen voor elke ondergrond.",
    href: "#segmenten",
    image: "/doos paars.png",
  },
  {
    id: "parkers",
    title: "Parkers & Gipsplaatschroeven",
    description:
      "Parkers, zelftappers en gipsplaatschroeven — zowel los als op band — voor hout-op-staal en stalen onderconstructies.",
    href: "#segmenten",
    image: "/doos blauw.png",
  },
  {
    id: "houtdraad",
    title: "Houtdraad",
    description:
      "Alles voor toepassingen in houten onderconstructies of in combinatie met een plug. Van spaanplaatschroef tot houtdraadbout.",
    href: "#segmenten",
    image: "/doos geel.png",
  },
  {
    id: "metrisch",
    title: "Metrisch Schroefdraad",
    description:
      "Alle producten volgens DIN met metrisch schroefdraad. De standaard voor staal-op-staal verbindingen.",
    href: "#segmenten",
    image: "/doos rood.png",
  },
  {
    id: "nagels",
    title: "Nagels & Klein Ijzerwaren",
    description:
      "Klein ijzerwaren en nagels voor dagelijks gebruik. Alles wat niet in de andere segmenten past maar onmisbaar is.",
    href: "#segmenten",
    image: "/oranje.png",
  },
];

export default function SegmentsSection() {
  return (
    <section id="segmenten" className="bg-white">
      <Gallery4
        title="Onze 5 Segmenten"
        description="Elk segment heeft een eigen kleurcode zodat u in de vakwinkel direct weet waar u moet zijn."
        items={segmentItems}
      />
    </section>
  );
}
