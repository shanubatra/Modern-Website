import React from "react";
import { clients } from "../constant";
import styles from "../style";

export default function Client() {
  return (
    <>
      <section className={`${styles.flexCenter} my-4`}>
        <div className={`${styles.flexCenter} flex-wrap w-full`}>
          {clients.map((item, index) => {
            return (
              <div
                key={item.id}
                className={`${styles.flexCenter} flex-1 sm:min-w-[192px] min-w-[120px]`}
              >
                {" "}
                <img
                  src={item.logo}
                  alt="clients"
                  className={`sm:w-[192px] h-[60px] object-contain w-[100px] `}
                />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
