import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { computed, signal } from "@preact/signals";
import { signed } from "lib/auth.ts";


export default function AuthStateButton() {
  return (
    <form method="GET" action={signed.value.signed == "In" ? "/sign-out" : "/sign-in"}>
      <button
        class="px-3 py-2 bg-blue-200 text-blue-800 rounded hover:bg-blue-300 active:bg-blue-400"
      >{signed.value.signed == "In" ? "Sign Out" : "Sign In"}</button>
    </form>
  );
}
