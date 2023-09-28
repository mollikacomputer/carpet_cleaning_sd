"use client"
import React, { useState } from "react";
import { CountUp } from 'use-count-up';
import Styles from "@/app/countuppage.module.css";
import ScrollTrigger from "react-scroll-trigger";

const CountUpPage = () => {

  const [counterOn, setCounterOn] = useState(false);

  return (
  <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)} >
    
    <div className={Styles.container}>
      <div className={Styles.wrapper}>
        <div className={Styles.countupstyle}>
            <span className={Styles.num}>
            {counterOn && <CountUp isCounting start={0} end={1120} duration={3.2} /> }  
            </span>  
            <p className={Styles.text}> Active User  </p>
        </div>
      </div>
      <div className={Styles.wrapper}>
        <div className={Styles.countupstyle}>
            <span className={Styles.num} > 
            {counterOn && <CountUp isCounting start={0} end={525} duration={3.2} /> }
            </span>  
            <p className={Styles.text}> Active Company  </p>
        </div>
      </div>
      <div className={Styles.wrapper}>
        <div className={Styles.countupstyle}>
            <span className={Styles.num}>
            {counterOn && <CountUp isCounting start={0} end={510} duration={3.2} /> }
            </span>  
            <p className={Styles.text}> Happy People </p>
        </div>
      </div>
      {/* {firstTest()} */}
    </div>
  </ScrollTrigger>
  );
};

export default CountUpPage;