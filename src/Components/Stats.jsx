import React from "react";
import { stats } from "../constant";
import styles from "../style";

export default function Stats() {
  return (
    <>
      <section
        className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}
      >
        {stats.map((item, index) => {
          return (
            <div
              key={item.id}
              className={`flex flex-1 justify-start items-center flex-row m-3 `}
            >
              <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] mr-6 leading-[43px] text-white">
                {item.value}
              </h4>
              <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[2px] text-gradient uppercase">
                {item.title}
              </p>
            </div>
          );
        })}
      </section>
    </>
  );
}
