import { Typography } from "@material-tailwind/react";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="flex h-screen justify-center items-center bg-[url('https://images.unsplash.com/photo-1463778476191-ec665605a4d4?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center shadow-lg">
      <div>
        <Link
          href="https://gamepinoy.com/r/C-6A9BDEE2"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full shadow-lg"
        >
          Register Now
        </Link>
      </div>
    </div>
  );
}
