import { Head } from "$fresh/runtime.ts";
import { Handlers } from "$fresh/server.ts";

import AuthForm from "../islands/AuthForm.tsx";
import { supabase } from "lib/supabase.ts";
import { signed } from "lib/auth.ts";

export type Data = {
  isAllowed: boolean;
};

export const handler: Handlers = {
  GET(req, ctx) {
    return ctx.render();
  },
  async POST(req, ctx) {
    const form = await req.formData();
    const email = form.get("email");
    const password = form.get("password");

    const { data: { user, session }, error } = await supabase.auth.signInWithPassword({
      email: String(email),
      password: String(password),
    });

    if (error != null) {
      console.error(error);
      // We have an error
      // It might be that they are not yet confirmed
    }
    else {
      signed.value = { email: user?.email, signed: "In" };
      ctx.state.session.set("email", user.email);
    }

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
        <p>If you don't have an account, <a href="/sign-up">Sign up</a>.</p>
      </div>
    </>
  );
}
