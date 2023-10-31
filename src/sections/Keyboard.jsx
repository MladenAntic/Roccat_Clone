import React, { useEffect } from "react";
import vulcan2Mini from "../assets/vulcan2-mini.jfif";
import lastChance from "../assets/last-chance.jfif";

const Keyboard = () => {

  useEffect(() => {
    const buttons = document.querySelectorAll(".cta-btn");

    buttons.forEach((btn) => {
      btn.style.background =
        "linear-gradient(to right, #ff64ac, #fe33d1, #70a5f6)";
    });
  });

  return (
    <section className="flex items-center gap-[1.5625rem] p-[1.5625rem] pb-[4.6875rem] max-md:flex-col max-md:gap-[3.125rem]">
      <div>
        <img src={vulcan2Mini} alt="Vulcan 2 Mini" />
        <h3 className="text-[3rem] mt-[1.25rem] max-lg:text-[2.5rem] max-md:text-[2rem]">
          <strong>VULCAN II</strong> MINI
        </h3>
        <span className="block text-xl mb-[1.25rem] max-lg:text-base max-md:text-sm">
          100% performance in a mini 65% form-factor.
        </span>
        <a
          href="#"
          className="cta-btn inline-block text-white text-xl font-semibold py-[0.625rem] px-[1.875rem] rounded-full max-lg:text-lg max-md:text-base"
        >
          Learn More
        </a>
      </div>

      <div>
        <img src={lastChance} alt="Last Chance" />
        <h3 className="text-[3rem] mt-[1.25rem] max-lg:text-[2.5rem] max-md:text-[2rem]">
          <strong>LAST</strong> CHANCE
        </h3>
        <span className="block text-xl mb-[1.25rem] max-lg:text-base max-md:text-sm">JOIN THE CHAMPIONS CLUB</span>
        <a
          href="#"
          className="cta-btn inline-block text-white text-xl font-semibold py-[0.625rem] px-[1.875rem] rounded-full max-lg:text-lg max-md:text-base"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
};

export default Keyboard;
