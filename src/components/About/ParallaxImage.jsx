"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function ParallaxImage() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setOffsetY(window.scrollY * 0.18);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="group relative h-[420px] overflow-hidden rounded-3xl shadow-xl">
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-neutral-200 to-neutral-300 blur-2xl opacity-70 transition duration-500 group-hover:opacity-100 dark:from-neutral-800 dark:to-neutral-700" />

      <div className="relative h-full w-full overflow-hidden rounded-3xl">
        <div
          className="absolute inset-0 scale-110 transition-transform duration-300"
          style={{
            transform: `translateY(${offsetY}px) scale(1.08)`,
          }}
        >
          <Image src="/parallax.jpg" alt="Juli Cortes" fill priority className="object-cover" />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/10" />
      </div>
    </div>
  );
}
