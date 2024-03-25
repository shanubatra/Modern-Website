import React from "react";
import styles from "../style";
import { logo } from "../images/images";
import { socialMedia, footerLinks } from "../constant";

export default function Footer() {
  return (
    <>
      <section className={`${styles.flexCenter} ${styles.paddingY} flex-col `}>
        <div
          className={`${styles.flexStart} md:flex-row flex-col sm:mb-10 mb-0 w-full `}
        >
          <div className="flex-1 flex flex-col justify-start mr-10">
            <img
              src={logo}
              alt="hoobank"
              className="object-contain w-[266px] h-[72px] "
            />
            <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
              A new way to make the payments easy, reliable and secure
            </p>
          </div>
          <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
            {footerLinks.map((item, index) => {
              return (
                <div
                  className="flex flex-col ss:my-0 my-4 min-w-[150px]"
                  key={index}
                >
                  <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white ">
                    {item.title}
                  </h4>
                  <ul className="list-none mt-4">
                    {item.links.map((items, index) => {
                      return (
                        <li
                          key={items.name}
                          className={`font-poppins font-normal text-[14px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                            index !== item.links.length - 1 ? "mb-4" : "mb-0"
                          }`}
                        >
                          {items.name}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
          <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
            2021 HooBank. All Right Reserved{" "}
          </p>
          <div className="flex flex-row md:mt-0 mt-4 ">
            {socialMedia.map((item, index) => {
              return (
                <img
                  src={item.icon}
                  key={index}
                  alt={item.id}
                  className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                    index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                  } `}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
