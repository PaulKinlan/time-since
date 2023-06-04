type Props = {
  mode: "In" | "Up";
};

export function AuthForm({ mode }: Props) {
  const signIn = {
    title: "Sign In",
    href: "/sign-in",
    text: "Have an account?",
  };

  const signUp = {
    title: "Create account",
    href: "/sign-up",
    text: "No account?",
  };

  const buttProps = mode == "In" ? signIn : signUp;

  return (
    <div class="items-stretch min-w-0">
      <div class="flex justify-center">
        <h2 class="my-4">{buttProps.title}</h2>
      </div>

      <form method="post" class="flex flex-col space-y-4 min-w-0">

        <input type="email" name="email" placeholder="Email" class="form-control" />
        <input type="password" name="password" placeholder="Password" class="form-control" />
       
        <input type="submit" value={buttProps.title} class="btn btn-primary" />
       
      </form>
    </div>
  );
}
