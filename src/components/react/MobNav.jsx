// import Paths from "@component/shared/paths.astro";
import { useState } from "react";

export default function MobNav({ children }) {
  const [ShowNav, setShowNav] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowNav((e) => !e)}
        className="space-y-1 px-0 py-0 lg:hidden"
      >
        <div className="w-7 h-0.5 rounded-sm bg-primary"></div>
        <div className="w-7 h-0.5 rounded-sm bg-primary"></div>
        <div className="w-7 h-0.5 rounded-sm bg-primary"></div>
      </button>
      <div
        className={`flex flex-col h-screen items-end bg-[#eeeff4] px-6 w-10/12 md:w-1/3 fixed top-20 md:top-24 right-0 lg:hidden transition-transform ease-in-out duration-300 backdrop-blur-sm z-20 ${ShowNav ? "translate-x-0" : "translate-x-[100svw]"}`}
      >
        {children}
        <button className="outline_btn mt-12 w-fit">Contact US</button>
      </div>
    </>
  );
}
