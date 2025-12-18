"use server";

import { renderToString } from "react-dom/server.browser";
import {
  getKindeRequiredCSS,
  getKindeRequiredJS,
  getKindeNonce,
  getKindeCSRF,
  getSVGFaviconUrl,
  setKindeDesignerCustomProperties,
  type KindePageEvent,
} from "@kinde/infrastructure";
import { Widget } from "../../../components/widget";
import { DefaultLayout } from "../../../layouts/default";

const Layout = async ({ request, context }: KindePageEvent) => {

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
        <link rel="stylesheet" href="/kindeSrc/styles/globals.css" />
      </head>
      <body>
        <div data-kinde-root="/admin">
          <DefaultLayout>
            <Widget
              heading={context.widget.content.heading}
              description={context.widget.content.description}
            />
          </DefaultLayout>
        </div>
      </body>
    </html>
  );
};

export default async function Page(event: KindePageEvent) {
  const page = await Layout(event);
  return renderToString(page);
}