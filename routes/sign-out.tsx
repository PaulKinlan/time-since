import { Head } from "$fresh/runtime.ts";
import { Handlers } from "$fresh/server.ts";

import AuthForm from "../islands/AuthForm.tsx";

import { signed } from "lib/auth.ts";

export type Data = {
  isAllowed: boolean;
};

export const handler: Handlers = {
  GET(req, ctx) {
    const { session } = ctx.state;
    if (session) {
      signed.value = { email: undefined, signed: "Out" };
      session.clear();
    }

    // Redirect user to thank you page.
    const headers = new Headers();
    headers.set("location", "/");
    return new Response(null, {
      status: 303, // See Other
      headers,
    });
  }
}

export default function Home() {
  // Get the connection string from the environment variable "DATABASE_URL"

  return (
    <>
      <Head>
        <title>Sign In</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <AuthForm mode="In" />
        {signed.value.signed == "Out" ?
          <p>If you don't have an account, <a href="/sign-up">Sign up</a>.</p>
            : <></> }
      </div>
    </>
  );
}
