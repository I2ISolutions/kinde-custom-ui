"use server";

import React from "react";
import {
  getKindeCSRF,
  getKindeNonce,
  getKindeRequiredCSS,
  getKindeRequiredJS,
  getSVGFaviconUrl,
  setKindeDesignerCustomProperties,
  type KindePageEvent,
} from "@kinde/infrastructure";

import { DefaultLayout } from "../../layouts/default";

export const Layout = async ({
  request,
  context,
  children,
}: KindePageEvent & { children: React.ReactNode }) => {
  return (
    <html lang={request.locale.lang} dir={request.locale.isRtl ? "rtl" : "ltr"}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex" />
        <meta name="csrf-token" content={getKindeCSRF()} />
        <title>{context.widget.content.page_title}</title>

        <link rel="icon" href={getSVGFaviconUrl()} type="image/svg+xml" />
        {getKindeRequiredCSS()}
        {getKindeRequiredJS()}

        {/* Kinde designer properties (base tokens) */}
        <style nonce={getKindeNonce()}>
          {`:root {
          ${setKindeDesignerCustomProperties({
            baseBackgroundColor: "#ffffff",
            baseLinkColor: "#0f172a",
            buttonBorderRadius: "0.75rem",
            primaryButtonBackgroundColor: "#0f172a",
            primaryButtonColor: "#ffffff",
            inputBorderRadius: "0.75rem",
          })}}
          `}
        </style>

        {/* Tailwind + component overrides (compiled by Kinde) */}
        <link rel="stylesheet" href="/kindeSrc/styles/globals.css" />
      </head>
      <body>
        <div data-kinde-root="/admin">
          <DefaultLayout>{children}</DefaultLayout>
        </div>
      </body>
    </html>
  );
};


