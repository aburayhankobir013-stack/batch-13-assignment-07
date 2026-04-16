"use client";
import Link from "next/link";

function ErrorPage(){
  return(
    <div className="flex-1 bg-slate-900 flex flex-col gap-5 text-white justify-center items-center">
      <h1 className="text-5xl font-bold">404</h1>
      <p className="font-bold text-3xl">Page Not Found!</p>
      <div className="text-4xl">
        😭😭😭😭😭😭😭
      </div>
      <button className="px-5 py-2 bg-green-500 rounded-xs shadow-md font-bold cursor-pointer hover:bg-green-700">
        <Link href="/">
          Go Home
        </Link>
      </button>
    </div>
  );
}

export default ErrorPage;