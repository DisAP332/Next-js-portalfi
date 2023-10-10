"use client";
import Body from "@/components/desktop/Body";
import HeaderDesktop from "@/components/desktop/Header";

import BodyTablet from "@/components/tablet/Body";

import HeaderTablet from "@/components/tablet/Header";
import NavigationSide from "@/components/desktop/NavigationSide";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { dataActions } from "../slices/contentDataSlice";
import Storage from "@/components/global/Storage";

export default function Profile() {
  const router = useRouter();
  const dispatch = useDispatch();

  let loggedIn: string | null = null;

  if (typeof window !== "undefined" && window.localStorage) {
    loggedIn = localStorage.getItem("JBWtoken");
  }

  // check if user is logged in. if not send them back to the login screen.
  function checkIfLoggedIn() {
    if (!loggedIn) {
      router.push("/");
    }
  }

  function getDataFromLocalStorageToUpdateState() {
    dispatch(
      dataActions({ requested: "drinks", data: Storage.getItem("drinks") })
    );
    dispatch(
      dataActions({ requested: "events", data: Storage.getItem("events") })
    );
    dispatch(dataActions({ requested: "food", data: Storage.getItem("food") }));
  }

  useEffect(() => {
    checkIfLoggedIn();
    setTimeout(() => {
      getDataFromLocalStorageToUpdateState();
      console.log("data ready");
    }, 1000);
  });

  return (
    <>
      <div id="app-desktop" className="h-screen w-screen">
        <HeaderDesktop />
        <div className="app-desktop-container">
          <NavigationSide />
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
        <h1>MOBILE UNAVAILABLE FOR THIS APPLICATION</h1>
      </div>
    </>
  );
}
