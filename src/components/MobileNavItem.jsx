import React from "react";

const MobileNavItem = ({ title, icon, image }) => {
  return (
    <li className="flex items-center gap-[0.625rem] relative max-lg:w-full max-lg:justify-between hover:text-gray-400">
      <a href="#">
        {title}{" "}
        {image !== "" ? (
          <img
            src={image}
            alt="US Language Card"
            className="inline-block align-middle ml-[0.3125rem]"
          />
        ) : (
          <></>
        )}
      </a>
      <div className="hidden max-lg:block">{icon}</div>
    </li>
  );
};

export default MobileNavItem;
