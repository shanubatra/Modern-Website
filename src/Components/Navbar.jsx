import React, { useState } from "react";
import { close, logo, menu } from "../images/images";
import { navLinks } from "../constant";
import styles from "../style";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className={`w-full py-6 navbar ${styles.flexBetween}`}>
        <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
        <ul
          className={`list-none sm:flex justify-end items-center flex-1 hidden`}
        >
          {navLinks.map((item, index) => {
            return (
              <li
                key={item.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? "mr-0" : "mr-10"
                } text-white`}
              >
                <a href={`#${item.id}`}>{item.title}</a>
              </li>
            );
          })}
        </ul>

        <div className={`sm:hidden flex justify-end items-center flex-1`}>
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle((prev) => !prev)}
          />
        </div>
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul
            className={`list-none flex flex-col justify-end items-center flex-1 `}
          >
            {navLinks.map((item, index) => {
              return (
                <li
                  key={item.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] ${
                    index === navLinks.length - 1 ? "mr-0" : "mb-4"
                  } text-white`}
                >
                  <a href={`#${item.id}`}>{item.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
}
