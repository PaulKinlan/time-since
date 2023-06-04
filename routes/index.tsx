import { Head } from "$fresh/runtime.ts";
import { Pool } from "https://deno.land/x/postgres@v0.17.0/mod.ts";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  // Get the connection string from the environment variable "DATABASE_URL"
  const databaseUrl = Deno.env.get("DATABASE_URL")!;

  // Create a database pool with three connections that are lazily established
  const pool = new Pool(databaseUrl, 3, true);

  // Connect to the database
  const connection = await pool.connect();

  try {
    // Create the table
    await connection.queryObject`
    CREATE TABLE IF NOT EXISTS todos (
      id SERIAL PRIMARY KEY,
      title TEXT NOT NULL
    )
  `;
  } finally {
    // Release the connection back into the pool
    connection.release();
  }

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
          Welcome to `fresh`. Try updating this message in the ./routes/index.tsx
          file, and refresh.
        </p>
        <Counter start={3} />
      </div>
    </>
  );
}
