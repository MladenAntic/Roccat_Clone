import React from "react";
import accessibility from "../assets/accessibility.svg";
import trustmark from "../assets/trustmark.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-[3.125rem] px-[1.5625rem] flex flex-col gap-[4.6875rem] relative max-lg:py-[1.5625rem]">
      <div className="flex items-start justify-between">
        <ul className="flex flex-col gap-[0.9375rem] text-[#7a7a7a] max-lg:hidden">
          <li className="text-white text-xl">Products</li>

          <li className="hover:text-white duration-300">
            <a href="#">Mice</a>
          </li>
          <li className="hover:text-white duration-300">
            <a href="#">Keyboards</a>
          </li>
          <li className="hover:text-white duration-300">
            <a href="#">Headsets</a>
          </li>
          <li className="hover:text-white duration-300">
            <a href="#">Mousepads</a>
          </li>
          <li className="hover:text-white duration-300">
            <a href="#">Streaming</a>
          </li>
          <li className="hover:text-white duration-300">
            <a href="#">Accessories</a>
          </li>
          <li className="hover:text-white duration-300">
            <a href="#">Deals</a>
          </li>
        </ul>

        <ul className="flex flex-col gap-[0.9375rem] text-[#7a7a7a] max-lg:hidden">
          <li className="text-white text-xl">ROCCAT</li>

          <li className="hover:text-white duration-300">
            <a href="#">About ROCCAT</a>
          </li>
          <li className="hover:text-white duration-300">
            <a href="#">Contact Us</a>
          </li>
          <li className="hover:text-white duration-300">
            <a href="#">Digital Accessibility</a>
          </li>
          <li className="hover:text-white duration-300">
            <a href="#">US Privacy Request Form</a>
          </li>
          <li className="hover:text-white duration-300">
            <a href="#">Creators</a>
          </li>
          <li className="hover:text-white duration-300">
            <a href="#">GovX</a>
          </li>
          <li className="hover:text-white duration-300">
            <a href="#">Student Discount</a>
          </li>
          <li className="hover:text-white duration-300">
            <a href="#">Affiliate Program</a>
          </li>
        </ul>

        <ul className="flex flex-col gap-[0.9375rem] text-[#7a7a7a] max-lg:hidden">
          <li className="text-white text-xl">Support</li>

          <li className="hover:text-white duration-300">
            <a href="#">Downloads</a>
          </li>
          <li className="hover:text-white duration-300">
            <a href="#">Product Registration</a>
          </li>
          <li className="hover:text-white duration-300">
            <a href="#">Contact Support</a>
          </li>
          <li className="hover:text-white duration-300">
            <a href="#">Homologation</a>
          </li>
          <li className="hover:text-white duration-300">
            <a href="#">Certificate of Authenticity</a>
          </li>
        </ul>

        <ul className="flex flex-col gap-[0.9375rem] text-[#7a7a7a] max-lg:hidden">
          <li className="text-white text-xl">Orders</li>

          <li className="hover:text-white duration-300">
            <a href="#">Track Order</a>
          </li>
          <li className="hover:text-white duration-300">
            <a href="#">Shipping Information</a>
          </li>
          <li className="hover:text-white duration-300">
            <a href="#">Refund Policy</a>
          </li>
          <li className="hover:text-white duration-300">
            <a href="#">Warranty Information</a>
          </li>
          <li className="hover:text-white duration-300">
            <a href="#">Terms of Sale</a>
          </li>
          <li className="hover:text-white duration-300">
            <a href="#">Reviews</a>
          </li>
        </ul>

        <ul className="flex flex-col gap-[0.9375rem] text-[#7a7a7a] max-lg:hidden">
          <li className="text-white text-xl">Company</li>

          <li className="hover:text-white duration-300">
            <a href="#">About Us</a>
          </li>
          <li className="hover:text-white duration-300">
            <a href="#">Leadership</a>
          </li>
          <li className="hover:text-white duration-300">
            <a href="#">Events & Presentations</a>
          </li>
          <li className="hover:text-white duration-300">
            <a href="#">Press Release</a>
          </li>
          <li className="hover:text-white duration-300">
            <a href="#">Stock Price</a>
          </li>
          <li className="hover:text-white duration-300">
            <a href="#">Contact IR</a>
          </li>
          <li className="hover:text-white duration-300">
            <a href="#">Sustainability</a>
          </li>
          <li className="hover:text-white duration-300">
            <a href="#">Careers</a>
          </li>
          <li className="hover:text-white duration-300">
            <a href="#">Declaration of Conformity</a>
          </li>
        </ul>
      </div>

      <div className="self-center text-center">
        <ul className="flex items-center justify-center gap-[0.625rem] text-[#7a7a7a] mb-[1.25rem] max-lg:flex-col max-md:text-sm">
          <li className="hover:text-white duration-300">
            <a href="#">Terms & Conditions</a>
          </li>
          <li className="max-lg:hidden">|</li>
          <li className="hover:text-white duration-300">
            <a href="#">Privacy</a>
          </li>
          <li className="max-lg:hidden">|</li>
          <li className="hover:text-white duration-300">
            <a href="#">US Privacy Supplement</a>
          </li>
          <li className="max-lg:hidden">|</li>
          <li className="hover:text-white duration-300">
            <a href="#">Your Privacy Choices</a>
          </li>
          <li className="hover:text-white duration-300">
            <img src={trustmark} alt="Trustmark" />
          </li>
        </ul>

        <p className="text-[#7a7a7a] max-md:text-sm">ROCCAT © 2023 <br className="hidden max-lg:block" /> <span className="max-lg:hidden">|</span> ROCCAT® is a Turtle Beach Brand</p>
      </div>

      <img src={accessibility} alt="Accessibility" className="absolute bottom-[3.125rem] left-[1.5625rem] w-[6.25rem] max-lg:left-[50%] max-lg:translate-x-[-50%] max-lg:top-[2.1875rem]" />
    </footer>
  );
};

export default Footer;
