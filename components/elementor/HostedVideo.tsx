type Props = {
  src: string;
  poster: string;
  loop?: boolean;
};

/** Video alojado (widget "video" de Elementor). */
export default function HostedVideo({ src, poster, loop }: Props) {
  return (
    <div className="e-hosted-video elementor-wrapper elementor-open-inline">
      <video
        className="elementor-video"
        src={src}
        loop={loop}
        controls
        preload="metadata"
        controlsList="nodownload"
        poster={poster}
      />
    </div>
  );
}
