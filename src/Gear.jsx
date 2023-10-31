import React from "react";
import mice from "./assets/mice.webp";
import keyboards from "./assets/keyboards.webp";
import mousepads from "./assets/mousepads.webp";
import headsets from "./assets/headsets.webp";
import streaming from "./assets/streaming.webp";
import refurbished from "./assets/refurbished.webp";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ProductCard from "./components/GearCard";

function PreviousArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute top-[50%] translate-y-[-50%] left-[1.5625rem] bg-gray-300 text-black w-[2.5rem] h-[2.5rem] rounded-full flex items-center justify-center cursor-pointer hover:scale-125 hover:bg-white duration-300 max-md:hidden z-[5]"
    >
      <ChevronLeftIcon />
    </div>
  );
}

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute top-[50%] translate-y-[-50%] right-[1.5625rem] bg-gray-300 text-black w-[2.5rem] h-[2.5rem] rounded-full flex items-center justify-center cursor-pointer hover:scale-125 hover:bg-white duration-300 max-md:hidden z-[5]"
    >
      <ChevronRightIcon />
    </div>
  );
}

const Gear = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: <PreviousArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-black text-white py-[1.875rem] h-[31.25rem] overflow-hidden max-md:h-[34.375rem]">
      <h2 className="text-center text-[2.5rem] mb-[2.5rem]">SHOP GAMING GEAR</h2>

      <Slider {...settings}>
        <ProductCard image={mice} title="Mice" />
        <ProductCard image={keyboards} title="Keyboards" />
        <ProductCard image={mousepads} title="Mousepads" />
        <ProductCard image={headsets} title="Headsets" />
        <ProductCard image={streaming} title="Streaming" />
        <ProductCard image={refurbished} title="Refurbished" />
      </Slider>
    </section>
  );
};

export default Gear;
