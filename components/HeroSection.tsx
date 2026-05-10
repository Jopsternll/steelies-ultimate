"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";

const popIn = {
  hidden: { scale: 0.3, opacity: 0 },
  show:   { scale: 1,   opacity: 1 },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0 },
};

const spring = (delay: number) => ({
  type: "spring" as const,
  damping: 11,
  stiffness: 260,
  mass: 0.8,
  delay,
});

export default function HeroSection() {
  return (
    <AuroraBackground>
      <div className="relative z-10 flex flex-col items-center justify-center gap-6 px-6 text-center max-w-4xl mx-auto">

        {/* Logo — verschijnt als eerste */}
        <motion.button
          variants={popIn}
          initial="hidden"
          animate="show"
          transition={spring(0.05)}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="relative w-72 h-28 sm:w-96 sm:h-36 cursor-pointer"
          aria-label="Naar bovenkant"
        >
          <Image
            src="/Steelies_logo_pantone.png"
            alt="Steelies Ultimate"
            fill
            className="object-contain"
            priority
          />
        </motion.button>

        {/* Divider */}
        <motion.div
          className="h-1 w-24 bg-steelies-blue rounded-full"
          variants={popIn}
          initial="hidden"
          animate="show"
          transition={spring(0.38)}
        />

        {/* Tagline — iets later, explosief */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-black tracking-widest text-steelies-dark uppercase"
          variants={popIn}
          initial="hidden"
          animate="show"
          transition={spring(0.42)}
        >
          STERK IN <span className="text-steelies-blue">VERBINDEN</span>
        </motion.h1>

        {/* Beschrijving — als laatste */}
        <motion.p
          className="text-lg sm:text-xl text-gray-500 max-w-2xl leading-relaxed"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.78, duration: 0.5, ease: "easeOut" }}
        >
          Het complete bevestigingsmiddelen assortiment voor de professionele
          vakhandel. Vijf duidelijke segmenten — alles wat u nodig heeft op één plek.
        </motion.p>

        {/* CTA */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center pt-2"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.95, duration: 0.45, ease: "easeOut" }}
        >
          <a
            href="#segmenten"
            className="px-8 py-3 bg-steelies-blue text-white font-semibold rounded-lg hover:bg-steelies-navy transition-colors duration-200"
          >
            Bekijk segmenten
          </a>
        </motion.div>
      </div>
    </AuroraBackground>
  );
}
