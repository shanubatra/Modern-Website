import React from "react";
import { card } from "../images/images";
import styles, { layout } from "../style";

export default function CardDeal() {
  return (
    <>
      <section className={layout.section}>
        <div className={layout.sectionInfo}>
          <h2 className={`${styles.heading2}`}>
            Find a better card deal
            <br className="sm:block hidden" />
            in few easy steps.
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] text-dimWhite`}>
            Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
            aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
          </p>
          <button
            type="button"
            className={`py-4 px-6 bg-blue-gradient font-poppins leading-[27px] font-medium text-[18px] text-primary outline-none mt-10 rounded-[10px] hover:text-secondary bordermy`}
          >
            Get Started
          </button>
        </div>
        <div className={layout.sectionImg}>
          <img src={card} alt="card" className="w-[100%] h-[100%] " />
        </div>
      </section>
    </>
  );
}
