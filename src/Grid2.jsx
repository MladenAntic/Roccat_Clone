import React, { useRef, useEffect } from "react";
import "./Grid2.css";
import wallpapers from "./assets/wallpapers.webp";
import stellarWireless from "./assets/stellar-wireless.webp";
import spellbound from "./assets/spellbound.avif";

const Grid2 = () => {
  const wallpapersRef = useRef(null);
  const stellarWirelessRef = useRef(null);
  const spellboundRef = useRef(null);

  useEffect(() => {
    wallpapersRef.current.style.background = `url(${wallpapers}) no-repeat center center/cover`;
    stellarWirelessRef.current.style.background = `url(${stellarWireless}) no-repeat center center/cover`;
    spellboundRef.current.style.background = `url(${spellbound}) no-repeat center center/cover`;
  });

  return (
    <section className="grid2 grid gap-[1.5625rem] bg-black p-[1.5625rem] text-white h-[53.125rem]">
      <a
        href="#"
        ref={wallpapersRef}
        className="wallpapers rounded-2xl flex items-end relative"
      >
        <div className="z-[5]">
          <span className="block font-bold text-[1.5rem] ml-[1.25rem] mb-[1.25rem] max-lg:text-[1.125rem]">
            Add Style with our ROCCAT Wallpapers
          </span>
        </div>
      </a>

      <a
        href="#"
        ref={stellarWirelessRef}
        className="stellar-wireless rounded-2xl flex items-start relative"
      >
        <div className="z-[5] ml-[1.25rem] mt-[1.25rem]">
          <h4 className="text-[2rem] font-medium max-lg:text-[1.5rem]">
            STELLAR WIRELESS
          </h4>
          <span className="block font-bold text-[1.5rem] max-lg:text-[1.125rem]">
            It's time to go mobile
          </span>
        </div>
      </a>

      <a
        href="#"
        ref={spellboundRef}
        className="spellbound rounded-2xl flex items-end relative"
      >
        <div className="ml-[2.5rem] mb-[2.5rem] z-[5] max-md:ml-[1.5625rem] max-md:mb-[1.5625rem]">
          <h4 className="text-[1.5rem] font-medium max-lg:text-[1.125rem]">
            APEX LEGENDS SPELLBOUND COLLECTION <br className="max-lg:hidden" />{" "}
            EVENT
          </h4>
          <span className="block mb-[1.5625rem] text-xl max-lg:text-lg max-md:text-sm">
            PATCH NOTES
          </span>
          <button className="inline-block bg-gray-300 text-black text-xl font-normal py-[0.625rem] px-[1.875rem] rounded-full max-lg:text-lg max-md:text-base hover:bg-white duration-300">
            Learn More
          </button>
        </div>

        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full bg-green-950 opacity-30 z-1 rounded-2xl"></div>
      </a>
    </section>
  );
};

export default Grid2;
