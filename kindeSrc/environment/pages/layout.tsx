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

        {/* Critical styles for Kinde widget and components */}
        <style nonce={getKindeNonce()} dangerouslySetInnerHTML={{
          __html: `
            * {
              font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            }
            
            /* Kinde widget styling */
            [data-kinde-choice-separator] {
              margin-top: 1.5rem;
              margin-bottom: 1.5rem;
              display: flex;
              align-items: center;
              font-size: 0.75rem;
              font-weight: 600;
              text-transform: uppercase;
              letter-spacing: 0.05em;
              color: rgb(100 116 139);
            }
            [data-kinde-choice-separator]::before,
            [data-kinde-choice-separator]::after {
              content: "";
              flex: 1 1 0%;
              border-top-width: 1px;
              border-color: rgb(226 232 240);
            }
            [data-kinde-choice-separator]::before {
              margin-right: 1rem;
            }
            [data-kinde-choice-separator]::after {
              margin-left: 1rem;
            }
            [data-kinde-layout-auth-buttons] {
              display: flex;
              flex-direction: column;
              gap: 0.75rem;
            }
            [data-kinde-layout-auth-buttons-item] button,
            [data-kinde-button-secondary] {
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 0.625rem;
              padding: 0.75rem 1rem;
              border-radius: 0.75rem;
              border-width: 1px;
              border-color: rgb(226 232 240);
              background-color: rgb(255 255 255);
              color: rgb(51 65 85);
              font-weight: 600;
              cursor: pointer;
              transition: all 0.2s;
            }
            [data-kinde-layout-auth-buttons-item] button:hover,
            [data-kinde-button-secondary]:hover {
              background-color: rgb(248 250 252);
              border-color: rgb(203 213 225);
            }
            [data-kinde-input] {
              width: 100%;
              border-radius: 0.75rem;
              border-width: 1px;
              border-color: rgb(226 232 240);
              background-color: rgb(255 255 255);
              padding: 0.75rem 1rem;
              color: rgb(15 23 42);
              font-size: 1rem;
            }
            [data-kinde-input]::placeholder {
              color: rgb(203 213 225);
            }
            [data-kinde-input]:focus {
              border-color: rgb(37 99 235);
              outline: 2px solid transparent;
              outline-offset: 2px;
              box-shadow: 0 0 0 4px rgb(59 130 246 / 0.1);
            }
            [data-kinde-label] {
              display: block;
              font-size: 0.875rem;
              font-weight: 600;
              color: rgb(51 65 85);
              margin-left: 0.25rem;
              margin-bottom: 0.5rem;
            }
            [data-kinde-button-primary] {
              width: 100%;
              border-radius: 0.75rem;
              background-image: linear-gradient(to right, rgb(15 23 42), rgb(30 41 59));
              padding: 0.875rem 1rem;
              font-size: 1rem;
              font-weight: 700;
              color: rgb(255 255 255);
              box-shadow: 0 10px 15px -3px rgb(15 23 42 / 0.2);
              border: none;
              cursor: pointer;
              transition: all 0.2s;
            }
            [data-kinde-button-primary]:hover {
              background-image: linear-gradient(to right, rgb(30 41 59), rgb(51 65 85));
              box-shadow: 0 10px 15px -3px rgb(15 23 42 / 0.3);
            }
            
            /* Ensure body and html take full height */
            html, body {
              height: 100%;
              margin: 0;
              padding: 0;
            }
            
            [data-kinde-root] {
              height: 100vh;
              width: 100%;
            }
            
            [data-kinde-root] > div {
              display: flex;
              width: 100%;
              height: 100%;
              flex-direction: column;
            }
            
            /* Responsive layout for desktop */
            @media (min-width: 1024px) {
              [data-kinde-root] > div {
                flex-direction: row !important;
              }
              [data-kinde-root] > div > div:first-child {
                width: 41.666667% !important;
                flex-shrink: 0;
                max-width: 500px;
              }
              [data-kinde-root] > div > div:last-child,
              #marketing-panel {
                display: block !important;
                width: 58.333333% !important;
                height: 100% !important;
                position: relative;
                overflow: hidden;
                background-color: rgb(15 23 42);
                flex-shrink: 0;
              }
            }
            
            /* Logo styling */
            img[alt="Zopkit"] {
              height: 5rem !important;
              width: auto !important;
              max-width: 200px !important;
              object-fit: contain !important;
              display: block !important;
            }
            
            /* Link hover effects */
            a:hover {
              color: rgb(15 23 42) !important;
            }
          `
        }} />
      </head>
      <body>
        <div data-kinde-root="/admin">
          <DefaultLayout>{children}</DefaultLayout>
        </div>
      </body>
    </html>
  );
};


