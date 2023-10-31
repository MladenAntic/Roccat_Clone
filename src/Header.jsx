import React, { useEffect, useRef } from "react";
import usLangCard from "./assets/us-lang-card.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "animate.css";
import logo from "./assets/logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Preheader from "./components/Preheader";
import ProductsDropdown from "./dropdowns/ProductsDropdown";
import TechnologyDropdown from "./dropdowns/TechnologyDropdown";
import DownloadsDropdown from "./dropdowns/DownloadsDropdown";
import MobileNavItem from "./components/MobileNavItem";

const Header = () => {
  const mobileNavRef = useRef(null);
  const menuHeaderRef = useRef(null);
  const menuFormRef = useRef(null);
  const mobileLinks1Ref = useRef(null);
  const supportMobileRef = useRef(null);
  const horizontalRuleRef = useRef(null);
  const mobileLinks2Ref = useRef(null);
  const mobileFooterRef = useRef(null);

  const mobileNavigation = [
    menuHeaderRef,
    menuFormRef,
    mobileLinks1Ref,
    mobileLinks2Ref,
    mobileFooterRef,
  ];

  const productsRef = useRef(null);
  const productsDropdownRef = useRef(null);

  const technologyRef = useRef(null);
  const technologyDropdownRef = useRef(null);

  const downloadsRef = useRef(null);
  const downloadsDropdownRef = useRef(null);

  useEffect(() => {
    const navItems = document.querySelectorAll(".navItem");
    const underlines = document.querySelectorAll(".underline");
    const icons = document.querySelectorAll(".icon");

    for (let i = 0; i < navItems.length; i++) {
      navItems[i].addEventListener("mouseover", () => {
        underlines[i].style.display = "block";
      });
      navItems[i].addEventListener("mouseout", () => {
        underlines[i].style.display = "none";
      });
    }

    for (let i = 0; i < icons.length; i++) {
      icons[i].addEventListener("mouseover", () => {
        icons[i].classList.add("animate__animated");
        icons[i].classList.add("animate__heartBeat");
      });
      icons[i].addEventListener("mouseout", () => {
        icons[i].classList.remove("animate__animated");
        icons[i].classList.remove("animate__heartBeat");
      });
    }

    productsRef.current.addEventListener("mouseover", () => {
      productsDropdownRef.current.style.display = "flex";
      technologyDropdownRef.current.style.display = "none";
      downloadsDropdownRef.current.style.display = "none";
    });
    productsDropdownRef.current.addEventListener("mouseout", () => {
      productsDropdownRef.current.style.display = "none";
    });

    technologyRef.current.addEventListener("mouseover", () => {
      technologyDropdownRef.current.style.display = "flex";
      productsDropdownRef.current.style.display = "none";
      downloadsDropdownRef.current.style.display = "none";
    });
    technologyDropdownRef.current.addEventListener("mouseout", () => {
      technologyDropdownRef.current.style.display = "none";
    });

    downloadsRef.current.addEventListener("mouseover", () => {
      downloadsDropdownRef.current.style.display = "flex";
      productsDropdownRef.current.style.display = "none";
      technologyDropdownRef.current.style.display = "none";
    });
    downloadsDropdownRef.current.addEventListener("mouseout", () => {
      downloadsDropdownRef.current.style.display = "none";
    });
  });

  function showMainNav() {
    function applyStyles() {
      if (window.innerWidth > 1024) {
        mobileNavRef.current.style.display = "block";

        mobileNavRef.current.classList.remove("animate__animated");
        mobileNavRef.current.classList.remove("animate__slideInLeft");
      }
    }

    applyStyles();
    window.addEventListener("resize", applyStyles);
  }

  function showMobileMenu() {
    mobileNavRef.current.style.display = "block";
    mobileNavRef.current.classList.add("animate__animated");
    mobileNavRef.current.classList.add("animate__slideInLeft");
    supportMobileRef.current.style.display = "block";
    horizontalRuleRef.current.style.display = "block";
    mobileNavigation.forEach((item) => {
      item.current.style.display = "flex";
    });

    showMainNav();
    document.body.style.overflow = "hidden";
  }

  function hideMobileMenu() {
    mobileNavRef.current.style.display = "none";
    mobileNavRef.current.classList.remove("animate__animated");
    mobileNavRef.current.classList.remove("animate__slideInLeft");
    supportMobileRef.current.style.display = "none";
    horizontalRuleRef.current.style.display = "none";
    mobileNavigation.forEach((item) => {
      item.current.style.display = "none";
    });

    showMainNav();
    document.body.style.overflowY = "scroll";
  }

  return (
    <header className="flex flex-col max-lg:flex-col-reverse fixed top-0 left-0 right-0 z-10">
      <Preheader />

      <div className="bg-black text-white flex items-center justify-between text-lg p-[1.5625rem] max-md:p-[0.7813rem]">
        <div
          onClick={() => {
            showMobileMenu();
            window.addEventListener("resize", () => {
              if (window.innerWidth > 1024) {
                hideMobileMenu();
              } else {
                showMobileMenu();
              }
            });
          }}
          className="hidden max-lg:block cursor-pointer"
        >
          <MenuIcon />
        </div>

        <a href="#">
          <img src={logo} alt="Roccat Logo" className="max-md:w-[9.375rem]" />
        </a>

        <nav
          ref={mobileNavRef}
          className="max-lg:hidden max-lg:absolute max-lg:overflow-y-scroll max-lg:top-0 max-lg:left-0 max-lg:right-0 max-lg:bottom-0 max-lg:w-full max-lg:h-[100vh] max-lg:z-10"
        >
          <div
            ref={menuHeaderRef}
            className="hidden w-full bg-black items-center justify-center py-[0.625rem] relative"
          >
            <div
              onClick={() => {
                hideMobileMenu();
                window.addEventListener("resize", hideMobileMenu);
              }}
              className="absolute left-[0.625rem] cursor-pointer"
            >
              <CloseIcon />
            </div>

            <img src={logo} alt="Roccat Logo" className="w-[10.9375rem]" />
          </div>

          <div
            ref={menuFormRef}
            className="hidden bg-[#2a2a2a] py-[1.5625rem] items-center justify-center"
          >
            <form className="relative w-[70%] h-[3.125rem]">
              <input
                type="text"
                className="absolute left-0 bg-black w-full py-[0.625rem] pl-[1.25rem] rounded-full"
                placeholder="Search ROCCAT"
              />
              <button
                type="submit"
                className="absolute right-[0.9375rem] top-[0.625rem]"
              >
                <SearchIcon />
              </button>
            </form>
          </div>

          <ul className="flex items-center gap-[1.875rem] max-xl:text-sm max-xl:gap-[1.25rem] max-lg:bg-white max-lg:text-gray-600 max-lg:flex-col max-lg:gap-[3.125rem] max-lg:items-start max-lg:p-[1.875rem] max-lg:text-[1.5rem]">
            <li
              ref={productsRef}
              className="navItem flex items-center gap-[0.625rem] relative max-lg:w-full max-lg:justify-between hover:text-gray-400"
            >
              <a href="#">Products</a>
              <div className="max-lg:hidden">
                <ExpandMoreIcon />
              </div>
              <div className="mobile-arrow-right hidden max-lg:block">
                <ChevronRightIcon />
              </div>

              <div className="scale-in-hor-center underline absolute w-full h-[0.3125rem] bg-white bottom-[-1.9375rem] hidden max-xl:bottom-[-2.0625rem]"></div>

              <div ref={productsDropdownRef} className="hidden">
                <ProductsDropdown />
              </div>
            </li>
            <li className="navItem relative max-lg:w-full hover:text-gray-400">
              <a href="#">Setups</a>
              <div className="scale-in-hor-center underline absolute w-full h-[0.3125rem] bg-white bottom-[-1.9375rem] hidden max-xl:bottom-[-2.0625rem]"></div>
            </li>
            <li
              ref={technologyRef}
              className="navItem flex items-center gap-[0.625rem] relative max-lg:w-full max-lg:justify-between hover:text-gray-400"
            >
              <a href="#">Technology</a>
              <div className="max-lg:hidden">
                <ExpandMoreIcon />
              </div>
              <div className="mobile-arrow-right hidden max-lg:block">
                <ChevronRightIcon />
              </div>

              <div className="scale-in-hor-center underline absolute w-full h-[0.3125rem] bg-white bottom-[-1.9375rem] hidden max-xl:bottom-[-2.0625rem]"></div>

              <div ref={technologyDropdownRef} className="hidden">
                <TechnologyDropdown />
              </div>
            </li>
            <li
              ref={downloadsRef}
              className="navItem flex items-center gap-[0.625rem] relative max-lg:w-full max-lg:justify-between hover:text-gray-400"
            >
              <a href="#">Downloads</a>
              <div className="max-lg:hidden">
                <ExpandMoreIcon />
              </div>
              <div className="mobile-arrow-right hidden max-lg:block">
                <ChevronRightIcon />
              </div>

              <div className="scale-in-hor-center underline absolute w-full h-[0.3125rem] bg-white bottom-[-1.9375rem] hidden max-xl:bottom-[-2.0625rem]"></div>

              <div ref={downloadsDropdownRef} className="hidden">
                <DownloadsDropdown />
              </div>
            </li>
            <li className="navItem relative max-lg:w-full hover:text-gray-400">
              <a href="#">Creators</a>
              <div className="scale-in-hor-center underline absolute w-full h-[0.3125rem] bg-white bottom-[-1.9375rem] hidden max-xl:bottom-[-2.0625rem]"></div>
            </li>
            <li className="navItem relative max-lg:w-full hover:text-gray-400">
              <a href="#">Blog</a>
              <div className="scale-in-hor-center underline absolute w-full h-[0.3125rem] bg-white bottom-[-1.9375rem] hidden max-xl:bottom-[-2.0625rem]"></div>
            </li>
          </ul>

          <ul
            ref={mobileLinks1Ref}
            className="hidden text-gray-600 flex-col gap-[3.125rem] items-start p-[1.875rem] text-[1.5rem] bg-white"
          >
            <MobileNavItem
              title="Sign In"
              icon={<PersonOutlineIcon />}
              image=""
            />
            <MobileNavItem
              title="Favorites"
              icon={<FavoriteBorderIcon />}
              image=""
            />
            <MobileNavItem
              title="US"
              icon={<ChevronRightIcon />}
              image={usLangCard}
            />
          </ul>

          <a
            ref={supportMobileRef}
            href="#"
            className="hidden text-gray-500 text-sm text-center pb-[0.9375rem] bg-white"
          >
            Support
          </a>
          <hr ref={horizontalRuleRef} className="hidden bg-black h-[0.3125rem]" />

          <ul
            ref={mobileLinks2Ref}
            className="hidden text-gray-600 flex-col gap-[3.125rem] items-start p-[1.875rem] text-[1.5rem] bg-white z-10"
          >
            <MobileNavItem
              title="ROCCAT"
              icon={<ChevronRightIcon />}
              image=""
            />
            <MobileNavItem
              title="Support"
              icon={<ChevronRightIcon />}
              image=""
            />
            <MobileNavItem
              title="Orders"
              icon={<ChevronRightIcon />}
              image=""
            />
            <MobileNavItem
              title="Company"
              icon={<ChevronRightIcon />}
              image=""
            />
          </ul>

          <div
            ref={mobileFooterRef}
            className="hidden bg-[#1e1e1e] text-gray-500 flex-col items-center justify-center gap-[0.625rem] text-sm pt-[0.9375rem] pb-[1.875rem]"
          >
            <span>&copy; ROCCAT 2023</span>
            <span>ROCCAT® is a Turtle Beach Brand</span>
          </div>
        </nav>

        <div className="flex items-center gap-[1.25rem] max-lg:flex-row-reverse max-xl:gap-[0.625rem]">
          <a
            href="#"
            className="icon w-[2.1875rem] h-[2.1875rem] rounded-full flex items-center justify-center duration-200 hover:bg-gray-800 max-lg:hidden"
          >
            <SearchIcon />
          </a>
          <a
            href="#"
            className="icon w-[2.1875rem] h-[2.1875rem] rounded-full flex items-center justify-center duration-200 hover:bg-gray-800 max-lg:hidden"
          >
            <FavoriteBorderIcon />
          </a>
          <a
            href="#"
            className="icon w-[2.1875rem] h-[2.1875rem] rounded-full flex items-center justify-center duration-200 hover:bg-gray-800"
          >
            <ShoppingCartOutlinedIcon />
          </a>
          <a
            href="#"
            className="icon w-[2.1875rem] h-[2.1875rem] rounded-full flex items-center justify-center duration-200 hover:bg-purple-800"
          >
            <PersonOutlineIcon />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
