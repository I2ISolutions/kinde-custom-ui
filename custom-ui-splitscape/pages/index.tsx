import React from "react";
import { Widget } from "../kindeSrc/components/widget";
import { DefaultLayout } from "../kindeSrc/layouts/default";

// Mock Kinde event data for local development
const mockKindeEvent = {
  context: {
    widget: {
      content: {
        page_title: "Zopkit - Login",
        heading: "Welcome back to Zopkit",
        description: "Sign in to access your dashboard",
        logo_alt: "Zopkit Logo",
      },
    },
  },
  request: {
    authUrlParams: {
      orgCode: "org_default" as any,
      state: "",
      clientId: "",
      redirectUri: "",
    },
    locale: {
      isRtl: false,
      lang: "en",
    },
    route: {
      context: "login",
      flow: "login",
      path: "auth",
    },
  },
};

export default function Home() {
  return (
    <DefaultLayout>
      <Widget
        heading={mockKindeEvent.context.widget.content.heading}
        description={mockKindeEvent.context.widget.content.description}
      />
    </DefaultLayout>
  );
}
