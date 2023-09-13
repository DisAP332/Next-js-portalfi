"use client";

import Image from "next/image";
import SettingsIcon from "../../assets/icons/settings.svg";
import ProfileIcon from "../../assets/icons/profile.svg";
import ContentIcon from "../../assets/icons/content.svg";
import { useState } from "react";

export default function Navigation() {
  const [menuToggled, setMenuToggled] = useState({
    profile: {
      toggled: false,
      dropdowncss: { display: "none" },
      toggledcss: { borderBottomLeftRadius: 20, borderBottomRightRadius: 20 },
    },
    content: {
      toggled: false,
      dropdowncss: { display: "none" },
      toggledcss: { borderBottomLeftRadius: 20, borderBottomRightRadius: 20 },
    },
    settings: {
      toggled: false,
      dropdowncss: { display: "none" },
      toggledcss: { borderBottomLeftRadius: 20, borderBottomRightRadius: 20 },
    },
  });

  function showorHide(requestor: string) {
    const toggle = {
      toggled: true,
      dropdowncss: { display: "block" },
      toggledcss: { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 },
    };

    const notToggled = {
      toggled: false,
      dropdowncss: { display: "none" },
      toggledcss: { borderBottomLeftRadius: 20, borderBottomRightRadius: 20 },
    };
    if (
      (!menuToggled.profile.toggled && requestor === "profile") ||
      (!menuToggled.content.toggled && requestor === "content") ||
      (!menuToggled.settings.toggled && requestor === "settings")
    ) {
      return toggle;
    } else {
      return notToggled;
    }
  }

  return (
    <div className="bg-slate-800 shadow-xl shadow-slate-700 navigation pt-10">
      <div className="flex flex-col gap-y-3">
        <div className="nav-toggleable flex flex-col place-items-center">
          {/* ---- begin profile menu ------ */}
          <button
            onClick={() =>
              setMenuToggled({
                ...menuToggled,
                profile: showorHide("profile"),
              })
            }
            style={menuToggled.profile.toggledcss}
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
            style={menuToggled.profile.dropdowncss}
          >
            <button>Settings</button>
            <button>Logout</button>
          </div>
        </div>
        {/* ------ begin content menu ------- */}
        <div className="nav-toggleable flex flex-col place-items-center">
          <button
            onClick={() =>
              setMenuToggled({
                ...menuToggled,
                content: showorHide("content"),
              })
            }
            style={menuToggled.content.toggledcss}
          >
            <div className="border-r-2 border-slate-500 mr-5 pr-2">
              <Image src={ContentIcon} alt="settings icon" width={22} />
            </div>
            Content
          </button>
          <div
            className="flex flex-col togglable-dropdown"
            style={menuToggled.content.dropdowncss}
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
            onClick={() =>
              setMenuToggled({
                ...menuToggled,
                settings: showorHide("settings"),
              })
            }
            style={menuToggled.settings.toggledcss}
          >
            <div className="border-r-2 border-slate-500 mr-5 pr-2">
              <Image src={SettingsIcon} alt="settings icon" />
            </div>
            Settings
          </button>
          <div
            className="flex flex-col togglable-dropdown"
            style={menuToggled.settings.dropdowncss}
          >
            <button>Settings</button>
          </div>
        </div>
      </div>
      <div className="gap-y-3 flex flex-col place-items-center border-t-2 border-slate-500 pt-10"></div>
    </div>
  );
}
