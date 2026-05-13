"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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
  const sectionRef = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect() } },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex flex-col items-center gap-3 text-center md:mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-widest text-steelies-dark uppercase">{title}</h2>
          <p className="max-w-lg text-muted-foreground">{description}</p>
        </div>

        <div
          ref={sectionRef}
          className="flex gap-3 overflow-x-auto pb-2 sm:grid sm:grid-cols-3 sm:overflow-visible sm:pb-0 lg:grid-cols-5"
        >
          {items.map((item, i) => {
            const slideFrom = i < 2 ? '-100px' : '100px'
            return (
              <div
                key={item.id}
                className="shrink-0 w-[60vw] sm:w-auto"
                style={{
                  transitionDelay: inView ? `${i * 120}ms` : '0ms',
                  transition: 'opacity 0.6s ease, transform 0.6s ease',
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateX(0)' : `translateX(${slideFrom})`,
                }}
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
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export { Gallery4 };
