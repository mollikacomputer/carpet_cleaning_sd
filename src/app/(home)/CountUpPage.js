"use client"
import React, { useState } from "react";
import { CountUp } from 'use-count-up';
import Styles from "@/app/countuppage.module.css";
import ScrollTrigger from "react-scroll-trigger";
import { FaRegUser,  } from "react-icons/fa";
import { GiVacuumCleaner} from "react-icons/gi";
import { FaRug } from "react-icons/fa6";
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
            <div className="flex items-center justify-center">
                <FaRegUser fontSize={70} />
            </div>
            
        </div>
      </div>
      <div className={Styles.wrapper}>
        <div className={Styles.countupstyle}>
            <span className={Styles.num} > 
            {counterOn && <CountUp isCounting start={0} end={525} duration={3.2} /> }
            </span>  
            <div className="flex items-center justify-center">
                <GiVacuumCleaner fontSize={70} />
            </div>
        </div>
      </div>
      <div className={Styles.wrapper}>

        <div className={Styles.countupstyle}>
            <span className={Styles.num}>
            {counterOn && <CountUp isCounting start={0} end={510} duration={3.2} /> }
            </span>  
            <div className="flex items-center justify-center">
                <FaRug fontSize={70} />
            </div>
            
        </div>
      </div>
      {/* {firstTest()} */}
    </div>
  </ScrollTrigger>
  );
};

export default CountUpPage;