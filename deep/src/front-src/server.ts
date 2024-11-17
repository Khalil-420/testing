import { serve } from "https://deno.land/std@0.128.0/http/server.ts";
import { createRequestHandlerWithStaticFiles } from "@remix-run/deno";
// Import path interpreted by the Remix compiler
import * as build from "@remix-run/dev/server-build";
import { Url } from "./mod.ts";
const remixHandler = createRequestHandlerWithStaticFiles({
  build,
  getLoadContext: () => ({
  }),

  mode: build.mode,
});

const port = Number(Deno.env.get("FRONT_PORT")) || 8010;
console.log(Deno.env.get("FRONT_PORT"));
console.log(`Listening on http://localhost:${port}`);
serve(async (request) => {
  const newRequest = new Request(Url(request), request);
  return remixHandler(newRequest);
}, { port });
