"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function HeroSection() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        className="relative z-10 flex flex-col items-center justify-center gap-6 px-6 text-center max-w-4xl mx-auto"
      >
        {/* Logo */}
        <div className="relative w-72 h-28 sm:w-96 sm:h-36">
          <Image
            src="/Steelies_logo_pantone.png"
            alt="Steelies Ultimate"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Blue divider */}
        <div className="h-1 w-24 bg-steelies-blue rounded-full" />

        {/* Tagline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-widest text-steelies-dark uppercase">
          STERK IN <span className="text-steelies-blue">VERBINDEN</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-500 max-w-2xl leading-relaxed">
          Het complete bevestigingsmiddelen assortiment voor de professionele
          vakhandel. Vijf duidelijke segmenten — alles wat u nodig heeft op één plek.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
          <a
            href="#segmenten"
            className="px-8 py-3 bg-steelies-blue text-white font-semibold rounded-lg hover:bg-steelies-navy transition-colors duration-200"
          >
            Bekijk segmenten
          </a>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
