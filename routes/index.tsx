import { Head } from "$fresh/runtime.ts";
import { Pool } from "https://deno.land/x/postgres@v0.17.0/mod.ts";
import Counter from "../islands/Counter.tsx";

export default function Home() {
 

  return (
    <>
      <Head>
        <title>Time since</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <img
          src="/logo.svg"
          class="w-32 h-32"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <p class="my-6">
        </p>
        <Counter start={3} />
      </div>
    </>
  );
}
