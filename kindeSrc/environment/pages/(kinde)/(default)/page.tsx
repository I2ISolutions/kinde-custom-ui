"use server";

import React from "react";
import { renderToString } from "react-dom/server.browser";
import {
  getKindeWidget,
  type KindePageEvent,
} from "@kinde/infrastructure";
import { Widget } from "../../../../components/widget";
import { Layout } from "../../layout";

export default async function Page(event: KindePageEvent) {
  const page = await Layout({
    ...event,
    children: (
      <Widget
        heading={event.context.widget.content.heading}
        description={event.context.widget.content.description}
        kindeWidget={getKindeWidget()}
      />
    ),
  });
  return renderToString(page);
}
