import React, { useRef, useEffect } from "react";
import drivers from "../assets/drivers.avif";
import airApp from "../assets/air-app.avif";
import wallpapers from "../assets/roccat-wall.avif";
import DownloadDropdownCard from "../components/DownloadDropdownCard";

const DownloadsDropdown = () => {
  const downloadsDropdownRef = useRef(null);

  useEffect(() => {
    function calculateOffset() {
      if (window.scrollX === 0 && window.scrollY === 0) {
        downloadsDropdownRef.current.style.top = "8.4375rem";
      } else {
        downloadsDropdownRef.current.style.top = "5.3125rem";
      }
    }

    calculateOffset();
    window.addEventListener("scroll", calculateOffset);
  });

  return (
    <section
      ref={downloadsDropdownRef}
      className="animate__animated animate__fadeIn fixed bg-white left-0 right-0 h-[15.625rem] flex items-center justify-center max-lg:hidden"
    >
      <div className="flex gap-[1.875rem]">
        <DownloadDropdownCard image={drivers} title="Driver Software" />
        <DownloadDropdownCard image={airApp} title="Syn Buds Air App" />
        <DownloadDropdownCard image={wallpapers} title="Wallpapers" />
      </div>
    </section>
  );
};

export default DownloadsDropdown;
