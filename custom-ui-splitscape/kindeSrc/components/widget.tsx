import React from "react";
import { getKindeWidget } from "@kinde/infrastructure";
import { Logo } from "./logo";
import { MockKindeWidget } from "./mock-widget";

export const Widget = (props: { heading: string; description: string }) => {
  // Use provided logo or fallback to Kinde's
  const logoUrl = "https://res.cloudinary.com/dr9vzaa7u/image/upload/v1765126845/Zopkit_Simple_Logo_glohfr.jpg";

  // Check if we're in local development (getKindeWidget returns a string ID or invalid content)
  const widgetContent = getKindeWidget();
  const isLocalDev = typeof widgetContent === 'string' || 
                     widgetContent === null ||
                     widgetContent === undefined ||
                     (typeof widgetContent === 'object' && !React.isValidElement(widgetContent));

  return (
    <main className="w-full max-w-[400px] mx-auto px-6 lg:px-0">
      <div className="mb-12 flex justify-center lg:justify-start">
        <Logo src={logoUrl} />
      </div>

      <div className="mb-10 text-center lg:text-left">
        <h1 className="text-[32px] font-bold text-slate-900 mb-3 tracking-tight leading-tight">
          {props.heading}
        </h1>
        <p className="text-slate-500 font-medium text-lg leading-relaxed">
          {props.description}
        </p>
      </div>

      <div className="w-full">
        {/* Kinde Widget Container */}
        <div className="space-y-6">
          {isLocalDev ? <MockKindeWidget /> : widgetContent}
        </div>
      </div>

      <div className="mt-12 text-center lg:text-left text-sm text-slate-400">
        <div className="flex justify-center lg:justify-start gap-6 mb-6">
          <a href="#" className="font-medium text-slate-500 hover:text-slate-900 transition-colors">Privacy</a>
          <a href="#" className="font-medium text-slate-500 hover:text-slate-900 transition-colors">Terms</a>
          <a href="#" className="font-medium text-slate-500 hover:text-slate-900 transition-colors">Help</a>
        </div>
        <p className="text-slate-400">
          &copy; {new Date().getFullYear()} Zopkit Inc. All rights reserved.
        </p>
      </div>
    </main>
  );
};