import React from "react";
import styles from "../style";
import { feedback } from "../constant";
import { quotes } from "../images/images";
export default function Testimonials() {
  return (
    <>
      <section
        id="clients"
        className={`${styles.padding} ${styles.flexCenter} flex-col relative`}
      >
        <div className="absolute z-[0] w-[60%] h-[60%] -right-[40%] rounded-full blue__gradient " />
        <div
          className={`${styles.flexBetween} w-full md:flex-row flex-col sm:mb-16v mb-6 relative z-[1]`}
        >
          <h1 className={styles.heading2}>
            What people are <br className="sm:block hidden" /> saying about us
          </h1>
          <div className="w-full md:mt-0 mt-6 ">
            <p className={`${styles.paragraph} text-left max-w-[450px]`}>
              Everything you need to accept card payments and grow your business
              anywhere on the planet.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
          {feedback.map((item, index) => {
            return (
              <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] feedback-card max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 ">
                <img
                  src={quotes}
                  alt="feedback"
                  className=" w-[42px] h-[27px] object-contain"
                />
                <p
                  className={`font-poppins font-normal text-[18px] leading-[32px] text-white my-10`}
                >
                  {item.content}
                </p>
                <div className="flex flex-row ">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-[48px]  h-[48px] rounded-full"
                  />
                  <div className="flex flex-col ml-4">
                    <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
                      {item.name}
                    </h4>
                    <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
