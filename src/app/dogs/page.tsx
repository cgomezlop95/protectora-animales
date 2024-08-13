import React from "react";
import { connectToDB } from "../lib/data";

export default async function Dogs() {
  const client = await connectToDB();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {client && <p className="text-green-500 my-2">Connected to database!</p>}
      <h1>This is the dogs page</h1>
    </main>
  );
}
