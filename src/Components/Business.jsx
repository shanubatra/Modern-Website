import React from "react";
import { features } from "../constant";
import styles, { layout } from "../style";
// import Button from "./Button";

export default function Business() {
  return (
    <>
      <section id="features" className={layout.section}>
        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>
            You do the business,
            <br className="sm:block hidden" /> we’ll handle the money.
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            With the right credit card, you can improve your financial life by
            building credit, earning rewards and saving money. But with hundreds
            of credit cards on the market.
          </p>
          <button
            type="button"
            className={`py-4 px-6 bg-blue-gradient font-poppins leading-[27px] font-medium text-[18px] text-primary outline-none mt-10 rounded-[10px] hover:text-secondary bordermy`}
          >
            Get Started
          </button>
        </div>
        <div className={`${layout.sectionImg} flex-col`}>
          {features.map((item, index) => {
            return (
              <div
                key={item.id}
                className={`flex flex-row p-6 rounded-[20px] ${
                  index !== features.length - 1 ? "mb-6" : "mb-0"
                } feature-card`}
              >
                <div
                  className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue `}
                >
                  <img
                    src={item.icon}
                    alt="icon"
                    className="w-[50%] h-[50%] object-contain"
                  />
                </div>
                <div className="flex-1 flex flex-col ml-3">
                  <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px]">
                    {item.title}
                  </h4>
                  <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
                    {item.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
