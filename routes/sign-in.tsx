import { Head } from "$fresh/runtime.ts";
import { getCookies } from "std/http/cookie.ts";
import AuthForm from "../islands/AuthForm.tsx";

export type Data = {
  isAllowed: boolean;
};

export const handler: Handlers = {
  GET(req, ctx) {
    const cookies = getCookies(req.headers);
    return ctx.render({ isAllowed: cookies.auth == "superzitrone" });
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
      </div>
    </>
  );
}
