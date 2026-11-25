"use client";

import EntranceAnimation from "@/components/EntranceAnimation";
import HostedVideo from "@/components/elementor/HostedVideo";
import PopupShell from "./PopupShell";

/** Popup "Mixología capilar" (video). */
export default function PopupMixologia() {
  return (
    <PopupShell id="19750">
      <div className="elementor-element elementor-element-0dd96f3 e-flex e-con-boxed e-con e-parent" data-element_type="container">
        <div className="e-con-inner">
          <EntranceAnimation
            className="elementor-element elementor-element-b44fad9 elementor-widget elementor-widget-video"
            animationMobile="fadeIn"
            data-element_type="widget"
            data-widget_type="video.default"
          >
            <HostedVideo src="/video/mixologia-capilar.mp4" poster="/img/MIXOLOGIA-CAPILAR.png" />
          </EntranceAnimation>
        </div>
      </div>
    </PopupShell>
  );
}
