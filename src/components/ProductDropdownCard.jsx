import React, { useRef, useEffect } from "react";

const DropdownCard = ({ image, title }) => {
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    cardRef.current.addEventListener("mouseover", () => {
      imageRef.current.style.top = "-0.625rem";
      titleRef.current.style.color = "black";
    });
    cardRef.current.addEventListener("mouseout", () => {
      imageRef.current.style.top = "0";
      titleRef.current.style.color = "#7a7a7a";
    });
  });

  return (
    <div>
      <a ref={cardRef} href="#" className="text-center flex flex-col">
        <div className="w-[9.375rem] h-[9.375rem]">
          <img
            ref={imageRef}
            src={image}
            alt="Product Image"
            className="w-full h-full object-contain relative duration-300"
          />
        </div>
        <h4 ref={titleRef} className="text-[#7a7a7a] font-medium duration-300">
          {title}
        </h4>
      </a>
    </div>
  );
};

export default DropdownCard;
