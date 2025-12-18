import {
  getKindeCSRF,
  getKindeRequiredCSS,
  getKindeRequiredJS,
  getSVGFaviconUrl,
  type KindePageEvent,
} from "@kinde/infrastructure";
import React from "react";
import Head from "next/head";

interface RootProps extends KindePageEvent {
  children: React.ReactNode;
}

export const Root = ({
  children,
  context,
  request,
}: RootProps): React.JSX.Element => {
  // Helper to safely render Kinde assets
  const renderKindeAsset = (asset: any) => {
    if (typeof asset === 'string' && asset.startsWith('@')) {
      return null;
    }
    return asset;
  };

  return (
    <>
      <Head>
        <title>{context.widget.content.page_title}</title>
        <meta name="csrf-token" content={getKindeCSRF()} />
        <link rel="icon" type="image/svg+xml" href={getSVGFaviconUrl()} />
        {renderKindeAsset(getKindeRequiredCSS())}
        {renderKindeAsset(getKindeRequiredJS())}
      </Head>
      <div data-kinde-root="true" dir={request.locale.isRtl ? "rtl" : "ltr"} lang={request.locale.lang}>
        {children}
      </div>
    </>
  );
};
