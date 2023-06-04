import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export default function AuthStateButton(
  props: JSX.HTMLAttributes<HTMLButtonElement>,
) {
  return (
    <form method="GET" action={props.signed == "In" ? "/sign-out" : "/sign-in"}>
      <button
        class="px-3 py-2 bg-blue-200 text-blue-800 rounded hover:bg-blue-300 active:bg-blue-400"
      >{props.signed == "In" ? "Sign Out" : "Sign In"}</button>
    </form>
  );
}
