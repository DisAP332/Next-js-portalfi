import { useSelector, useDispatch } from "react-redux";
import { showorHiderMenu } from "@/app/slices/menuTogglerSlice";
import type { RootState } from "@/store";

import SettingsIcon from "../../../assets/icons/settings.svg";
import Image from "next/image";

export default function SettingsDD() {
  const dispatch = useDispatch();
  const settings = useSelector(
    (state: RootState) => state.menuToggler.settings
  );
  return (
    <div className="nav-toggleable flex flex-col place-items-center">
      <button
        onClick={() => dispatch(showorHiderMenu("settings"))}
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
  );
}
