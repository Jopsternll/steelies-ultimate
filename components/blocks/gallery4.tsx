"use client";

import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export interface Gallery4Item {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
}

export interface Gallery4Props {
  title?: string;
  description?: string;
  items: Gallery4Item[];
}

const Gallery4 = ({
  title = "Case Studies",
  description = "Discover how leading companies and developers are leveraging modern web technologies to build exceptional digital experiences.",
  items,
}: Gallery4Props) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex flex-col gap-3 md:mb-12">
          <h2 className="text-3xl font-medium md:text-4xl">{title}</h2>
          <p className="max-w-lg text-muted-foreground">{description}</p>
        </div>

        <Carousel
          opts={{
            align: "start",
            breakpoints: {
              "(max-width: 640px)": { dragFree: true },
            },
          }}
        >
          <CarouselContent className="-ml-3">
            {items.map((item) => (
              <CarouselItem
                key={item.id}
                className="basis-1/2 pl-3 sm:basis-1/3 lg:basis-1/5"
              >
                <a href={item.href} className="group block rounded-xl">
                  <div className="relative aspect-square w-full overflow-hidden rounded-xl">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover object-center transition-all duration-300 group-hover:scale-105 group-hover:grayscale group-hover:brightness-125 group-hover:blur-[2px]"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--primary)/0),hsl(var(--primary)/0.5),hsl(var(--primary)/0.85)_100%)] mix-blend-multiply transition-opacity duration-300 group-hover:opacity-50" />
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-3 text-white md:p-4 transition-transform duration-300 group-hover:-translate-y-3">
                      <div className="mb-1 text-sm font-extrabold leading-tight tracking-wide drop-shadow-md md:text-base">
                        {item.title}
                      </div>
                      <div className="text-xs line-clamp-2 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-90">
                        {item.description}
                      </div>
                    </div>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export { Gallery4 };
