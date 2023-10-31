import React, { useEffect, useRef } from "react";
import "./Grid1.css";
import titanSwitches from "./assets/titan-switches.webp";
import creators from "./assets/creators.avif";
import certifiedRefurbished from "./assets/certified-refurbished.webp";

const Grid1 = () => {
  const titanSwitchesRef = useRef(null);
  const creatorsRef = useRef(null);
  const certifiedRefurbishedRef = useRef(null);

  useEffect(() => {
    titanSwitchesRef.current.style.background = `url(${titanSwitches}) no-repeat center center/cover`;
    creatorsRef.current.style.background = `url(${creators}) no-repeat center center/cover`;
    certifiedRefurbishedRef.current.style.background = `url(${certifiedRefurbished}) no-repeat center center/cover`;
  });
  return (
    <section className="grid1 grid gap-[1.5625rem] bg-black p-[1.5625rem] text-white h-[53.125rem]">
      <a
        href="#"
        ref={titanSwitchesRef}
        className="titan-switches rounded-2xl flex items-end relative"
      >
        <div className="ml-[2.5rem] mb-[3.125rem] z-[5] max-md:ml-[1.25rem] max-md:mb-[1.875rem]">
          <h4 className="text-[2rem] font-medium max-lg:text-[1.5rem]">
            OUR TITAN SWITCHES
          </h4>
          <span className="block mb-[1.25rem] text-xl max-lg:text-lg max-md:text-sm">
            Ultra fast & reliable
          </span>
          <button className="cta-btn inline-block text-white text-xl font-semibold py-[0.625rem] px-[1.875rem] rounded-full max-lg:text-lg max-md:text-base">
            Learn More
          </button>
        </div>

        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full bg-blue-500 opacity-30 z-1 rounded-2xl"></div>
      </a>

      <a
        href="#"
        ref={creatorsRef}
        className="creators rounded-2xl flex items-end"
      >
        <div className="ml-[1.25rem] mb-[1.25rem]">
          <h4 className="text-[2rem] font-medium max-lg:text-[1.5rem]">
            CREATORS
          </h4>
          <span className="block text-xl max-lg:text-lg max-md:text-sm">
            Meet team ROCCAT
          </span>
        </div>
      </a>

      <a
        href="#"
        ref={certifiedRefurbishedRef}
        className="certified-refurbished rounded-2xl flex items-end relative"
      >
        <div className="z-[5]">
          <span className="block font-bold text-[1.5rem] ml-[1.25rem] mb-[1.25rem] max-lg:text-[1.125rem]">
            Get a discount on refurbished products
          </span>
        </div>

        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full bg-green-950 opacity-30 z-1 rounded-2xl"></div>
      </a>
    </section>
  );
};

export default Grid1;
