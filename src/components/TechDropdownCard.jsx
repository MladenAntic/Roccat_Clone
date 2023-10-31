import React, { useRef, useEffect } from "react";

const TechDropdownCard = ({image, title}) => {
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
    <a ref={cardRef} href="#" className="card text-center">
      <img ref={imageRef} src={image} alt="Aimo" className="relative duration-300" />
      <h4 ref={titleRef} className="text-[#7a7a7a] font-medium duration-300">
        {title}
      </h4>
    </a>
  );
};

export default TechDropdownCard;
