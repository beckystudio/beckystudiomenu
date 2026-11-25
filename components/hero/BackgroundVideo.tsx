"use client";

import { useEffect, useRef, useState } from "react";

const RATIO = 16 / 9;

/**
 * Video de fondo de YouTube del hero (Elementor "background video").
 * Se monta sólo en el cliente y se dimensiona para cubrir el contenedor, como en el original.
 */
export default function BackgroundVideo({ youtubeId }: { youtubeId: string }) {
  const boxRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState<{ width: number; height: number } | null>(null);

  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;
    const cover = () => {
      const width = Math.max(box.offsetWidth, box.offsetHeight * RATIO);
      setSize({ width, height: width / RATIO });
    };
    cover();
    window.addEventListener("resize", cover);
    return () => window.removeEventListener("resize", cover);
  }, []);

  const src =
    `https://www.youtube-nocookie.com/embed/${youtubeId}` +
    `?autoplay=1&mute=1&controls=0&rel=0&playsinline=1&loop=1&playlist=${youtubeId}&cc_load_policy=0`;

  return (
    <div ref={boxRef} className="elementor-background-video-container">
      {size ? (
        <iframe
          className="elementor-background-video-embed"
          title="Video de fondo"
          allow="autoplay; encrypted-media"
          referrerPolicy="strict-origin-when-cross-origin"
          src={src}
          style={{ width: size.width, height: size.height }}
        />
      ) : (
        <div className="elementor-background-video-embed" role="presentation" />
      )}
    </div>
  );
}
