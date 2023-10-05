"use client";
import Body from "@/components/desktop/Body";
import HeaderDesktop from "@/components/desktop/Header";
import Navigation from "@/components/desktop/Navigation";

import BodyTablet from "@/components/tablet/Body";

import HeaderTablet from "@/components/tablet/Header";
import HeaderMobile from "@/components/mobile/Header";
import BodyMobile from "@/components/mobile/Body";
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
        <HeaderDesktop />
        <div className="app-desktop-container">
          <Navigation />
          <Body />
        </div>
      </div>
      <div id="app-tablet" className="h-screen w-screen">
        <HeaderTablet />
        <div className="app-tablet-container">
          <BodyTablet />
        </div>
      </div>
      <div id="app-mobile" className="h-screen w-screen">
        <HeaderMobile />
        <BodyMobile />
      </div>
    </>
  );
}
