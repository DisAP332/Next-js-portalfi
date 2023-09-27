"use client";
import Body from "@/components/desktop/Body";
import Header from "@/components/desktop/Header";
import Navigation from "@/components/desktop/Navigation";

import HeaderTablet from "@/components/tablet/Header";
import { useRouter } from "next/navigation";

export default function Profile() {
  let loggedIn;

  if (typeof window !== "undefined" && window.localStorage) {
    loggedIn = localStorage.getItem("JBWtoken");
  }

  const router = useRouter();
  // if not logged in reroute
  if (!loggedIn) {
    router.push("/");
  }

  return (
    <>
      <div id="app-desktop" className="h-screen w-screen">
        <Header />
        <div className="app-desktop-container">
          <Navigation />
          <Body />
        </div>
      </div>
      <div id="app-tablet" className="h-screen w-screen">
        <HeaderTablet />
      </div>
    </>
  );
}
