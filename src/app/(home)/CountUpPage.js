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
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-16 px-10">

       <div
        className="card max-w-mx bg-base-100 shadow-xl p-4 justify-center items-center"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
        data-aos="fade-right"
      >
        <div className="mb-6">
        <FaRegUser fontSize={40} />
        </div>
        <div className="text-3xl font-bold mb-6">
        {counterOn && <CountUp isCounting start={0} end={1120} duration={3.2} /> }
        </div>
      </div>
       <div
        className="card bg-base-100 shadow-xl p-4 justify-center items-center"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
        data-aos="fade-right"
      >
        <div className="mb-6">
        <GiVacuumCleaner fontSize={40} />
        </div>
        <div className="text-3xl font-bold mb-6">
        {counterOn && <CountUp isCounting start={0} end={1120} duration={3.2} /> }
        </div>
      </div>
       <div
        className="card bg-base-100 shadow-xl p-4 justify-center items-center"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
        data-aos="fade-right"
      >
        <div className="mb-6">
        <FaRug fontSize={40} />
        </div>
        <div className="text-3xl font-bold mb-6">
        {counterOn && <CountUp isCounting start={0} end={1120} duration={3.2} /> }
        </div>
      </div>
      </div>
  </ScrollTrigger>
  );
};

export default CountUpPage;