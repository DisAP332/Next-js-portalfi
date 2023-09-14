"use client";

import Image from "next/image";
import SettingsIcon from "../../assets/icons/settings.svg";
import ProfileIcon from "../../assets/icons/profile.svg";
import ContentIcon from "../../assets/icons/content.svg";
import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { showorHider } from "@/app/slices/menuTogglerSlice";
import type { RootState } from "@/store";

export default function Navigation() {
  const dispatch = useDispatch();
  const profile = useSelector((state: RootState) => state.menuToggler.profile);
  const content = useSelector((state: RootState) => state.menuToggler.content);
  const settings = useSelector(
    (state: RootState) => state.menuToggler.settings
  );

  return (
    <div className="bg-slate-800 shadow-xl shadow-slate-700 navigation pt-10">
      <div className="flex flex-col gap-y-3">
        <div className="nav-toggleable flex flex-col place-items-center">
          {/* ---- begin profile menu ------ */}
          <button
            onClick={() => dispatch(showorHider("profile"))}
            style={profile.toggledcss}
          >
            <div className="flex">
              <div className="border-r-2 border-slate-500 mr-5 pr-2">
                <Image src={ProfileIcon} alt="settings icon" />
              </div>
              Profile
            </div>
          </button>
          <div
            className="flex flex-col togglable-dropdown"
            style={profile.dropdowncss}
          >
            <button>Settings</button>
            <button>Logout</button>
          </div>
        </div>
        {/* ------ begin content menu ------- */}
        <div className="nav-toggleable flex flex-col place-items-center">
          <button
            onClick={() => dispatch(showorHider("content"))}
            style={content.toggledcss}
          >
            <div className="border-r-2 border-slate-500 mr-5 pr-2">
              <Image src={ContentIcon} alt="settings icon" width={22} />
            </div>
            Content
          </button>
          <div
            className="flex flex-col togglable-dropdown"
            style={content.dropdowncss}
          >
            <button>Events</button>
            <button>Menu</button>
            <button>Drinks</button>
            <button>Advertisement</button>
            <button>Specials</button>
          </div>
        </div>
        {/* ------- begin settings menu ------ */}
        <div className="nav-toggleable flex flex-col place-items-center">
          <button
            onClick={() => dispatch(showorHider("settings"))}
            style={settings.toggledcss}
          >
            <div className="border-r-2 border-slate-500 mr-5 pr-2">
              <Image src={SettingsIcon} alt="settings icon" />
            </div>
            Settings
          </button>
          <div
            className="flex flex-col togglable-dropdown"
            style={settings.dropdowncss}
          >
            <button>Settings</button>
          </div>
        </div>
      </div>
      <div className="gap-y-3 flex flex-col place-items-center border-t-2 border-slate-500 pt-10"></div>
    </div>
  );
}
