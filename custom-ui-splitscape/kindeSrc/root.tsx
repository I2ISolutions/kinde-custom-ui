import {
  getKindeCSRF,
  getKindeRequiredCSS,
  getKindeRequiredJS,
  getSVGFaviconUrl,
  type KindePageEvent,
} from "@kinde/infrastructure";
import React, { useEffect } from "react";

interface RootProps extends KindePageEvent {
  children: React.ReactNode;
}

export const Root = ({
  children,
  context,
  request,
}: RootProps): React.JSX.Element => {
  useEffect(() => {
    // Set document title
    document.title = context.widget.content.page_title;

    // Set CSRF token meta tag
    let csrfMeta = document.querySelector('meta[name="csrf-token"]');
    if (!csrfMeta) {
      csrfMeta = document.createElement('meta');
      csrfMeta.setAttribute('name', 'csrf-token');
      document.head.appendChild(csrfMeta);
    }
    csrfMeta.setAttribute('content', getKindeCSRF());

    // Set favicon
    let favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
    if (!favicon) {
      favicon = document.createElement('link');
      favicon.rel = 'icon';
      favicon.type = 'image/svg+xml';
      document.head.appendChild(favicon);
    }
    favicon.href = getSVGFaviconUrl();
  }, [context.widget.content.page_title]);

  // Helper to safely render Kinde assets
  const renderKindeAsset = (asset: any) => {
    if (typeof asset === 'string' && asset.startsWith('@')) {
      return null;
    }
    return asset;
  };

  return (
    <>
      {renderKindeAsset(getKindeRequiredCSS())}
      {renderKindeAsset(getKindeRequiredJS())}
      <div data-kinde-root="true" dir={request.locale.isRtl ? "rtl" : "ltr"} lang={request.locale.lang}>
        {children}
      </div>
    </>
  );
};
