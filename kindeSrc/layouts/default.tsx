import React from "react";
import MarketingPanel from "../components/marketing-panel";

export const DefaultLayout = (props: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen w-full bg-gradient-to-br from-slate-50 to-slate-100 p-4 lg:p-6 overflow-hidden items-center justify-center">
      <div className="flex w-full h-full min-h-[600px] max-h-[900px] aspect-[16/9] max-w-[1600px] mx-auto bg-white rounded-[2rem] shadow-2xl overflow-hidden ring-1 ring-slate-200/50">
        {/* Left side - Login Form */}
        <div className="flex w-full flex-col justify-center bg-white lg:w-5/12 xl:w-4/12 p-8 lg:p-12 relative z-10 overflow-y-auto">
          {props.children}
        </div>

        {/* Right side - Hero/Image */}
        <div className="hidden lg:block lg:w-7/12 xl:w-8/12 h-full relative overflow-hidden bg-slate-900">
          <MarketingPanel />
        </div>
      </div>
    </div>
  );
};