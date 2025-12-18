"use server";

import { renderToString } from "react-dom/server.browser";
import {
  type KindePageEvent,
} from "@kinde/infrastructure";
import { Widget } from "kindeSrc/components/widget";
import { Layout } from "../../layout";

export default async function Page(event: KindePageEvent) {
  const page = await Layout({
    ...event,
    children: (
      <Widget
        heading={event.context.widget.content.heading}
        description={event.context.widget.content.description}
      />
    ),
  });
  return renderToString(page);
}