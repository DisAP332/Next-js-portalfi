"use client";

type NavProps = {
  show: boolean;
  setShow: Function;
};

import ProfileDD from "../global/buttons/ProfileDD";
import SettingsDD from "../global/buttons/SettingsDD";
import ContentDD from "../global/buttons/ContentDD";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { showorHider } from "@/app/slices/sectionTogglerSlice";

export default function Navigation(Props: NavProps) {
  let show;
  if (!Props.show) {
    show = {
      display: "none",
    };
  } else {
    show = {
      display: "block",
    };
  }

  const dispatch = useDispatch();

  const [showSection, setShowSection] = useState({ events: false });

  return (
    <div className="navigation-tablet" style={show}>
      <div className="flex flex-col gap-y-3">
        <ProfileDD />
        <SettingsDD />
        <ContentDD />
      </div>
    </div>
  );
}
