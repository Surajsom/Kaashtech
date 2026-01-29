import React from "react";

export default function WelcomeElement({item , className = ""}) {
  return (
 <section className="w-full ">
      <div className={`relative flex max-w-5xl items-center justify-center  ${className}`}>
      
        
        {/* Decorative element (left side) */}
       

        {/* Text */}
        <h2 className="relative z-10 text-center text-sm font-semibold tracking-widest text-red-500">
         {item}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-3">
          <div className="relative h-7 w-7 rounded-xs bg-[#46872c] opacity-60 shadow-md">
            <div className="absolute -right-2 -top-2 h-4 w-4 rounded-xs bg-[#7bf474] opacity-80 shadow-sm"></div>
          </div>
        </div>
        </h2>
      </div>
    </section>
  );
}
