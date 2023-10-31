import React, {useRef, useEffect} from "react";

const ProductCard = ({image, title}) => {
  const cardRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    cardRef.current.addEventListener("mouseover", () => {
      imageRef.current.style.top = "-1.25rem";
    });
    cardRef.current.addEventListener("mouseout", () => {
      imageRef.current.style.top = "0";
    });
  });

  return (
    <a ref={cardRef} href="#" className="card text-center">
      <img
      ref={imageRef}
        src={image}
        alt="Mice"
        className="image w-[18.75rem] mx-auto relative duration-300"
      />
      <h3 className="text-2xl">{title}</h3>
    </a>
  );
};

export default ProductCard;
