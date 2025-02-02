import { cssBundleHref } from "@remix-run/css-bundle";
import {
  json,
  type LinksFunction,
  type LoaderFunctionArgs,
} from "@remix-run/deno";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import React from "react";
import { NavBar } from "./components/navbar.tsx";
import stylesheet from "./styles/global.css";
import Footer from "./components/footer.tsx";

import {
  getDomainEnv,
  getSupabaseEnv,
  getSupabaseWithSessionAndHeaders,
} from "./lib/supabase-server.ts";
import { useSupabase } from "./lib/supabase.ts";
import { MessageDialog } from "./components/ui/messagedialog.tsx";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const { serverSession, headers } = await getSupabaseWithSessionAndHeaders({
    request,
  });

  const domainUrl = await getDomainEnv();

  const env = getSupabaseEnv();

  return json({ serverSession, env, domainUrl }, { headers });
};

export default function App() {
  const { env, serverSession, domainUrl } = useLoaderData<typeof loader>();

  const { supabase } = useSupabase({ env, serverSession });

  const [openSign, setOpenSign] = React.useState(false); // Add state for sign-in pop-up
  const [message, setMessage] = React.useState(""); // Add state for message in pop-up

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <NavBar serverSession={serverSession} supabase={supabase} />

      <body>
        <MessageDialog
          message={message}
          open={openSign}
          setopen={setOpenSign}
        />

        <Outlet context={{ supabase, domainUrl, setOpenSign, setMessage }} />
        <ScrollRestoration />
        <Scripts />
        <LiveReload port={8002} />
      </body>

      <Footer />
    </html>
  );
}
