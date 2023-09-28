"use client";

import { useState } from "react";
import { afterLoginNavData, beforeLoginNavData } from "@/data/navData";

import Link from "next/link";

import NavLink from "./NavLink";

const Navbar = () => {
const user = null;
  const navData = user ? afterLoginNavData : beforeLoginNavData;

  const [navToggle, setNavToggle] = useState(false);

  return (
    <nav className="navbar sticky top-0 z-10 bg-base-200 shadow-lg dark:bg-slate-900 lg:pr-3">
      <div className="flex-1">
        <Link href="/" className="btn-ghost btn text-2xl normal-case">
          Carpet Cleaning
        </Link>
      </div>
      <div
        className={`absolute ${
          navToggle ? "left-0" : "left-[-120%]"
        } top-[4.5rem] flex w-full flex-col bg-slate-200 pb-3 pt-2 transition-all duration-300 dark:bg-slate-900 lg:static lg:w-[unset] lg:flex-row lg:bg-transparent lg:pb-0 lg:pt-0 dark:lg:bg-transparent`}
      >
        <ul className="menu menu-horizontal flex-col px-1 lg:flex-row">
          {navData.map(({ path, title }) => (
            <li key={path} className="mx-auto">
              <NavLink
                onClick={() => setNavToggle(false)}
                href={path}
                activeClassName="text-blue-500"
                exact={path === "/"}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <label className="swap-rotate swap btn-ghost btn-circle btn ml-2 bg-white dark:bg-slate-800 lg:hidden">
        <input
          checked={navToggle}
          onClick={() => setNavToggle((pre) => !pre)}
          // onChange={() => setNavToggle((pre) => !pre)}
          type="checkbox"
        />
        <svg
          className="swap-off fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
        </svg>
        <svg
          className="swap-on fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
        </svg>
      </label>
    </nav>
  );
};

export default Navbar;

// "use client"
// import { useState } from "react";
// import NavLink from "./NavLink";
// import {
//   afterLoginNavData,
//   beforeLoginNavData,
//   commonNavData,
// } from "@/data/navData";
// const Navbar = () => {
//   const user = null;
//   const navData = user ? afterLoginNavData : beforeLoginNavData;
//   const [navToggle, setNavToggle] = useState(false);
//   return (
//     <div className="navbar bg-base-100">
//       <div className="navbar-start">
//         <div className="dropdown">
//           <label tabIndex={0} className="btn btn-ghost lg:hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h8m-8 6h16"
//               />
//             </svg>
//           </label>
//           <ul
//             tabIndex={0}
//             // className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
//             className={`absolute ${
//                 navToggle ? "left-0" : "left-[-120%]"
//               } top-[4.5rem] flex w-full flex-col bg-slate-200 pb-3 pt-2 transition-all duration-300 dark:bg-slate-900 lg:static lg:w-[unset] lg:flex-row lg:bg-transparent lg:pb-0 lg:pt-0 dark:lg:bg-transparent`}      
//           >

//           </ul>
//         </div>
//         <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
//       </div>
//       <div className={`absolute ${
//                 navToggle ? "left-0" : "left-[-120%]"
//               } top-[4.5rem] flex w-full flex-col bg-slate-200 pb-3 pt-2 transition-all duration-300 dark:bg-slate-900 lg:static lg:w-[unset] lg:flex-row lg:bg-transparent lg:pb-0 lg:pt-0 dark:lg:bg-transparent`}      
//          >
//         <ul className="menu menu-horizontal px-1">
//             {navData.map(({path, title})=>(
//                     <li className="mx-2" key={path}>
//                         <NavLink
//                         exact ={path==='/'}
//                         activeClassName={"text-blue-500"}
//                         href={path}
//                         >
//                         {title}
//                         </NavLink>
//                     </li>
//                 ))}
//         </ul>
//       </div>
//     </div>

//     // <nav className="flex justify-between container mx-auto">
//     //     <h2 className="font-2xl" >Carpet Cleaner company</h2>
//     //     <ul className="flex">
//             // {navData.map(({path, title})=>(
//             //     <li className="mx-2" key={path}>
//             //         <NavLink
//             //         exact ={path==='/'}
//             //         activeClassName={"text-blue-500"}
//             //         href={path}
//             //         >
//             //         {title}
//             //         </NavLink>
//             //     </li>
//             // ))}
//     //     </ul>
//     // </nav>
//   );
// };

// export default Navbar;
