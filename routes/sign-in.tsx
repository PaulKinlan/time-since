import { Head } from "$fresh/runtime.ts";
import { getCookies } from "std/http/cookie.ts";
import AuthForm from "../islands/AuthForm.tsx";
import { supabase } from "lib/supabase.ts";


export type Data = {
  isAllowed: boolean;
};

export const handler: Handlers = {
  GET(req, ctx) {
    const email = ctx.state.session.get("email");
    console.log(ctx.state.session.get("email"));

    return ctx.render({ email });
  },
  async POST(req, ctx) {
    const form = await req.formData();
    const email = form.get("email");
    const password = form.get("password");

    const { data, error } = await supabase.auth.signInWithPassword({
      email: String(email),
      password: String(password),
    });

    console.log(data, error )

    if (error != null) {
      // We have an error
      // It might be that they are not yet confirmed
    }
    else {
      console.log("USER", data)
      ctx.state.session.set("email", user.email);
    }
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
