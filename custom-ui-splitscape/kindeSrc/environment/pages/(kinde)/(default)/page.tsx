import { Widget } from "../../../components/widget";
import { DefaultLayout } from "../../../layouts/default";
import { Root } from "../../../root";
import { type KindePageEvent } from "@kinde/infrastructure";
import React from "react";
import { GetServerSideProps } from "next";

interface PageProps {
  kindeEvent: KindePageEvent;
}

const DefaultPage: React.FC<PageProps> = ({ kindeEvent }) => {
  return (
    <Root context={kindeEvent.context} request={kindeEvent.request}>
      <DefaultLayout>
        <Widget
          heading={kindeEvent.context.widget.content.heading}
          description={kindeEvent.context.widget.content.description}
        />
      </DefaultLayout>
    </Root>
  );
};

export default DefaultPage;

// Note: Kinde custom UI pages receive event data via server-side props
// This is a placeholder - the actual event data comes from Kinde's infrastructure
export const getServerSideProps: GetServerSideProps<PageProps> = async (context) => {
  // In a real Kinde custom UI setup, the event data would be injected here
  // For now, we'll provide a minimal structure to prevent errors
  const kindeEvent: KindePageEvent = {
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

  return {
    props: {
      kindeEvent,
    },
  };
};