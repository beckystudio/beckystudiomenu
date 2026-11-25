"use client";

import PopupShell from "./PopupShell";
import EntranceAnimation from "@/components/EntranceAnimation";

/** Popup 20017 de Elementor (contenido copiado tal cual, generado). */
export default function Popup20017() {
  return (
    <PopupShell id="20017">
      <div
        className="elementor-element elementor-element-738a45cf e-flex e-con-boxed e-con e-parent"
        data-element_type="container"
      >
        <div className="e-con-inner">
          <EntranceAnimation
            animation=""
            animationMobile="fadeIn"
            className="elementor-element elementor-element-110749f7 elementor-widget elementor-widget-video"
            data-element_type="widget"
            data-widget_type="video.default"
          >
            <div className="e-hosted-video elementor-wrapper elementor-open-inline">
              <video
                className="elementor-video"
                src="/video/1025.mp4"
                controls
                preload="metadata"
                controlsList="nodownload"
                poster="/img/envato-labs-image-edit-59-1.png"
              />
            </div>
          </EntranceAnimation>
        </div>
      </div>
    </PopupShell>
  );
}
