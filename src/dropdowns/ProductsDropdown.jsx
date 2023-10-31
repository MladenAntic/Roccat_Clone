import React, { useRef, useEffect } from "react";
import mice from "../assets/mice.webp";
import keyboards from "../assets/keyboards.webp";
import mousepads from "../assets/mousepads.webp";
import headsets from "../assets/headsets.webp";
import streaming from "../assets/streaming.webp";
import refurbished from "../assets/refurbished.webp";
import accessories from "../assets/accessories.avif";
import deals from "../assets/deals.png";
import ProductDropdownCard from "../components/ProductDropdownCard";
import "animate.css";

const ProductsDropdown = () => {
  const productsDropdownRef = useRef(null);

  useEffect(() => {
    function calculateOffset() {
      if (window.scrollX === 0 && window.scrollY === 0) {
        productsDropdownRef.current.style.top = "8.4375rem";
      } else {
        productsDropdownRef.current.style.top = "5.3125rem";
      }
    }

    calculateOffset();
    window.addEventListener("scroll", calculateOffset);
  });

  return (
    <section
      ref={productsDropdownRef}
      className="animate__animated animate__fadeIn fixed bg-white left-0 right-0 h-[31.25rem] flex items-center justify-center max-lg:hidden"
    >
      <div className="w-[46.875rem] flex flex-col gap-[1.5625rem]">
        <div className="flex items-center justify-center gap-[4.6875rem]">
          <ProductDropdownCard image={mice} title="Mice" />
          <ProductDropdownCard image={keyboards} title="Keyboards" />
          <ProductDropdownCard image={mousepads} title="Mousepads" />
          <ProductDropdownCard image={headsets} title="Headsets" />
        </div>

        <div className="flex items-center justify-center gap-[4.6875rem]">
          <ProductDropdownCard image={streaming} title="Streaming" />
          <ProductDropdownCard image={refurbished} title="Refurbished" />
          <ProductDropdownCard image={accessories} title="Accessories" />
          <ProductDropdownCard image={deals} title="Deals" />
        </div>
      </div>
    </section>
  );
};

export default ProductsDropdown;
