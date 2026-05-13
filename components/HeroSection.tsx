"use client";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";

const popIn = {
  hidden: { scale: 0.3, opacity: 0 },
  show:   { scale: 1,   opacity: 1 },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
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

        {/* Divider */}
        <motion.div
          className="h-1 w-24 bg-steelies-blue rounded-full"
          variants={popIn}
          initial="hidden"
          animate="show"
          transition={spring(0.38)}
        />

        {/* Tagline — inschuiven van onder */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-black tracking-widest text-steelies-dark uppercase"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.42, duration: 0.55, ease: "easeOut" }}
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

      </div>
    </AuroraBackground>
  );
}
