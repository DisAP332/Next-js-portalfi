"use client";

import ProfileDD from "../global/buttons/ProfileDD";
import ContentDD from "../global/buttons/ContentDD";
import SettingsDD from "../global/buttons/SettingsDD";

export default function NavigationSide() {
  return (
    <div className="bg-slate-800 shadow-xl shadow-slate-700 navigation pt-10">
      <div className="flex flex-col gap-y-3">
        <ProfileDD />
        <ContentDD />
        <SettingsDD />
      </div>
      <div className="gap-y-3 flex flex-col place-items-center border-t-2 border-slate-500 pt-10"></div>
    </div>
  );
}
