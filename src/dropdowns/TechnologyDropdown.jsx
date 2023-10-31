import React, { useRef, useEffect } from "react";
import aimo from "../assets/aimo.avif";
import switches from "../assets/switches.avif";
import wireless from "../assets/wireless.avif";
import TechDropdownCard from "../components/TechDropdownCard";

const TechnologyDropdown = () => {
  const technologyDropdownRef = useRef(null);

  useEffect(() => {
    function calculateOffset() {
      if (window.scrollX === 0 && window.scrollY === 0) {
        technologyDropdownRef.current.style.top = "8.4375rem";
      } else {
        technologyDropdownRef.current.style.top = "5.3125rem";
      }
    }

    calculateOffset();
    window.addEventListener("scroll", calculateOffset);
  });

  return (
    <section
      ref={technologyDropdownRef}
      className="animate__animated animate__fadeIn fixed bg-white left-0 right-0 h-[15.625rem] flex items-center justify-center max-lg:hidden"
    >
      <div className="flex gap-[1.875rem]">
        <TechDropdownCard image={aimo} title="AIMO" />
        <TechDropdownCard image={switches} title="Titan Switches" />
        <TechDropdownCard image={wireless} title="Stellar Wireless" />
      </div>
    </section>
  );
};

export default TechnologyDropdown;
