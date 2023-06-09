/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { supabase } from "lib/supabase.ts";
import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";

import twindPlugin from "$fresh/plugins/twind.ts";
import twindConfig from "./twind.config.ts";

supabase.auth.onAuthStateChange(async (event, session) => {
  console.log(event, session);
  if (event == "SIGNED_IN" || event == "TOKEN_REFRESHED" && session != null) {
    const { access_token, expires_in } = session!;
    const stringified = JSON.stringify(session);

    console.log(access_token, stringified, expires_in);

   // await redis.set(access_token, stringified, { ex: expires_in });
  }
});

await start(manifest, { plugins: [twindPlugin(twindConfig)] });
