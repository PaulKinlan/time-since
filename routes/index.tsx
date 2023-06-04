import { Head } from "$fresh/runtime.ts";
import Header from "../components/Header.tsx";
import { Pool } from "https://deno.land/x/postgres@v0.17.0/mod.ts";

import { UserSession } from "../lib/props.ts";

export const handler: Handlers = {
  async GET(req, ctx) {
    const email = ctx.state.session.get("email");
    return await ctx.render({ email });
  }
}

export default function Home(props: PageProps<UserSession>) {
  return (
    <>
      <Head>
        <title>Time since</title>
      </Head>
      <Header></Header>
      <div class="p-4 mx-auto max-w-screen-md">
        <p class="my-6">
          {props.data.email ? `Hello, ${props.data.email}!` : <p>Hello, stranger! <a href="/sign-in">Sign in</a> or <a href="/sign-up">sign up</a> to get started.</p>}
        </p>
      </div>
    </>
  );
}
