import { Head } from "$fresh/runtime.ts";
import { Handlers } from "$fresh/server.ts";

import Header from "../components/Header.tsx";
import { Pool } from "https://deno.land/x/postgres@v0.17.0/mod.ts";

import { UserSession } from "../lib/props.ts";
import { signed } from "lib/auth.ts";


export const handler: Handlers = {
  async GET(req, ctx) {
    const email = ctx.state.session.get("email");
    signed.value = { email, signed: email ? "In" : "Out" };

    return await ctx.render();
  }
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Time since</title>
      </Head>
      <Header></Header>
      <div class="p-4 mx-auto max-w-screen-md">
        <p class="my-6">
          {signed.value.email ? `Hello, ${signed.value.email}!` : <p>Hello, stranger! <a href="/sign-in">Sign in</a> or <a href="/sign-up">sign up</a> to get started.</p>}
        </p>
      </div>
    </>
  );
}
