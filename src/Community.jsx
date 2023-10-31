import React, { useRef, useState } from "react";
import thumbsUp from "./assets/thumbs-up.webp";
import twitter from "./assets/twitter.svg";
import facebook from "./assets/facebook.svg";
import instagram from "./assets/instagram.svg";
import youtube from "./assets/youtube.svg";
import discord from "./assets/discord.svg";
import twitch from "./assets/twitch.svg";
import tiktok from "./assets/tiktok.svg";
import reddit from "./assets/reddit.svg";

const Community = () => {
  const emailInputRef = useRef(null);
  const checkboxRef = useRef(null);
  const errorMessageRef = useRef(null);

  const [input, setInput] = useState("");

  const inputPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  function checkInput(e) {
    e.preventDefault();

    if (inputPattern.test(input) && checkboxRef.current.checked) {
      emailInputRef.current.style.outline = "0.0625rem solid black";
      errorMessageRef.current.style.display = "none";
    } else {
      emailInputRef.current.style.outline = "0.125rem solid red";
      errorMessageRef.current.style.display = "block";
    }

    if (inputPattern.test(input)) {
      emailInputRef.current.style.outline = "0.0625rem solid black";
    }
  }

  return (
    <section className="flex items-start justify-between p-[3.125rem] gap-[2.5rem] max-lg:flex-col">
      <div className="flex items-start gap-[1.875rem] max-lg:items-center">
        <img
          src={thumbsUp}
          alt="Thumbs Up"
          className="w-[12.5rem] max-md:w-[6.25rem]"
        />

        <div>
          <h3 className="text-[2rem] font-bold max-xl:text-[1.5rem] max-lg:text-[1.125rem]">
            Join Our Community
          </h3>
          <p className="my-[1.25rem] text-xl max-xl:text-sm">
            Giveaways, gaming gear, our discord channel <br /> and more:
          </p>
          <div className="flex flex-wrap items-center gap-[1.25rem]">
            <a href="#">
              <img src={twitter} alt="twitter" className="w-[1.25rem] h-[1.25rem]" />
            </a>
            <a href="#">
              <img
                src={facebook}
                alt="facebook"
                className="w-[1.25rem] h-[1.25rem]"
              />
            </a>
            <a href="#">
              <img
                src={instagram}
                alt="instagram"
                className="w-[1.25rem] h-[1.25rem]"
              />
            </a>
            <a href="#">
              <img src={youtube} alt="youtube" className="w-[1.25rem] h-[1.25rem]" />
            </a>
            <a href="#">
              <img src={discord} alt="discord" className="w-[1.25rem] h-[1.25rem]" />
            </a>
            <a href="#">
              <img src={twitch} alt="twitch" className="w-[1.25rem] h-[1.25rem]" />
            </a>
            <a href="#">
              <img src={tiktok} alt="tiktok" className="w-[1.25rem] h-[1.25rem]" />
            </a>
            <a href="#">
              <img src={reddit} alt="reddit" className="w-[1.25rem] h-[1.25rem]" />
            </a>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <h3 className="text-[2rem] mb-[1.25rem] max-xl:text-[1.5rem] max-lg:text-[1.125rem]">
          Get 10% Off
        </h3>
        <p className="mb-[1.5625rem] max-xl:text-sm">
          Sign up and be the first to know about new products, deals and events.
          Plus, new members receive 10% OFF their first order on ROCCAT!
        </p>

        <form>
          <div className="flex items-end gap-[1.875rem] mb-[1.25rem] max-xl:gap-[0.9375rem]">
            <div className="flex-1">
              <label htmlFor="email" className="block mb-[0.3125rem] max-xl:text-sm">
                Email (Required)
              </label>
              <input
                ref={emailInputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full border-none outline outline-1 p-[0.625rem] focus:outline-2 focus:outline-blue-500"
              />
            </div>
            <button
              onClick={checkInput}
              type="submit"
              className="border-none outline-none bg-black text-white py-[0.6875rem] px-[1.25rem] rounded-xl"
            >
              Subscribe
            </button>
          </div>
          <div className="flex items-start gap-[0.625rem]">
            <input ref={checkboxRef} type="checkbox" className="mt-[0.3125rem]" />
            <p className="max-xl:text-sm">
              I hereby give my freely given consent to Turtle Beach to receive
              ROCCAT Marketing Communications by email; I am aware that I can
              always revoke my consent, as described in our{" "}
              <a href="#" className="underline">
                privacy policy.
              </a>
            </p>
            <small
              ref={errorMessageRef}
              className="text-red-500 text-base hidden"
            >
              *Required to submit form
            </small>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Community;
