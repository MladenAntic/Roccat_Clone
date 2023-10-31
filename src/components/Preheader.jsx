import React, { useRef, useEffect } from "react";
import usLangCard from "../assets/us-lang-card.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Preheader = () => {
  const preheaderRef = useRef(null);
  const message1Ref = useRef(null);
  const message2Ref = useRef(null);

  useEffect(() => {
    function showMessage1() {
      message1Ref.current.style.display = "flex";
      message2Ref.current.style.display = "none";
    }

    function showMessage2() {
      message2Ref.current.style.display = "block";
      message1Ref.current.style.display = "none";
    }

    let id1 = setInterval(showMessage1, 5000);
    let id2 = setInterval(showMessage2, 10000);

    function togglePreheader() {
      window.addEventListener("scroll", () => {
        if (window.innerWidth >= 1024) {
          if (window.scrollY === 0 && window.scrollX === 0) {
            preheaderRef.current.style.display = "flex";
          } else {
            preheaderRef.current.style.display = "none";
          }
        } else {
          preheaderRef.current.style.display = "flex";
        }
      });
    }

    togglePreheader();
    window.addEventListener("resize", togglePreheader);
  });

  return (
    <div
      ref={preheaderRef}
      className="bg-[#2a2a2a] h-[3.125rem] flex items-center justify-center relative max-lg:h-[4.6875rem]"
    >
      <div className="flex-1 flex gap-[0.625rem] items-center justify-center text-center">
        <div
          ref={message1Ref}
          className="animate__animated animate__fadeIn flex items-center gap-[0.625rem]"
        >
          <span className="text-white max-md:text-sm">
            Shop now. Pay over time with Klarna. *
          </span>
          <a
            href="#"
            className="bg-[#feb3c7] py-[0.3125rem] px-[0.9375rem] rounded-full max-md:text-sm"
          >
            Learn More
          </a>
        </div>

        <div
          ref={message2Ref}
          className="animate__animated animate__fadeIn hidden"
        >
          <span className="text-green-300">
            Free Shipping on orders over $49!
          </span>
        </div>
      </div>

      <div className="text-gray-500 flex items-center gap-[1.25rem] absolute top-[50%] translate-y-[-50%] right-[2.5rem] max-lg:hidden">
        <a href="#" className="hover:text-white duration-300">
          Support
        </a>
        <span className="text-white">|</span>
        <div className="flex items-center gap-[0.3125rem] cursor-pointer hover:text-white duration-300">
          <img src={usLangCard} alt="Us Language Card" />
          <div className="max-lg:hidden">
            <ExpandMoreIcon />
          </div>
        </div>
        <span className="text-white">|</span>
        <a href="#" className="hover:text-white hover:underline duration-300">
          Sign In
        </a>
      </div>
    </div>
  );
};

export default Preheader;
