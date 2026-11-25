"use client";

import { useEffect, useRef, useState } from "react";

/** Proporción que Elementor supone para los videos de fondo mientras no se conoce la real. */
const DEFAULT_RATIO = 16 / 9;

/**
 * Video de fondo hospedado (Elementor "background video" con un .mp4 propio).
 * Elementor lo inserta por JS y lo dimensiona para cubrir el contenedor suponiendo 16:9; aquí se
 * usa la proporción real del video en cuanto se conoce (los de /m/ son verticales, 1080×1350),
 * para no ampliarlo de más y que no se recorte su contenido.
 */
export default function HostedBackgroundVideo({ src }: { src: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [ratio, setRatio] = useState(DEFAULT_RATIO);
  const [size, setSize] = useState<{ width: number; height: number } | null>(null);

  useEffect(() => {
    const box = ref.current?.parentElement;
    if (!box) return;
    const cover = () => {
      const { offsetWidth: w, offsetHeight: h } = box;
      // "cover": el lado que falte se completa manteniendo la proporción del video.
      setSize(w / h > ratio ? { width: w, height: w / ratio } : { width: h * ratio, height: h });
    };
    cover();
    const observer = new ResizeObserver(cover);
    observer.observe(box);
    return () => observer.disconnect();
  }, [ratio]);

  return (
    <div ref={ref} className="elementor-background-video-container">
      {size && (
        <video
          className="elementor-background-video-hosted lazyloaded"
          role="presentation"
          autoPlay
          muted
          playsInline
          loop
          src={src}
          style={{ width: size.width, height: size.height }}
          onLoadedMetadata={(event) => {
            const { videoWidth, videoHeight } = event.currentTarget;
            if (videoWidth && videoHeight) setRatio(videoWidth / videoHeight);
          }}
        />
      )}
    </div>
  );
}
