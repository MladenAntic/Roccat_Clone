import React, { useEffect, useRef } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import hero1 from "./assets/hero1.webp";
// import hero2 from "./assets/hero2.mp4";
import hero3 from "./assets/hero3.webp";

let hero2Video =
  "https://cdn.shopify.com/videos/c/o/v/9e01e47967ee4816b8b866908fbd498a.mp4";

const Hero = () => {
  const sectionRef = useRef(null);
  const carouselRef = useRef(null);

  const hero1Ref = useRef(null);
  const hero2Ref = useRef(null);
  const hero3Ref = useRef(null);

  const slides = [hero1Ref, hero2Ref, hero3Ref];

  const slider1Ref = useRef(null);
  const slider2Ref = useRef(null);
  const slider3Ref = useRef(null);

  useEffect(() => {
    hero1Ref.current.style.background = `url(${hero1}) no-repeat center center/cover`;
    hero3Ref.current.style.background = `url(${hero3}) no-repeat center center/cover`;

    window.addEventListener("scroll", () => {
      if (window.scrollY === 0 && window.scrollX === 0) {
        sectionRef.current.style.marginTop = "8.4375rem";
      } else {
        sectionRef.current.style.marginTop = "5.625rem";
      }
    });
  });

  let index = 0;

  function activeSlide1() {
    slider1Ref.current.classList.add("active");

    slider2Ref.current.classList.remove("active");
    slider3Ref.current.classList.remove("active");
  }

  function activeSlide2() {
    slider2Ref.current.classList.add("active");

    slider1Ref.current.classList.remove("active");
    slider3Ref.current.classList.remove("active");
  }

  function activeSlide3() {
    slider3Ref.current.classList.add("active");

    slider1Ref.current.classList.remove("active");
    slider2Ref.current.classList.remove("active");
  }

  function calculateTranslate() {
    carouselRef.current.style.transform = `translateX(${
      -index * sectionRef.current.clientWidth
    }px)`;
  }

  function slide1() {
    index = 0;

    calculateTranslate();
    activeSlide1();
  }

  function slide2() {
    index = 1;

    calculateTranslate();
    activeSlide2();
  }

  function slide3() {
    index = 2;

    calculateTranslate();
    activeSlide3();
  }

  function changesSlide() {
    if (index > slides.length - 1) {
      index = 0;
    } else if (index < 0) {
      index = slides.length - 1;
    }

    switch (index) {
      case 0:
        activeSlide1();
        break;
      case 1:
        activeSlide2();
        break;
      case 2:
        activeSlide3();
        break;
    }

    calculateTranslate();
  }

  function leftBtn() {
    index--;
    changesSlide();
  }

  function rightBtn() {
    index++;
    changesSlide();
  }

  return (
    <section
      ref={sectionRef}
      className="h-[31.25rem] mt-[8.4375rem] overflow-hidden relative"
    >
      <div ref={carouselRef} className="carousel h-full w-full duration-500">
        <div
          ref={hero1Ref}
          className="text-white absolute w-full h-full translate-x-0 flex items-center max-md:justify-center"
        >
          <div className="ml-[7.8125rem] max-md:ml-0 max-md:text-center">
            <h1 className="text-[4rem] font-light leading-tight max-lg:text-[3rem] max-md:text-[2.5rem]">
              GEAR UP FOR <br /> <strong className="font-bold">GAMING</strong>
            </h1>
            <p className="my-[2.5rem] text-xl max-lg:text-lg max-md:my-[1.25rem] max-md:text-sm">
              Get a free Headset Stand with your purchase <br /> of a Roccat
              Headset!
            </p>
            <a
              href="#"
              className="inline-block py-[0.9375rem] px-[2.5rem] bg-gray-300 text-black font-semibold rounded-full hover:bg-white duration-300 tracking-wider max-md:text-sm max-md:py-[0.625rem] max-md:px-[1.875rem]"
            >
              Learn More
            </a>
          </div>
        </div>

        <div
          ref={hero2Ref}
          className="text-white absolute w-full h-full translate-x-[100%] flex items-center justify-center"
        >
          <video
            playsInline
            autoPlay
            muted
            loop
            className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover z-[-1]"
          >
            <source src={hero2Video} type="video/mp4" />
          </video>
          <div className="text-center">
            <h1 className="text-[4rem] font-light leading-tight max-lg:text-[3rem] max-md:text-[2.5rem]">
              <strong>FREEDOM</strong> TO{" "}
              <strong className="font-bold">PLAY</strong>
            </h1>
            <p className="my-[1.5625rem] text-xl max-lg:text-lg max-lg:w-[75%] max-lg:mx-auto max-md:text-sm">
              The Vulcan II Mini Air Optical-Mechanical Gaming Keyboard packs
              performance, durability, and functionality into a{" "}
              <br className="max-lg:hidden" /> 65% mini form factor with full
              wireless and Bluetooth capabilities.
            </p>
            <a
              href="#"
              className="inline-block py-[0.9375rem] px-[2.5rem] bg-gray-300 text-black font-semibold rounded-full hover:bg-white duration-300 tracking-wider max-md:text-sm max-md:py-[0.625rem] max-md:px-[1.875rem]"
            >
              Shop Now
            </a>
          </div>

          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-40 z-[-1]"></div>
        </div>

        <div
          ref={hero3Ref}
          className="text-white absolute w-full h-full translate-x-[200%] flex items-center justify-center"
        >
          <div className="text-center mt-[-2.5rem]">
            <h1 className="text-[4rem] font-light leading-tight max-lg:text-[3rem] max-md:text-[2.5rem]">
              MECHANICAL <br />{" "}
              <strong className="font-bold">MASTERPIECE</strong>
            </h1>
            <p className="my-[1.5625rem] text-xl max-lg:text-lg max-lg:w-[75%] max-lg:mx-auto max-md:text-sm">
              The Vulcan II builds on the success of ROCCAT’s award-winning
              Vulcan series while setting a new standard in{" "}
              <br className="max-lg:hidden" /> performance with redesigned TITAN
              II mechanical switches.
            </p>
            <a
              href="#"
              className="inline-block py-[0.9375rem] px-[2.5rem] bg-gray-300 text-black font-semibold rounded-full hover:bg-white duration-300 tracking-wider max-md:text-sm max-md:py-[0.625rem] max-md:px-[1.875rem]"
            >
              Shop Now
            </a>
          </div>

          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-40 z-[-1]"></div>
        </div>
      </div>

      <div
        onClick={() => {
          leftBtn();
          window.addEventListener("resize", changesSlide);
        }}
        className="absolute top-[50%] translate-y-[-50%] left-[1.5625rem] bg-gray-700 text-white w-[3.125rem] h-[3.125rem] rounded-full flex items-center justify-center cursor-pointer hover:scale-125 hover:bg-black duration-300 max-md:w-[1.875rem] max-md:h-[1.875rem]"
      >
        <ChevronLeftIcon />
      </div>

      <div
        onClick={() => {
          rightBtn();
          window.addEventListener("resize", changesSlide);
        }}
        className="absolute top-[50%] translate-y-[-50%] right-[1.5625rem] bg-gray-700 text-white w-[3.125rem] h-[3.125rem] rounded-full flex items-center justify-center cursor-pointer hover:scale-125 hover:bg-black duration-300 max-md:w-[1.875rem] max-md:h-[1.875rem]"
      >
        <ChevronRightIcon />
      </div>

      <div className="flex items-center gap-[1.25rem] absolute z-1 left-[50%] translate-x-[-50%] bottom-[2.5rem]">
        <div
          onClick={() => {
            slide1();
            window.addEventListener("resize", slide1);
          }}
          ref={slider1Ref}
          className="active w-[4.0625rem] h-[0.125rem] bg-gray-300 cursor-pointer hover:bg-white hover:h-[0.375rem] hover:rounded-full duration-300 max-md:w-[2.8125rem]"
        ></div>
        <div
          onClick={() => {
            slide2();
            window.addEventListener("resize", slide2);
          }}
          ref={slider2Ref}
          className="w-[4.0625rem] h-[0.125rem] bg-gray-300 cursor-pointer hover:bg-white hover:h-[0.375rem] hover:rounded-full duration-300 max-md:w-[2.8125rem]"
        ></div>
        <div
          onClick={() => {
            slide3();
            window.addEventListener("resize", slide3);
          }}
          ref={slider3Ref}
          className="w-[4.0625rem] h-[0.125rem] bg-gray-300 cursor-pointer hover:bg-white hover:h-[0.375rem] hover:rounded-full duration-300 max-md:w-[2.8125rem]"
        ></div>
      </div>
    </section>
  );
};

export default Hero;
