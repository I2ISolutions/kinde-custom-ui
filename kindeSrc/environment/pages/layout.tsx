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
            
            /* Remove old layout constraints */
            /*
            .kinde-layout-container {
              display: flex !important;
              flex-direction: column !important;
            }
            */
            
            /* Responsive layout for desktop */
            /*
            @media screen and (min-width: 1024px) {
              [data-kinde-root] > div,
              .kinde-layout-container {
                flex-direction: row !important;
              }
              .kinde-login-panel {
                width: 41.666667% !important;
                flex-shrink: 0;
                max-width: 500px;
              }
              .kinde-marketing-panel,
              #marketing-panel {
                display: block !important;
                width: 58.333333% !important;
                height: 100% !important;
                position: relative !important;
                overflow: hidden !important;
                background-color: rgb(15 23 42) !important;
                flex-shrink: 0 !important;
              }
            }
            */
            
            /* Logo styling */
            img[alt="Zopkit"] {
              height: 5rem !important;
              width: auto !important;
              max-width: 200px !important;
              object-fit: contain !important;
              display: block !important;
              margin: 0 !important;
              padding: 0 !important;
            }
            
            /* Main content styling */
            main {
              width: 100% !important;
              max-width: 400px !important;
              margin: 0 auto !important;
              padding: 0 !important;
            }
            
            /* Heading styling */
            h1 {
              font-size: 32px !important;
              font-weight: 700 !important;
              color: rgb(15 23 42) !important;
              margin-bottom: 0.75rem !important;
              letter-spacing: -0.025em !important;
              line-height: 1.25 !important;
              text-align: left !important;
            }
            
            /* Paragraph styling */
            p {
              color: rgb(100 116 139) !important;
              font-weight: 500 !important;
              font-size: 1.125rem !important;
              line-height: 1.625 !important;
              text-align: left !important;
            }
            
            /* Link hover effects */
            a:hover {
              color: rgb(15 23 42) !important;
            }
            
            /* Ensure proper box sizing */
            *, *::before, *::after {
              box-sizing: border-box;
            }
            
            /* Body and root styling */
            body {
              font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
            
            /* Container styling - Full Screen Enterprise */
            .kinde-layout-wrapper {
              position: relative;
              width: 100vw;
              height: 100vh;
              overflow: hidden;
              background-color: white; /* Fallback */
              padding: 0 !important; /* Remove outer padding */
            }
            
            .kinde-layout-container {
              display: flex !important;
              flex-direction: column !important;
              width: 100% !important;
              height: 100% !important;
              max-width: none !important;
              max-height: none !important;
              margin: 0 !important;
              border-radius: 0 !important;
              border: none !important;
              box-shadow: none !important;
            }
            
            .kinde-login-panel {
              width: 100% !important;
              height: auto !important;
              padding: 2rem !important;
              overflow-y: auto;
              background-color: white;
            }
            
            .kinde-marketing-panel {
              display: none !important;
            }
            
            /* Responsive layout for desktop */
            @media screen and (min-width: 1024px) {
              .kinde-layout-container {
                flex-direction: row !important;
              }
              
              .kinde-login-panel {
                width: 40% !important; /* Adjusted ratio */
                height: 100% !important;
                padding: 4rem 6rem !important; /* More spacious padding */
                display: flex !important;
                flex-direction: column !important;
                justify-content: center !important;
                max-width: none !important; /* Remove constraints */
              }
              
              .kinde-marketing-panel,
              #marketing-panel {
                display: block !important;
                width: 60% !important;
                height: 100% !important;
                background-color: rgb(15 23 42) !important;
              }
            }
            img {
              max-width: 100%;
              height: auto;
            }
            
            /* Button and input reset */
            button, input {
              font-family: inherit;
            }
            
            /* Focus styles */
            *:focus {
              outline: none;
            }
            
            *:focus-visible {
              outline: 2px solid rgb(59 130 246);
              outline-offset: 2px;
            }
            
            /* Keyframes for animations */
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(10px); }
              to { opacity: 1; transform: translateY(0); }
            }
            
            @keyframes slideInRight {
              from { opacity: 0; transform: translateX(20px); }
              to { opacity: 1; transform: translateX(0); }
            }
            
            @keyframes float {
              0% { transform: translateY(0px); }
              50% { transform: translateY(-10px); }
              100% { transform: translateY(0px); }
            }
            
            @keyframes pulse-soft {
              0%, 100% { opacity: 1; }
              50% { opacity: 0.8; }
            }

            /* Animated elements */
            .animate-fade-in {
              animation: fadeIn 0.6s ease-out forwards;
            }
            
            .animate-slide-in {
              animation: slideInRight 0.8s ease-out forwards;
            }
            
            .animate-float {
              animation: float 6s ease-in-out infinite;
            }

            /* Enterprise typography helpers */
            :root {
              --zopkit-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
            }

            /* Ensure marketing panel visuals are crisp */
            #marketing-panel {
              background: radial-gradient(circle at top right, rgb(15 23 42), rgb(10 15 30)) !important;
            }

            /* Button hover effects */
            [data-kinde-button-primary] {
              position: relative;
              overflow: hidden;
            }
            
            [data-kinde-button-primary]::after {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0));
              opacity: 0;
              transition: opacity 0.2s;
            }
            
            [data-kinde-button-primary]:hover::after {
              opacity: 1;
            }
            
            /* Input focus ring animation */
            [data-kinde-input] {
              transition: border-color 0.2s, box-shadow 0.2s;
            }
            
            [data-kinde-root] table th,
            [data-kinde-root] table td {
              padding: 0.5rem 0.75rem;
            }
            
            /* Ensure grid layout works */
            [data-kinde-root] [style*="grid-template-columns"] {
              display: grid !important;
            }
            
            /* SVG icons styling */
            [data-kinde-root] svg {
              display: inline-block;
              vertical-align: middle;
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


