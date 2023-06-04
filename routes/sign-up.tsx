import { Head } from "$fresh/runtime.ts";

import { AuthForm } from "../islands/AuthForm.tsx";

export default function Home() {

  return (
    <>
      <Head>
        <title>Sign Up</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <AuthForm mode="Up" />
      </div>
    </>
  );
}
