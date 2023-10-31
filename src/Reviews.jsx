import React, { useRef, useEffect } from "react";
import "./Reviews.css";
import reviewsBg from "./assets/reviews-bg.webp";
import review1Img from "./assets/review-1-img.avif";
import review2Img from "./assets/review-2-img.webp";
import review3Img from "./assets/review-3-img.webp";
import review4Img from "./assets/review-4-img.webp";
import trophey from "./assets/trophey.webp";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "animate.css";

const Reviews = () => {
  const reviewsSectionRef = useRef(null);
  const carouselRef = useRef(null);

  const review1Ref = useRef(null);
  const review2Ref = useRef(null);
  const review3Ref = useRef(null);
  const review4Ref = useRef(null);

  const slider1Ref = useRef(null);
  const slider2Ref = useRef(null);
  const slider3Ref = useRef(null);
  const slider4Ref = useRef(null);

  useEffect(() => {
    reviewsSectionRef.current.style.background = `url(${reviewsBg}) no-repeat center center/cover`;
  });

  let index = 0;

  function activeSlide1() {
    slider1Ref.current.classList.add("active");

    slider2Ref.current.classList.remove("active");
    slider3Ref.current.classList.remove("active");
    slider4Ref.current.classList.remove("active");
  }

  function activeSlide2() {
    slider2Ref.current.classList.add("active");

    slider1Ref.current.classList.remove("active");
    slider3Ref.current.classList.remove("active");
    slider4Ref.current.classList.remove("active");
  }

  function activeSlide3() {
    slider3Ref.current.classList.add("active");

    slider1Ref.current.classList.remove("active");
    slider2Ref.current.classList.remove("active");
    slider4Ref.current.classList.remove("active");
  }

  function activeSlide4() {
    slider4Ref.current.classList.add("active");

    slider1Ref.current.classList.remove("active");
    slider2Ref.current.classList.remove("active");
    slider3Ref.current.classList.remove("active");
  }

  function calculateTranslate() {
    carouselRef.current.style.transform = `translateX(${
      -index * reviewsSectionRef.current.clientWidth
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

  function slide4() {
    index = 3;

    calculateTranslate();
    activeSlide4();
  }

  function changesSlide() {
    if (index > 3) {
      index = 0;
    } else if (index < 0) {
      index = 3;
    }

    switch (index) {
      case 0:
        activeSlide1();
        review1Ref.current.classList.add("animate__animated");
        review1Ref.current.classList.add("animate__fadeInLeft");
        review1Ref.current.classList.add("animate__faster");

        review2Ref.current.classList.remove("animate__animated");
        review2Ref.current.classList.remove("animate__fadeInLeft");
        review2Ref.current.classList.remove("animate__faster");
        review3Ref.current.classList.remove("animate__animated");
        review3Ref.current.classList.remove("animate__fadeInLeft");
        review3Ref.current.classList.remove("animate__faster");
        review4Ref.current.classList.remove("animate__animated");
        review4Ref.current.classList.remove("animate__fadeInLeft");
        review4Ref.current.classList.remove("animate__faster");
        break;
      case 1:
        activeSlide2();
        review2Ref.current.classList.add("animate__animated");
        review2Ref.current.classList.add("animate__fadeInLeft");
        review2Ref.current.classList.add("animate__faster");

        review1Ref.current.classList.remove("animate__animated");
        review1Ref.current.classList.remove("animate__fadeInLeft");
        review1Ref.current.classList.remove("animate__faster");
        review3Ref.current.classList.remove("animate__animated");
        review3Ref.current.classList.remove("animate__fadeInLeft");
        review3Ref.current.classList.remove("animate__faster");
        review4Ref.current.classList.remove("animate__animated");
        review4Ref.current.classList.remove("animate__fadeInLeft");
        review4Ref.current.classList.remove("animate__faster");
        break;
      case 2:
        activeSlide3();
        review3Ref.current.classList.add("animate__animated");
        review3Ref.current.classList.add("animate__fadeInLeft");
        review3Ref.current.classList.add("animate__faster");

        review1Ref.current.classList.remove("animate__animated");
        review1Ref.current.classList.remove("animate__fadeInLeft");
        review1Ref.current.classList.remove("animate__faster");
        review2Ref.current.classList.remove("animate__animated");
        review2Ref.current.classList.remove("animate__fadeInLeft");
        review2Ref.current.classList.remove("animate__faster");
        review4Ref.current.classList.remove("animate__animated");
        review4Ref.current.classList.remove("animate__fadeInLeft");
        review4Ref.current.classList.remove("animate__faster");
        break;
      case 3:
        activeSlide4();
        review4Ref.current.classList.add("animate__animated");
        review4Ref.current.classList.add("animate__fadeInLeft");
        review4Ref.current.classList.add("animate__faster");

        review1Ref.current.classList.remove("animate__animated");
        review1Ref.current.classList.remove("animate__fadeInLeft");
        review1Ref.current.classList.remove("animate__faster");
        review2Ref.current.classList.remove("animate__animated");
        review2Ref.current.classList.remove("animate__fadeInLeft");
        review2Ref.current.classList.remove("animate__faster");
        review3Ref.current.classList.remove("animate__animated");
        review3Ref.current.classList.remove("animate__fadeInLeft");
        review3Ref.current.classList.remove("animate__faster");
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
      ref={reviewsSectionRef}
      className="h-[100vh] text-white pt-[1.875rem] relative overflow-hidden max-md:h-[56.25rem]"
    >
      <h2 className="text-center text-[3rem]">THE REVIEWS ARE IN</h2>

      <div
        ref={carouselRef}
        className="h-[80%] w-full duration-500 flex items-center justify-center"
      >
        <div className="flex items-center justify-center absolute translate-x-0 max-md:flex-col">
          <img
            src={review1Img}
            alt="Review 1 Image"
            className="w-[31.25rem] max-lg:w-[25rem]"
          />

          <div
            ref={review1Ref}
            className="review bg-white text-black flex-[0.6] p-[3.125rem] pt-[4.6875rem] rounded-2xl text-center relative max-xl:p-[1.875rem] max-xl:pt-[3.125rem] max-md:w-[90%] max-md:mt-[-3.125rem]"
          >
            <q className="block mb-[1.875rem] text-2xl text-[#3b3b3b] max-xl:text-xl max-lg:text-base max-md:italic">
              Best Mechanical Gaming Keyboard. RGB lighting shines in this
              stunning mechanical keyboard featuring custom macros, button
              duplicator technology, and full N-key rollover.
            </q>
            <span className="block mb-[1.5625rem] text-xl font-normal">IGN</span>
            <a
              href="#"
              className="inline-block bg-[#3b3b3b] text-white text-lg font-semibold py-[0.625rem] px-[2.8125rem] rounded-full tracking-wider hover:bg-black duration-300"
            >
              Vulcan ||
            </a>

            <img
              src={trophey}
              alt="Trophey"
              className="w-[6.25rem] absolute top-[-3.125rem] left-[50%] translate-x-[-50%]"
            />

            <div className="absolute w-[2.5rem] h-[2.5rem] bg-white rotate-45 top-[50%] translate-y-[-50%] left-[-1.25rem] max-md:hidden"></div>
          </div>
        </div>

        <div className="flex items-center justify-center absolute translate-x-[100%] max-md:flex-col">
          <img
            src={review2Img}
            alt="Review 2 Image"
            className="w-[31.25rem] max-lg:w-[25rem]"
          />

          <div
            ref={review2Ref}
            className="review bg-white text-black flex-[0.6] p-[3.125rem] pt-[4.6875rem] rounded-2xl text-center relative max-xl:p-[1.875rem] max-xl:pt-[3.125rem] max-md:w-[90%] max-md:mt-[-3.125rem]"
          >
            <q className="block mb-[1.875rem] text-2xl text-[#3b3b3b] max-xl:text-xl max-lg:text-base max-md:italic">
              The Vulcan II Mini Optical Gaming Keyboard succeeds in everything
              it sets out to do, a great option for a mini keyboard that I would
              recommend to anyone.
            </q>
            <span className="block mb-[1.5625rem] text-xl font-normal">
              Game Tyrant
            </span>
            <a
              href="#"
              className="inline-block bg-[#3b3b3b] text-white text-lg font-semibold py-[0.625rem] px-[2.8125rem] rounded-full tracking-wider hover:bg-black duration-300"
            >
              Vulcan || Mini
            </a>

            <img
              src={trophey}
              alt="Trophey"
              className="w-[6.25rem] absolute top-[-3.125rem] left-[50%] translate-x-[-50%]"
            />

            <div className="absolute w-[2.5rem] h-[2.5rem] bg-white rotate-45 top-[50%] translate-y-[-50%] left-[-1.25rem] max-md:hidden"></div>
          </div>
        </div>

        <div className="flex items-center justify-center absolute translate-x-[200%] max-md:flex-col">
          <img
            src={review3Img}
            alt="Review 3 Image"
            className="w-[31.25rem] max-lg:w-[25rem]"
          />

          <div
            ref={review3Ref}
            className="review bg-white text-black flex-[0.6] p-[3.125rem] pt-[4.6875rem] rounded-2xl text-center relative max-xl:p-[1.875rem] max-xl:pt-[3.125rem] max-md:w-[90%] max-md:mt-[-3.125rem]"
          >
            <q className="block mb-[1.875rem] text-2xl text-[#3b3b3b] max-xl:text-xl max-lg:text-base max-md:italic">
              If you are looking for a truly premium and comfortable headset
              capable of gaming for several hours on end, the ROCCAT Syn Max Air
              is a good option.
            </q>
            <span className="block mb-[1.5625rem] text-xl font-normal">
              APH Networks
            </span>
            <a
              href="#"
              className="inline-block bg-[#3b3b3b] text-white text-lg font-semibold py-[0.625rem] px-[2.8125rem] rounded-full tracking-wider hover:bg-black duration-300"
            >
              Syn Max Air
            </a>

            <img
              src={trophey}
              alt="Trophey"
              className="w-[6.25rem] absolute top-[-3.125rem] left-[50%] translate-x-[-50%]"
            />

            <div className="absolute w-[2.5rem] h-[2.5rem] bg-white rotate-45 top-[50%] translate-y-[-50%] left-[-1.25rem] max-md:hidden"></div>
          </div>
        </div>

        <div className="flex items-center justify-center absolute translate-x-[300%] max-md:flex-col">
          <img
            src={review4Img}
            alt="Review 4 Image"
            className="w-[31.25rem] max-lg:w-[25rem]"
          />

          <div
            ref={review4Ref}
            className="review bg-white text-black flex-[0.6] p-[3.125rem] pt-[4.6875rem] rounded-2xl text-center relative max-xl:p-[1.875rem] max-xl:pt-[3.125rem] max-md:w-[90%] max-md:mt-[-3.125rem]"
          >
            <q className="block mb-[1.875rem] text-2xl text-[#3b3b3b] max-xl:text-xl max-lg:text-base max-md:italic">
              I found very little to dislike here. The Kone Air is a gaming
              mouse, and has a lot of what you’d expect it to, but it’s also
              just a nice looking mouse and ridiculously comfortable.
            </q>
            <span className="block mb-[1.5625rem] text-xl font-normal">
              Brutal Gamer
            </span>
            <a
              href="#"
              className="inline-block bg-[#3b3b3b] text-white text-lg font-semibold py-[0.625rem] px-[2.8125rem] rounded-full tracking-wider hover:bg-black duration-300"
            >
              Kone Air
            </a>

            <img
              src={trophey}
              alt="Trophey"
              className="w-[6.25rem] absolute top-[-3.125rem] left-[50%] translate-x-[-50%]"
            />

            <div className="absolute w-[2.5rem] h-[2.5rem] bg-white rotate-45 top-[50%] translate-y-[-50%] left-[-1.25rem] max-md:hidden"></div>
          </div>
        </div>
      </div>

      <div
        onClick={() => {
          leftBtn();
          window.addEventListener("resize", changesSlide);
        }}
        className="absolute top-[50%] translate-y-[-50%] left-[1.5625rem] bg-gray-300 text-black w-[2.5rem] h-[2.5rem] rounded-full flex items-center justify-center cursor-pointer hover:scale-125 hover:bg-white duration-300 z-[5] max-md:w-[1.875rem] max-md:h-[1.875rem]"
      >
        <ChevronLeftIcon />
      </div>

      <div
        onClick={() => {
          rightBtn();
          window.addEventListener("resize", changesSlide);
        }}
        className="absolute top-[50%] translate-y-[-50%] right-[1.5625rem] bg-gray-300 text-black w-[2.5rem] h-[2.5rem] rounded-full flex items-center justify-center cursor-pointer hover:scale-125 hover:bg-white duration-300 z-[5] max-md:w-[1.875rem] max-md:h-[1.875rem]"
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
        <div
          onClick={() => {
            slide4();
            window.addEventListener("resize", slide4);
          }}
          ref={slider4Ref}
          className="w-[4.0625rem] h-[0.125rem] bg-gray-300 cursor-pointer hover:bg-white hover:h-[0.375rem] hover:rounded-full duration-300 max-md:w-[2.8125rem]"
        ></div>
      </div>
    </section>
  );
};

export default Reviews;
