"use client";
import React, { useState, useEffect } from "react";
import { Anchor, Layers, TreePine, Settings2, Hammer } from "lucide-react";

interface Segment {
  label: string;
  colorName: string;
  title: string;
  subtitle: string;
  image: string;
  icon: React.ReactNode;
  accentColor: string;
  borderColor: string;
  badgeBg: string;
  gradientColor: string;
}

const segments: Segment[] = [
  {
    label: "PAARS",
    colorName: "paars",
    title: "VERANKERINGEN",
    subtitle: "Nylon pluggen, slagpluggen & meer",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    icon: <Anchor size={20} className="text-white" />,
    accentColor: "rgba(109,40,217,0.7)",
    borderColor: "#7c3aed",
    badgeBg: "#7c3aed",
    gradientColor: "rgba(109,40,217,0.7)",
  },
  {
    label: "BLAUW",
    colorName: "blauw",
    title: "PARKERS & GIPS",
    subtitle: "Zelftappers, plaatschroeven & meer",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
    icon: <Layers size={20} className="text-white" />,
    accentColor: "rgba(37,99,235,0.7)",
    borderColor: "#2563eb",
    badgeBg: "#2563eb",
    gradientColor: "rgba(37,99,235,0.7)",
  },
  {
    label: "GEEL",
    colorName: "geel",
    title: "HOUTDRAAD",
    subtitle: "Spaanplaatschroeven, houtbouten",
    image: "https://images.unsplash.com/photo-1468436385273-8abca6dfd8d3?auto=format&fit=crop&w=800&q=80",
    icon: <TreePine size={20} className="text-white" />,
    accentColor: "rgba(180,100,0,0.75)",
    borderColor: "#d97706",
    badgeBg: "#d97706",
    gradientColor: "rgba(180,100,0,0.75)",
  },
  {
    label: "ROOD",
    colorName: "rood",
    title: "METRISCH",
    subtitle: "Bouten, moeren & ringen (DIN)",
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=800&q=80",
    icon: <Settings2 size={20} className="text-white" />,
    accentColor: "rgba(185,28,28,0.75)",
    borderColor: "#dc2626",
    badgeBg: "#dc2626",
    gradientColor: "rgba(185,28,28,0.75)",
  },
  {
    label: "ORANJE",
    colorName: "oranje",
    title: "NAGELS & IJZERWAREN",
    subtitle: "Nagels, schroefogen & S-haken",
    image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=800&q=80",
    icon: <Hammer size={20} className="text-white" />,
    accentColor: "rgba(194,65,12,0.75)",
    borderColor: "#ea580c",
    badgeBg: "#ea580c",
    gradientColor: "rgba(194,65,12,0.75)",
  },
];

export default function InteractiveSelector() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animated, setAnimated] = useState<number[]>([]);

  useEffect(() => {
    const timers = segments.map((_, i) =>
      setTimeout(() => setAnimated((prev) => [...prev, i]), 180 * i)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="flex w-full h-[440px] overflow-hidden rounded-2xl" style={{ maxWidth: 960 }}>
      {segments.map((seg, i) => {
        const isActive = activeIndex === i;
        const isAnimated = animated.includes(i);
        return (
          <div
            key={i}
            onClick={() => setActiveIndex(i)}
            style={{
              flex: isActive ? "7 1 0%" : "1 1 0%",
              minWidth: 60,
              backgroundImage: `url('${seg.image}')`,
              backgroundSize: isActive ? "auto 100%" : "auto 120%",
              backgroundPosition: "center",
              backgroundColor: "#1a1a1a",
              border: `2px solid ${isActive ? "#fff" : "#2a2a2a"}`,
              boxShadow: isActive ? "0 20px 60px rgba(0,0,0,0.5)" : "none",
              position: "relative",
              overflow: "hidden",
              cursor: "pointer",
              opacity: isAnimated ? 1 : 0,
              transform: isAnimated ? "translateX(0)" : "translateX(-60px)",
              transition:
                "flex 0.7s ease-in-out, box-shadow 0.7s, background-size 0.7s, opacity 0.6s, transform 0.6s, border-color 0.3s",
              zIndex: isActive ? 10 : 1,
              willChange: "flex",
            }}
          >
            {/* Bottom gradient */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: `linear-gradient(to top, ${seg.gradientColor} 0%, transparent 55%)`,
                pointerEvents: "none",
              }}
            />

            {/* Shadow */}
            <div
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                height: 160,
                bottom: isActive ? 0 : -40,
                pointerEvents: "none",
                transition: "bottom 0.7s ease-in-out, box-shadow 0.7s",
                boxShadow: isActive
                  ? "inset 0 -160px 160px -120px #000, inset 0 -160px 160px -80px #000"
                  : "inset 0 -120px 0 -120px #000, inset 0 -120px 0 -80px #000",
              }}
            />

            {/* Color badge */}
            <div style={{ position: "absolute", top: 12, left: 12, zIndex: 2 }}>
              <span
                style={{
                  background: seg.badgeBg,
                  color: "white",
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  padding: "3px 8px",
                  borderRadius: 4,
                  textTransform: "uppercase",
                }}
              >
                {seg.label}
              </span>
            </div>

            {/* Label row */}
            <div
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 20,
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "0 16px",
                zIndex: 2,
              }}
            >
              <div
                style={{
                  minWidth: 44,
                  maxWidth: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: "rgba(20,20,20,0.85)",
                  border: `2px solid ${seg.borderColor}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {seg.icon}
              </div>
              <div>
                <div
                  style={{
                    color: "white",
                    fontWeight: 800,
                    fontSize: "1rem",
                    lineHeight: 1.2,
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? "translateX(0)" : "translateX(25px)",
                    transition: "opacity 0.7s, transform 0.7s",
                  }}
                >
                  {seg.title}
                </div>
                <div
                  style={{
                    color: "#d1d5db",
                    fontSize: "0.8rem",
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? "translateX(0)" : "translateX(25px)",
                    transition: "opacity 0.7s 0.05s, transform 0.7s 0.05s",
                  }}
                >
                  {seg.subtitle}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
