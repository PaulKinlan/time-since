import { Head } from "$fresh/runtime.ts";
import { Pool } from "https://deno.land/x/postgres@v0.17.0/mod.ts";

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
                <title>Sign Up</title>
            </Head>
            <div class="p-4 mx-auto max-w-screen-md">
                <button>Sign In</button>
            </div>
        </>
    );
}
