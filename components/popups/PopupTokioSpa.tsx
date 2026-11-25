"use client";

import EntranceAnimation from "@/components/EntranceAnimation";
import HostedVideo from "@/components/elementor/HostedVideo";
import PopupShell from "./PopupShell";

const ENTRANCE = { desktop: "zoomIn", mobile: "bounceIn", duration: "1.2s" };

/** Popup "Tokio Spa" (video). */
export default function PopupTokioSpa() {
  return (
    <PopupShell id="19739" entrance={ENTRANCE}>
      <EntranceAnimation
        className="elementor-element elementor-element-c37d4df e-flex e-con-boxed e-con e-parent"
        animationMobile="fadeIn"
        data-element_type="container"
      >
        <div className="e-con-inner">
          <EntranceAnimation
            className="elementor-element elementor-element-cded644 elementor-widget elementor-widget-video"
            animationMobile="fadeIn"
            data-element_type="widget"
            data-widget_type="video.default"
          >
            <HostedVideo src="/video/6ujxderhh.mp4" poster="/img/HBNJM.jpg" />
          </EntranceAnimation>
        </div>
      </EntranceAnimation>
    </PopupShell>
  );
}
