import React from "react";
import styles from "./style";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Stats from "./Components/Stats";
import Business from "./Components/Business";
import Billing from "./Components/Billing";
import CardDeal from "./Components/CardDeal";
import Testimonials from "./Components/Testimonials";
import Client from "./Components/Client";
import Footer from "./Components/Footer";
import Cta from "./Components/Cta";

export default function App() {
  return (
    <>
      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.flexCenter} ${styles.paddingX}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        <div className={`${styles.flexStart} ${styles.bgPrimary}`}>
          <div className={`${styles.boxWidth}`}>
            <Home />
          </div>
        </div>

        <div
          className={`${styles.flexStart} ${styles.paddingX} ${styles.bgPrimary}`}
        >
          <div className={`${styles.boxWidth}`}>
            <Stats />
            <Business />
            <Billing />
            <CardDeal />
            <Testimonials />
            <Client />
            <Cta />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
