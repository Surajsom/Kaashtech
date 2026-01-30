import React from "react";

import { Youtube , Linkedin ,Instagram ,Facebook , MapPin , Mail } from 'lucide-react';

  
function Topstripe() {
  return (
    <div className="top-ribbon hidden md:flex w-full bg-(--background) h-14 text-white items-center justify-between font-[Urbanist]">
      <div className="left flex h-full divide-x-[0.001px] divide-[#495867] border-[#495867] border-[0.001px]">
        <span className="text-sm flex items-center justify-center h-full px-5 text-red">
          <MapPin className="px-1 "/> 30 N Gould St Ste R, Sheridan, WY 82801
        </span>
        <span className="text-sm flex items-center justify-center h-full px-5">
          <Mail className=" px-1"/> contact@kaashtech.com
        </span>
      </div>
      <div className="right h-full">
        <ul className="social flex justify-end items-center h-full divide-x-[0.01px] divide-[#495867] border-[#495867] border-[0.01px]">
          <li className="px-7 cursor-pointer flex items-center justify-center h-full group [&>*:first-child]:transition-transform [&>*:first-child]:duration-1500  [&>*:first-child]:ease-in-out [&>*:first-child]:group-hover:rotate-y-360 [&>*:first-child]:group-hover:scale-120">
           <Facebook className="w-5"/>
          </li>
          <li className="px-7 cursor-pointer flex items-center justify-center h-full group [&>*:first-child]:transition-transform [&>*:first-child]:duration-1500 [&>*:first-child]:ease-in-out [&>*:first-child]:group-hover:rotate-y-360 [&>*:first-child]:group-hover:scale-120">
            < Instagram className="w-5" />
          </li>
          <li className="px-7 cursor-pointer flex items-center justify-center h-full group [&>*:first-child]:transition-transform [&>*:first-child]:duration-1500 [&>*:first-child]:ease-in-out [&>*:first-child]:group-hover:rotate-y-360 [&>*:first-child]:group-hover:scale-120">
            <Linkedin className="w-5"/>
          </li>
          <li className="px-7 cursor-pointer flex items-center justify-center h-full group [&>*:first-child]:transition-transform [&>*:first-child]:duration-1500 [&>*:first-child]:ease-in-out [&>*:first-child]:group-hover:rotate-y-360 [&>*:first-child]:group-hover:scale-120">
            <Youtube className="w-5"/>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Topstripe;
